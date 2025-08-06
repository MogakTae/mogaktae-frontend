import React, { useState } from 'react';
import { X } from 'lucide-react';

interface GitHubRepoModalProps {
    isOpen: boolean;
    onClose: () => void;
    onJoin: () => void;
    challengeTitle?: string;
    goal?: string;
    period?: string;
    backgroundImage?: string;
}

const GitHubRepoModal: React.FC<GitHubRepoModalProps> = ({
    isOpen,
    onClose,
    onJoin,
    challengeTitle = "같이 공부해요",
    goal = "1일 1백준",
    period = "2025.01.01 - 2025.09.01",
    backgroundImage = "/api/placeholder/400/200"
}) => {
    const [repoUrl, setRepoUrl] = useState('');
    const [isConfirmed, setIsConfirmed] = useState(false);

    const handleConfirm = () => {
        // TODO: 실제로는 여기서 GitHub API 검증
        // 지금은 무조건 true로 처리
        setIsConfirmed(true);
    };

    const handleJoin = () => {
        onJoin();
        handleClose();
    };

    const handleClose = () => {
        setRepoUrl('');
        setIsConfirmed(false);
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl w-full max-w-md mx-4 relative overflow-hidden">
                {/* 닫기 버튼 */}
                <button
                    onClick={handleClose}
                    className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
                >
                    <X className="w-6 h-6" />
                </button>

                {/* 상단 배경 이미지 영역 (모달 높이의 절반) */}
                <div className="relative h-48 bg-gradient-to-br from-gray-800 via-gray-900 to-black">
                    {/* 텍스트 오버레이 */}
                    <div className="absolute inset-0 flex flex-col justify-between items-start text-left text-white p-6">
                        <h2 className="text-2xl font-bold mt-2">{challengeTitle}</h2>
                        <div className="mb-2">
                            <p className="text-sm mb-1">{goal}</p>
                            <p className="text-xs text-gray-300">{period}</p>
                        </div>
                    </div>
                </div>

                {/* 하단 입력 영역 */}
                <div className="p-6">
                    {/* 입력 필드와 Confirm 버튼 */}
                    <div className="flex gap-2 mb-4">
                        <input
                            type="text"
                            value={repoUrl}
                            onChange={(e) => setRepoUrl(e.target.value)}
                            placeholder="리포지토리 주소를 입력하세요"
                            className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors"
                        />
                        <button
                            onClick={handleConfirm}
                            className="bg-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors whitespace-nowrap"
                        >
                            Confirm
                        </button>
                    </div>
                    
                    {/* 참여하기 버튼 */}
                    <button
                        onClick={handleJoin}
                        disabled={!isConfirmed}
                        className={`w-full py-3 px-4 rounded-lg font-medium transition-all ${
                            isConfirmed
                                ? 'bg-purple-600 text-white hover:bg-purple-700'
                                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                        }`}
                    >
                        참여하기
                    </button>
                </div>
            </div>
        </div>
    );
};

export default GitHubRepoModal;