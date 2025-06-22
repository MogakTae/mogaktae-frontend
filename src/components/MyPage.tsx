import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ArrowLeft } from 'lucide-react';
import StudyGroupCard from './StudyGroupCard';
import BasicProfile from '../assets/BasicProfile.png';

interface StudyGroup {
    id: number;
    name: string;
    description: string;
    period: string;
    status: 'ongoing' | 'completed';
}

interface UserProfile {
    name: string;
    githubUrl: string;
    tier: string;
    points: number;
    profileImage?: string;
}

// Props 타입 정의
interface MyPageProps {
    onBackToHome?: () => void;
}

const MyPage: React.FC<MyPageProps> = ({ onBackToHome }) => {
    // TODO: API 연동 - 사용자 프로필 데이터 가져오기
    const userProfile: UserProfile = {
        name: "ABCDE", // TODO: 실제 사용자 이름으로 교체
        githubUrl: "https://github.com/abcde", // TODO: 실제 GitHub URL로 교체 
        tier: "Silver IV", // TODO: 백준 API 연동하여 실제 티어 가져오기
        points: 543, // TODO: 실제 문제 풀이 점수/개수로 교체
        profileImage: BasicProfile // 임시 프로필 이미지
    };


    // TODO: API 연동 - 사용자가 참여한 챌린지 데이터 가져오기
    const ongoingChallenges: StudyGroup[] = [
        {
            id: 1,
            name: "알고리즘 스터디",
            description: "1일 1백준",
            period: "2025.01.01 ~ 2025.06.01",
            status: 'ongoing'
        },
        {
            id: 2,
            name: "코딩 자율 스터디1",
            description: "1일 1백준",
            period: "2025.01.01 ~ 2025.06.01",
            status: 'ongoing'
        },
        {
            id: 3,
            name: "같이 공부해요",
            description: "1일 1백준",
            period: "2025.01.01 ~ 2025.06.01",
            status: 'ongoing'
        },
        {
            id: 4,
            name: "코딩 자율 스터디1",
            description: "1일 1백준",
            period: "2025.01.01 ~ 2025.06.01",
            status: 'ongoing'
        }
    ];

    // TODO: API 연동 - 사용자가 완료한 챌린지 데이터 가져오기
    const pastChallenges: StudyGroup[] = [
        {
            id: 5,
            name: "알고리즘 스터디",
            description: "1일 1백준",
            period: "2024.01.01 ~ 2024.06.01",
            status: 'completed'
        },
        {
            id: 6,
            name: "코딩 자율 스터디1",
            description: "1일 1백준",
            period: "2024.01.01 ~ 2024.06.01",
            status: 'completed'
        },
        {
            id: 7,
            name: "알고리즘 스터디",
            description: "1일 1백준",
            period: "2024.01.01 ~ 2024.06.01",
            status: 'completed'
        },
        {
            id: 8,
            name: "코딩 자율 스터디1",
            description: "1일 1백준",
            period: "2024.01.01 ~ 2024.06.01",
            status: 'completed'
        }
    ];

    // 탭 상태 관리
    const [activeTab, setActiveTab] = useState<'ongoing' | 'past'>('ongoing');
    
    // 슬라이더 상태 관리
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 4;
    
    const currentChallenges = activeTab === 'ongoing' ? ongoingChallenges : pastChallenges;
    const totalPages = Math.ceil(currentChallenges.length / itemsPerPage);
    
    const displayedChallenges = currentChallenges.slice(
        currentPage * itemsPerPage,
        (currentPage + 1) * itemsPerPage
    );

    // 탭 변경 시 페이지 초기화
    const handleTabChange = (tab: 'ongoing' | 'past') => {
        setActiveTab(tab);
        setCurrentPage(0);
    };

    // 페이지네이션 핸들러
    const handlePrevious = () => {
        if (currentPage > 0) {
            setCurrentPage(prev => prev - 1);
        }
    };

    const handleNext = () => {
        if (currentPage < totalPages - 1) {
            setCurrentPage(prev => prev + 1);
        }
    };

    const handleCardClick = (groupId: number) => {
        console.log(`스터디 그룹 ${groupId} 클릭됨`);
        // TODO: 라우팅 연동 - 해당 챌린지 상세 페이지로 이동
        // navigate(`/challenge/${groupId}`) 등으로 구현 예정
    };

    return (
        <div className="min-h-screen bg-gray-50 pt-20">
            <div className="max-w-6xl mx-auto px-6 py-8">
                {/* 마이페이지 제목 */}
                <h1 className="text-2xl font-bold text-gray-900 mb-8">마이페이지</h1>
                
                {/* 프로필 섹션 */}
                <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
                    <div className="flex items-center gap-6">
                        {/* 프로필 이미지 */}
                        <div className="relative">
                            <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                                <img 
                                    src={userProfile.profileImage || BasicProfile} 
                                    alt="프로필 이미지"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                        
                        {/* 사용자 정보 */}
                        <div className="flex-1">
                            <h2 className="text-xl font-semibold text-gray-900 mb-1">{userProfile.name}</h2>
                            {/* TODO: GitHub 링크 클릭 시 새 탭으로 열기 기능 추가 */}
                            <p className="text-gray-600 text-sm mb-2">{userProfile.githubUrl}</p>
                            
                            <div className="flex items-center gap-4">
                                <div className="flex items-center gap-2">
                                    <span className="text-sm text-gray-500">백준 티어</span>
                                    {/* TODO: 티어별 아이콘/색상 추가 예정 */}
                                    <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm font-medium">
                                        {userProfile.tier}
                                    </span>
                                </div>
                                <div className="flex items-center gap-2">
                                    {/* TODO: 점수 기준 변경 가능 (총 문제수, 연속 해결일 등) */}
                                    <span className="text-sm text-gray-500">현재 점수</span>
                                    <span className="text-purple-600 font-semibold">{userProfile.points}점</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 챌린지 섹션 */}
                <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                    {/* 탭 헤더 */}
                    <div className="border-b border-gray-200">
                        <div className="flex">
                            <button
                                onClick={() => handleTabChange('ongoing')}
                                className={`flex-1 py-4 px-6 text-center font-medium transition-colors ${
                                    activeTab === 'ongoing'
                                        ? 'text-purple-600 border-b-2 border-purple-600 bg-purple-50'
                                        : 'text-gray-500 hover:text-gray-700'
                                }`}
                            >
                                진행중인 챌린지
                            </button>
                            <button
                                onClick={() => handleTabChange('past')}
                                className={`flex-1 py-4 px-6 text-center font-medium transition-colors ${
                                    activeTab === 'past'
                                        ? 'text-purple-600 border-b-2 border-purple-600 bg-purple-50'
                                        : 'text-gray-500 hover:text-gray-700'
                                }`}
                            >
                                지난 챌린지
                            </button>
                        </div>
                    </div>

                    {/* 챌린지 카드들 */}
                    <div className="p-6">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-lg font-semibold text-gray-900">
                                {displayedChallenges.length > 0 ? `총 ${currentChallenges.length}개의 챌린지` : '참여한 챌린지가 없습니다'}
                            </h3>
                            
                            {totalPages > 1 && (
                                <div className="flex gap-2">
                                    <button
                                        onClick={handlePrevious}
                                        disabled={currentPage === 0}
                                        className={`p-2 rounded-full border transition-colors ${
                                            currentPage === 0 
                                            ? 'border-gray-200 text-gray-300 cursor-not-allowed' 
                                            : 'border-gray-300 text-gray-600 hover:bg-gray-50'
                                        }`}
                                        aria-label="이전 챌린지들"
                                    >
                                        <ChevronLeft className="w-5 h-5" />
                                    </button>
                                    <button
                                        onClick={handleNext}
                                        disabled={currentPage === totalPages - 1}
                                        className={`p-2 rounded-full border transition-colors ${
                                            currentPage === totalPages - 1
                                            ? 'border-gray-200 text-gray-300 cursor-not-allowed'
                                            : 'border-gray-300 text-gray-600 hover:bg-gray-50'
                                        }`}
                                        aria-label="다음 챌린지들"
                                    >
                                        <ChevronRight className="w-5 h-5" />
                                    </button>
                                </div>
                            )}
                        </div>

                        {displayedChallenges.length > 0 ? (
                            <>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                    {displayedChallenges.map((challenge) => (
                                        <StudyGroupCard 
                                            key={challenge.id}
                                            group={challenge}
                                            onClick={handleCardClick}
                                        />
                                    ))}
                                </div>

                                {/* 페이지네이션 점들 */}
                                {totalPages > 1 && (
                                    <div className="flex justify-center mt-6 gap-2">
                                        {Array.from({ length: totalPages }, (_, index) => (
                                            <button
                                                key={index}
                                                onClick={() => setCurrentPage(index)}
                                                className={`w-2 h-2 rounded-full transition-colors ${
                                                    currentPage === index ? 'bg-purple-500' : 'bg-gray-300'
                                                }`}
                                                aria-label={`페이지 ${index + 1}로 이동`}
                                            />
                                        ))}
                                    </div>
                                )}
                            </>
                        ) : (
                            <div className="text-center py-12">
                                <div className="text-gray-400 text-lg mb-2">
                                    {activeTab === 'ongoing' ? '진행중인 챌린지가 없습니다' : '지난 챌린지가 없습니다'}
                                </div>
                                <p className="text-gray-500 text-sm">
                                    {activeTab === 'ongoing' ? '새로운 챌린지에 참여해보세요!' : '이전에 참여했던 챌린지들이 여기에 표시됩니다'}
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyPage;