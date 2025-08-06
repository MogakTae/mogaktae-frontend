// services/auth.service.ts
import axios from 'axios';
import type { AuthTokens } from '../type/auth-types';

const API_BASE_URL = 'https://mogaktae.inuappcenter.kr';
const TOKEN_STORAGE_KEY = 'auth_tokens';

class AuthService {
    private tokens: AuthTokens | null = null;

    constructor() {
        this.loadTokensFromStorage();
        this.setupBasicAxiosInterceptor();
    }

    // 토큰 저장
    setTokens(tokens: AuthTokens): void {
        this.tokens = tokens;
        localStorage.setItem(TOKEN_STORAGE_KEY, JSON.stringify(tokens));
    }

    // 토큰 가져오기
    getTokens(): AuthTokens | null {
        return this.tokens;
    }

    // 토큰 존재 여부 확인
    hasTokens(): boolean {
        return this.tokens !== null && this.tokens.accessToken !== '';
    }

    // 토큰 클리어
    clearTokens(): void {
        this.tokens = null;
        localStorage.removeItem(TOKEN_STORAGE_KEY);
    }

    // 로컬 스토리지에서 토큰 로드
    private loadTokensFromStorage(): void {
        try {
            const storedTokens = localStorage.getItem(TOKEN_STORAGE_KEY);
            if (storedTokens) {
                this.tokens = JSON.parse(storedTokens);
            }
        } catch (error) {
            console.error('토큰 로드 실패:', error);
            this.clearTokens();
        }
    }

    // 로그아웃
    async logout(): Promise<void> {
        try {
            if (this.tokens?.refreshToken) {
                await axios.post(`${API_BASE_URL}/auth/logout`, {
                    refreshToken: this.tokens.refreshToken,
                });
            }
        } finally {
            this.clearTokens();
        }
    }

    // 기본 인터셉터 설정
    private setupBasicAxiosInterceptor(): void {
        axios.interceptors.request.use(
            (config) => {
                if (this.tokens?.accessToken && config.url?.startsWith(API_BASE_URL)) {
                    config.headers.Authorization = `Bearer ${this.tokens.accessToken}`;
                }
                return config;
            },
            (error) => Promise.reject(error)
        );
    }
}

export const authService = new AuthService();
