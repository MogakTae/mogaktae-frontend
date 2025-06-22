import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import StudyGroupCard from './StudyGroupCard';

interface StudyGroup {
    id: number;
    name: string;
    description: string;
    period: string;
}

const StudyGroupSection: React.FC = () => {
    // 나중에 스터디그룹 데이터랑 연결 예정
    const studyGroups: StudyGroup[] = [
        {
            id: 1,
            name: "알고리즘 스터디",
            description: "1일 1백준",
            period: "2025.06.01 ~ 2025.12.31"
        },
        {
            id: 2,
            name: "코딩 자율 스터디",
            description: "1일 1백준",
            period: "2025.06.01 ~ 2025.12.31"
        },
        {
            id: 3,
            name: "같이 공부해요",
            description: "1일 1백준",
            period: "2025.06.01 ~ 2025.12.31"
        },
        {
            id: 4,
            name: "모여봐요, 코딩의 숲",
            description: "1일 1백준",
            period: "2025.06.01 ~ 2025.12.31"
        },
        {
            id: 5,
            name: "알고리즘 스터디",
            description: "1일 1백준",
            period: "2025.06.01 ~ 2025.12.31"
        },
        {
            id: 6,
            name: "알고리즘 스터디",
            description: "1일 1백준",
            period: "2025.06.01 ~ 2025.12.31"
        },
        {
            id: 7,
            name: "알고리즘 스터디",
            description: "1일 1백준",
            period: "2025.06.01 ~ 2025.12.31"
        },
        {
            id: 8,
            name: "알고리즘 스터디",
            description: "1일 1백준",
            period: "2025.06.01 ~ 2025.12.31"
        },
    ];

    // 슬라이더 상태 관리
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 4;
    const totalPages = Math.ceil(studyGroups.length / itemsPerPage);

    // 현재 페이지에 표시 카드
    const currentGroups = studyGroups.slice(
        currentPage * itemsPerPage,
        (currentPage + 1) * itemsPerPage
    );

    // 이전 페이지로 이동
    const handlePrevious = () => {
        if (currentPage > 0) {
            setCurrentPage(prev => prev - 1);
        }
    }

    // 다음 페이지로 이동
    const handleNext = () => {
        if (currentPage < totalPages - 1) {
            setCurrentPage(prev => prev + 1);
        }
    }

    const handleCardClick = (groupId: number) => {
        console.log(`스터디 그룹 ${groupId} 클릭됨`);
        // 나중에 라우팅으로 끌어오기..??
    };

    return (
        <section className="py-16 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900">
                모각테 그룹
              </h2>
              
              <div className="flex gap-2">
                <button
                    onClick={handlePrevious}
                    disabled={currentPage === 0}
                    className={`p-2 rounded-full border transition-colors ${
                        currentPage === 0 
                        ? 'border-gray-200 text-gray-300 cursor-not-allowed' 
                        : 'border-gray-300 text-gray-600 hover:bg-gray-50'
                    }`}
                    aria-label="이전 그룹들"
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
                    aria-label="다음 그룹들"
                    >
                    <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
    
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {currentGroups.map((group) => (
                <StudyGroupCard 
                  key={group.id}
                  group={group}
                  onClick={handleCardClick}
                />
              ))}
            </div>
    
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
          </div>
        </section>
      );
};

export default StudyGroupSection;