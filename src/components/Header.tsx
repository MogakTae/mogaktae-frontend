import React from 'react';
import logo from '../assets/logo.png';

const Header: React.FC = () => {
    return (
        <header className="fixed top-0 right-0 left-0 bg-white shadow-sm py-4 px-6 z-50">
            <div className="max-w-6xl mx-auto flex justify-between items-center">
                <div className="cursor-pointer">
                    <img src={logo} alt="모각테 로고" className="h-8 w-auto object-contain" />
                </div>
                <button className="bg-login-button text-white px-6 py-2 rounded-full font-medium hover:opacity-90 transition-all">
                    로그인
                </button>
            </div>
        </header>
    );
};

export default Header;
