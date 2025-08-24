import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';

interface User {
    id: number;
    name: string;
    rank: number;
    level: string;
    score: number;
    solvedProblems: number;
    avatar?: string;
}

const ChallengeResultPage: React.FC = () => {
    const navigate = useNavigate();
    const [currentPage, setCurrentPage] = useState<'home' | 'mypage'>('home');

    const handlePageChange = (page: 'home' | 'mypage') => {
        setCurrentPage(page);
        if (page === 'home') {
            navigate('/');
        } else if (page === 'mypage') {
            navigate('/mypage');
        }
    };

    const challengeTitle = "모여봐요, 코딩의 숲";
    const rankings: User[] = [
        { id: 1, name: "AESON", rank: 1, level: "골드", score: 0, solvedProblems: 305, avatar: "/api/placeholder/48/48" },
        { id: 2, name: "장지안", rank: 2, level: "골드", score: 1000, solvedProblems: 250, avatar: "/api/placeholder/48/48" },
        { id: 3, name: "QUAZIZ", rank: 3, level: "실버", score: 1500, solvedProblems: 212, avatar: "/api/placeholder/48/48" },
        { id: 4, name: "이유진", rank: 4, level: "실버", score: 500, solvedProblems: 202, avatar: "/api/placeholder/48/48" },
        { id: 5, name: "타이나", rank: 5, level: "실버", score: 2000, solvedProblems: 191, avatar: "/api/placeholder/48/48" },
        { id: 6, name: "2OUGLA", rank: 6, level: "골드", score: 1000, solvedProblems: 174, avatar: "/api/placeholder/48/48" },
        { id: 7, name: "가나다라마", rank: 7, level: "실버", score: 3500, solvedProblems: 146, avatar: "/api/placeholder/48/48" },
        { id: 8, name: "지호", rank: 8, level: "골드", score: 5000, solvedProblems: 125, avatar: "/api/placeholder/48/48" },
        { id: 9, name: "은경", rank: 9, level: "실버", score: 7000, solvedProblems: 97, avatar: "/api/placeholder/48/48" }
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* 기존 Header 컴포넌트 사용 */}
            <Header onPageChange={handlePageChange} currentPage={currentPage} />
            
            {/* 상단 배경 영역 - 검은 배경 */}
            {/* TODO: 그룹 대표 이미지 배경으로 변경 예정 
                - backgroundImage: url(그룹.representativeImage) 
                - 어두운 오버레이 추가하여 텍스트 가독성 확보
                - 예시: style={{ backgroundImage: `url(${group.representativeImage})` }}
            */}
            <div className="relative h-screen bg-black overflow-hidden">
                {/* 중앙 콘텐츠 */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
                    {/* 이모티콘 */}
                    <div className="text-8xl mb-12">
                        🎊
                    </div>
                    
                    {/* 텍스트 */}
                    <div className="text-white space-y-4">
                        <p className="text-xl font-medium">
                            "{challengeTitle}"의 챌린지가 성공적으로 마무리됐어요!
                        </p>
                        <p className="text-lg">
                            함께 달려온 시간, 노력과 성취를 돌아보며 스스로에게 맞진 격려를 보내주세요.
                        </p>
                        <p className="text-lg">
                            다음 도전에서도 맛진 활약을 기대할게요! 🚀
                        </p>
                    </div>
                </div>
            </div>

            {/* 하단 순위표 영역 */}
            <div className="bg-white py-8">
                <div className="max-w-4xl mx-auto px-6">
                    <h2 className="text-2xl font-bold text-gray-900 mb-8">챌린지 순위표</h2>
                    
                    <div className="space-y-4">
                        {rankings.map((user) => (
                            <div key={user.id} className="bg-purple-50 rounded-2xl p-6 flex items-center justify-between">
                                <div className="flex items-center gap-6">
                                    {/* 순위 */}
                                    <div className="text-2xl font-bold text-purple-600 w-8">
                                        {user.rank}
                                    </div>
                                    
                                    {/* 아바타 */}
                                    <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
                                        {user.avatar ? (
                                            <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" />
                                        ) : (
                                            <div className="w-full h-full bg-gray-300 flex items-center justify-center text-gray-600 font-bold">
                                                {user.name.charAt(0)}
                                            </div>
                                        )}
                                    </div>
                                    
                                    {/* 이름 */}
                                    <div className="text-xl font-semibold text-gray-900">
                                        {user.name}
                                    </div>
                                </div>
                                
                                {/* 오른쪽 정보들 */}
                                <div className="flex items-center gap-8">
                                    {/* 깃허브 뱃지 (임시 이모티콘) */}
                                    <div className="flex gap-1">
                                        <div className="w-6 h-6 bg-orange-500 rounded flex items-center justify-center">
                                            <span className="text-white text-xs font-bold">🔥</span>
                                        </div>
                                        <div className="w-6 h-6 bg-orange-500 rounded flex items-center justify-center">
                                            <span className="text-white text-xs font-bold">⭐</span>
                                        </div>
                                    </div>
                                    
                                    {/* 포인트 */}
                                    <div className="text-center">
                                        <div className="text-lg font-bold text-gray-900">{user.score.toLocaleString()}원</div>
                                        <div className="text-sm text-gray-500">획득한 누적 포인트</div>
                                    </div>
                                    
                                    {/* 문제 해결 수 */}
                                    <div className="text-center">
                                        <div className="text-lg font-bold text-gray-900">{user.solvedProblems}문제</div>
                                        <div className="text-sm text-gray-500">가입 날 문제 수</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChallengeResultPage;