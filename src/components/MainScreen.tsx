import React from "react";
import Balloon from "../assets/MainBalloon.png";

const MainScreen: React.FC = () => {
    return (
        <section className="relative bg-white min-h-screen flex items-center justify-center overflow-hidden pt-20">
            <div className="absolute bottom-0 left-0 -translate-x-1/4 translate-y-1/4">
                <img
                    src={Balloon}
                    alt="왼쪽 풍선"
                    className="w-80 h-80 object-contain opacity-100"
                    style={{ 
                        transform: 'rotate(52.55deg)',
                        width: '394.74px',
                        height: '394.74px'
                    }}
                />
            </div>
            
            <div className="absolute top-0 right-0 translate-x-1/4 -translate-y-1/4">
                <img
                    src={Balloon}
                    alt="오른쪽 풍선"
                    className="object-contain opacity-100"
                    style={{ 
                        transform: 'rotate(-17.88deg)',
                        width: '491.46px',
                        height: '491.46px'
                    }}
                />
            </div>

            <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6"
                    style={{ fontFamily: 'SB Aggro, sans-serif' }}
                >
                    Set Goals, Share Your Code, <br />
                    and Grow Together!
                </h1>

                <p className="text-lg md:text-xl text-black mb-4 leading-relaxed">
                    모각테와 함께 다른 사람들과 목표를 세우고, <br />
                    깃허브로 코드 풀이를 공유하여 챌린지를 인수해보세요!
                </p>

                <button className="bg-black text-white px-8 py-2 rounded-full text-lg font-medium hover:bg-gray-800 transition-all duration-300 transform hover:scale-105">
                    그룹 만들기
                </button>
            </div>
        </section>
    );
};

export default MainScreen;