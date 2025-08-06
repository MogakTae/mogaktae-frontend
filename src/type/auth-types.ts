export interface User {
    id: string;
    username: string;
    email?: string; // ? = 선택적 속성
    avatarUrl?: string;
}

export interface AuthTokens {
    accessToken: string; // API 요청할 때 사용하는 토큰
    refreshToken: string; // accessToken 갱신할 때 사용하는 토큰
}

export interface AuthState {
    user: User | null; // 로그인한 사용자 정보 (로그인 안했으면 null)
    isAuthenticated: boolean; // true = 로그인됨, false = 로그인 안됨
    isLoading: boolean; // true = 로딩중, false = 로딩완료
    error: string | null; // 에러 메시지 (에러 없으면 null)
}
