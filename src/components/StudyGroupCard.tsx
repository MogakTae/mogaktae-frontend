import React from 'react';

interface StudyGroup {
    id: number;
    name: string;
    description: string;
    period: string;
    status?: 'ongoing' | 'completed'; // MyPage에서 사용
}

interface StudyGroupCardProps {
    group: StudyGroup;
    onClick: (groupId: number) => void;
}

const StudyGroupCard: React.FC<StudyGroupCardProps> = ({ group, onClick }) => {
    return (
        <button
            onClick={() => onClick(group.id)}
            className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 overflow-hidden text-left focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
            aria-label={`${group.name} 스터디 그룹으로 이동`}
        >
            <div className={`relative h-32 ${
                group.status === 'completed' 
                ? 'bg-gradient-to-br from-gray-400 via-gray-500 to-gray-600'
                : 'bg-gradient-to-br from-purple-400 via-purple-500 to-purple-600'
            }`}>
                <div className="absolute inset-0 bg-black/20"></div>
                {group.status === 'ongoing' && (
                    <div className="absolute top-3 left-3">
                        <span className="bg-white/20 text-white text-xs px-2 py-1 rounded-full">
                            진행중
                        </span>
                    </div>
                )}
            </div>

            <div className="p-4 text-left">
                <h3 className="font-semibold text-gray-900 text-lg mb-2 truncate">
                    {group.name}
                </h3>
                
                <p className="text-gray-600 text-sm mb-2">
                    {group.description}
                </p>
                
                <p className="text-gray-500 text-xs">
                    {group.period}
                </p>
            </div>
        </button>
    );
};

export default StudyGroupCard;