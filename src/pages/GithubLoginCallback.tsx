import React, { useEffect } from 'react';
import { useAuth } from '../hooks/useAuth';
import { useNavigate, useSearchParams } from 'react-router-dom';

const GitHubLoginCallback = () => {
    const { login } = useAuth();
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();

    useEffect(() => {
        const accessToken = searchParams.get('accessToken');
        const refreshToken = searchParams.get('refreshToken');

        if (accessToken && refreshToken) {
            // URL 정리
            navigate('/');

            // 토큰 저장, 로그인 처리
            login({ accessToken, refreshToken });
        }
    }, [searchParams, login, navigate]);
    return <div>CallBack!</div>;
};

export default GitHubLoginCallback;
