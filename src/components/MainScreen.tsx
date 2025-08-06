import React, { useState } from 'react';
import Balloon from '../assets/MainBalloon.png';
import AlertModal from './AlertModal';
import GitHubRepoModal from './GithubRepoModal';

const MainScreen: React.FC = () => {
    // 기존 모달 상태 관리
    const [modalConfig, setModalConfig] = useState<{
        isOpen: boolean;
        title: string;
        message: string;
        buttonText?: string;
        onButtonClick?: () => void;
    }>({
        isOpen: false,
        title: '',
        message: '',
    });

    // 깃허브 모달 상태 관리
    const [isGitHubModalOpen, setIsGitHubModalOpen] = useState(false);
    
    // TODO: 실제 로그인 상태와 연동
    const [isLoggedIn, setIsLoggedIn] = useState(false); // 테스트용
    
    // TODO: API에서 가져올 데이터 - 사용자가 현재 만든 그룹 수
    const [currentGroupCount, setCurrentGroupCount] = useState(0); // 초기값 0, API 연동 시 실제 값으로 교체
    
    // 최대 그룹 생성 가능 수 (상수)
    const MAX_GROUP_COUNT = 3;

    // TODO: API 연동 함수 - 사용자 그룹 수 가져오기
    const fetchUserGroupCount = async () => {
        try {
            // const response = await api.get('/user/groups/count');
            // setCurrentGroupCount(response.data.count);
            console.log('사용자 그룹 수 조회 API 호출 예정');
        } catch (error) {
            console.error('그룹 수 조회 실패:', error);
        }
    };

    const handleCreateGroup = () => {
        // 로그인 체크
        if (!isLoggedIn) {
            setModalConfig({
                isOpen: true,
                title: '로그인이 필요합니다.',
                message: '모각테의 모든 기능을 이용하기 위해서는<br />로그인을 해야합니다.',
                buttonText: '확인',
                onButtonClick: handleLogin
            });
            return;
        }
        
        // 그룹 개수 체크
        if (currentGroupCount >= MAX_GROUP_COUNT) {
            setModalConfig({
                isOpen: true,
                title: '그룹을 만들 수 없습니다',
                message: `최대 ${MAX_GROUP_COUNT}개의 그룹만 생성할 수 있습니다. 기존 그룹을<br />삭제한 후 다시 시도해 주세요.`,
                buttonText: '확인'
            });
            return;
        }
        
        // 실제 그룹 생성 로직
        console.log('그룹 생성하기');
        // TODO: 그룹 생성 페이지로 이동 또는 그룹 생성 폼 모달 열기
        // navigate('/create-group') 또는 그룹 생성 모달 열기
    };

    // 깃허브 연결 버튼 클릭 핸들러
    const handleGitHubConnect = () => {
        setIsGitHubModalOpen(true);
    };

    // 깃허브 모달에서 참여하기 클릭 시
    const handleGitHubJoin = () => {
        console.log('깃허브 챌린지에 참여합니다!');
        // TODO: 실제 참여 로직 구현
        alert('깃허브 챌린지에 참여하였습니다!');
    };

    const handleLogin = () => {
        // TODO: 로그인 페이지로 이동 또는 로그인 모달 열기
        console.log('로그인 페이지로 이동');
        closeModal();
        // 실제로는 로그인 페이지로 이동하거나 로그인 모달을 열어야 함
        // 테스트용으로 로그인 상태를 바꾸지 않음
        // setIsLoggedIn(true); // 이 줄을 주석 처리
    };

    const closeModal = () => {
        setModalConfig(prev => ({ ...prev, isOpen: false }));
    };

    // 테스트용 함수 - 나중에 삭제
    const testGroupCount = () => {
        setCurrentGroupCount(prev => prev + 1);
    };

    return (
        <>
            <section className="relative bg-white min-h-screen flex items-center justify-center overflow-hidden pt-20">
                <div className="absolute bottom-0 left-0 -translate-x-1/4 translate-y-1/4">
                    <img
                        src={Balloon}
                        alt="왼쪽 풍선"
                        className="w-80 h-80 object-contain opacity-100"
                        style={{
                            transform: 'rotate(52.55deg)',
                            width: '394.74px',
                            height: '394.74px',
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
                            height: '491.46px',
                        }}
                    />
                </div>

                <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
                    <h1
                        className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6"
                        style={{ fontFamily: 'SB Aggro, sans-serif' }}
                    >
                        Set Goals, Share Your Code, <br />
                        and Grow Together!
                    </h1>

                    <p className="text-lg md:text-xl text-black mb-4 leading-relaxed">
                        모각테와 함께 다른 사람들과 목표를 세우고, <br />
                        깃허브로 코드 풀이를 공유하여 챌린지를 인수해보세요!
                    </p>

                    <div className="flex gap-4 justify-center">
                        <button 
                            onClick={handleCreateGroup}
                            className="bg-black text-white px-8 py-2 rounded-full text-lg font-medium hover:bg-gray-800 transition-all duration-300 transform hover:scale-105"
                        >
                            그룹 만들기
                        </button>
                        
                        <button 
                            onClick={handleGitHubConnect}
                            className="bg-purple-600 text-white px-8 py-2 rounded-full text-lg font-medium hover:bg-purple-700 transition-all duration-300 transform hover:scale-105"
                        >
                            깃허브 연결하기
                        </button>
                    </div>
                    
                    {/* 테스트용 버튼들임 - 나중에 삭제 */}
                    <div className="mt-4 flex gap-2 justify-center">
                        <button 
                            onClick={() => setIsLoggedIn(!isLoggedIn)}
                            className="bg-gray-500 text-white px-4 py-1 rounded text-sm"
                        >
                            로그인 상태: {isLoggedIn ? 'ON' : 'OFF'}
                        </button>
                        <button 
                            onClick={testGroupCount}
                            className="bg-blue-500 text-white px-4 py-1 rounded text-sm"
                        >
                            그룹 수: {currentGroupCount}/{MAX_GROUP_COUNT}
                        </button>
                    </div>
                </div>
            </section>

            {/* 공통 알림 모달 */}
            <AlertModal 
                isOpen={modalConfig.isOpen}
                onClose={closeModal}
                title={modalConfig.title}
                message={modalConfig.message}
                buttonText={modalConfig.buttonText}
                onButtonClick={modalConfig.onButtonClick}
            />

            {/* 깃허브 레포지토리 모달 */}
            <GitHubRepoModal
                isOpen={isGitHubModalOpen}
                onClose={() => setIsGitHubModalOpen(false)}
                onJoin={handleGitHubJoin}
                challengeTitle="같이 공부해요"
                goal="1일 1백준"
                period="2025.01.01 - 2025.09.01"
            />
        </>
    );
};

export default MainScreen;