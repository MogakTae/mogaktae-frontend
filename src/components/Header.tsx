import React, { useState } from 'react';
import { Bell, User } from 'lucide-react';
import logo from '../assets/logo.png';

// Props 타입 정의
interface HeaderProps {
    onPageChange: (page: 'home' | 'mypage') => void;
    currentPage: 'home' | 'mypage';
}

const Header: React.FC<HeaderProps> = ({ onPageChange, currentPage }) => {
    // TODO: 실제 로그인 상태는 나중에 인증 시스템과 연동
    const [isLoggedIn, setIsLoggedIn] = useState(false); // 임시로 false, 테스트용으로 true로 변경 가능

    const handleLogin = () => {
        // TODO: 실제 로그인 로직 구현
        console.log('로그인 버튼 클릭됨');
        setIsLoggedIn(true); // 임시로 로그인 상태 변경 (테스트용)
    };

    const handleSignup = () => {
        // TODO: 실제 회원가입 로직 구현
        console.log('가입하기 버튼 클릭됨');
    };

    const handleNotification = () => {
        // TODO: 알림 페이지로 이동 또는 알림 드롭다운 표시
        console.log('알림 버튼 클릭됨');
    };

    const handleMyPage = () => {
        // 마이페이지로 이동
        onPageChange('mypage');
    };

    const handleLogout = () => {
        // TODO: 실제 로그아웃 로직 구현
        console.log('로그아웃됨');
        setIsLoggedIn(false);
    };

    return (
        <header className="fixed top-0 right-0 left-0 bg-white shadow-sm py-4 px-6 z-50">
            <div className="max-w-6xl mx-auto flex justify-between items-center">
                <div className="cursor-pointer" onClick={() => onPageChange('home')}>
                    <img src={logo} alt="모각테 로고" className="h-8 w-auto object-contain" />
                </div>

                {/* 로그인 상태에 따른 버튼 표시 */}
                {isLoggedIn ? (
                    // 로그인된 상태: 알림 + 마이페이지 버튼
                    <div className="flex items-center gap-3">
                        {/* 알림 버튼 */}
                        <button
                            onClick={handleNotification}
                            className="p-2 rounded-full hover:bg-gray-100 transition-colors relative"
                            aria-label="알림"
                        >
                            <Bell className="w-5 h-5 text-gray-600" />
                            {/* 알림 개수 뱃지 (예시) */}
                            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                                3
                            </span>
                        </button>

                        {/* 마이페이지 버튼 */}
                        <button
                            onClick={handleMyPage}
                            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                            aria-label="마이페이지"
                        >
                            <User className="w-5 h-5 text-gray-600" />
                        </button>

                        {/* 임시 로그아웃 버튼 (테스트용) */}
                        <button onClick={handleLogout} className="text-sm text-gray-500 hover:text-gray-700 ml-2">
                            로그아웃
                        </button>
                    </div>
                ) : (
                    // 로그인 전 상태: 로그인 + 가입하기 버튼
                    <div className="flex items-center gap-3">
                        {/* 가입하기 버튼 */}
                        <button
                            onClick={handleSignup}
                            className="text-gray-600 px-4 py-2 rounded-full font-medium hover:bg-gray-100 transition-all"
                        >
                            가입하기
                        </button>

                        {/* 로그인 버튼 */}
                        <button
                            onClick={handleLogin}
                            className="bg-login-button text-white px-6 py-2 rounded-full font-medium hover:opacity-90 transition-all"
                        >
                            로그인
                        </button>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
