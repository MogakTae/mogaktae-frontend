import React, { type ReactNode } from 'react';
import { useCallback, useReducer } from 'react';

import type { AuthState, AuthTokens } from '../type/auth-types';
import { authService } from '../services/auth-service';
import authReducer from '../reducers/AuthReducer';
import AuthContext from '../contexts/AuthContext';

export interface AuthContextValue extends AuthState {
    login: (tokens: AuthTokens) => Promise<void>;
    logout: () => Promise<void>;
    // refreshAuth: () => Promise<void>;
    // clearError: () => void;
}

const initialState: AuthState = {
    user: null, // 처음에는 사용자 없음
    isAuthenticated: false, // 로그인 안됨
    isLoading: false, // 로딩중 아님
    error: null, // 에러 없음
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [state, dispatch] = useReducer(authReducer, initialState);

    // 로그인 함수 (OAuth 콜백에서 호출)
    const login = useCallback(async (tokens: AuthTokens): Promise<void> => {
        try {
            dispatch({ type: 'AUTH_START' });

            // 토큰 저장
            authService.setTokens(tokens);

            dispatch({ type: 'AUTH_SUCCESS', payload: { id: 'hani0903', username: 'hani0903' } });
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : '로그인 중 오류가 발생했습니다.';
            dispatch({ type: 'AUTH_ERROR', payload: errorMessage });
            throw error;
        }
    }, []);

    const logout = useCallback(async (): Promise<void> => {
        try {
            // await authService.logout(); -> 서버에 아직 api 없음
            dispatch({ type: 'AUTH_LOGOUT' });
        } catch (error) {
            console.error('로그아웃 중 오류:', error);
            // 로그아웃은 실패해도 로컬 상태는 초기화
            dispatch({ type: 'AUTH_LOGOUT' });
        }
    }, []);

    const contextValue: AuthContextValue = {
        ...state,
        login,
        logout,
    };

    return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
