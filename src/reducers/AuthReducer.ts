import type { AuthState, User } from '../type/auth-types';

type AuthAction =
    | { type: 'AUTH_START' }
    | { type: 'AUTH_SUCCESS'; payload: User }
    | { type: 'AUTH_ERROR'; payload: string }
    | { type: 'AUTH_LOGOUT' }
    | { type: 'CLEAR_ERROR' };

const initialState: AuthState = {
    user: null, // 처음에는 사용자 없음
    isAuthenticated: false, // 로그인 안됨
    isLoading: false, // 로딩중 아님
    error: null, // 에러 없음
};

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
    switch (action.type) {
        case 'AUTH_START':
            // 로그인 시작할 때
            return {
                ...state, // 기존 상태 복사
                isLoading: true, // 로딩 시작
                error: null, // 이전 에러 지우기
            };

        case 'AUTH_SUCCESS':
            // 로그인 성공했을 때
            return {
                ...state,
                user: action.payload, // 사용자 정보 저장
                isAuthenticated: true, // 로그인됨 표시
                isLoading: false, // 로딩 끝
                error: null, // 에러 없음
            };

        case 'AUTH_ERROR':
            // 로그인 실패했을 때
            return {
                ...state,
                user: null, // 사용자 정보 없음
                isAuthenticated: false, // 로그인 안됨
                isLoading: false, // 로딩 끝
                error: action.payload, // 에러 메시지 저장
            };

        case 'AUTH_LOGOUT':
            // 로그아웃할 때 - 모든 상태 초기화
            return initialState;

        case 'CLEAR_ERROR':
            // 에러만 지우기
            return { ...state, error: null };

        default:
            // 알 수 없는 액션이면 기존 상태 그대로
            return state;
    }
};

export default authReducer;
