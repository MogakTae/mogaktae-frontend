import React from 'react';
import defaultProfile from './../assets/images/defaultProfile.png';

type Status = 'present' | 'late' | 'absent' | 'notYet';

type ParticipationBarProps = {
    data: Status[];
};

const statusColorMap: Record<Status, string> = {
    present: '#55E23F',
    late: '#FFE551',
    absent: '#FF5C53',
    notYet: '#EEEEEE',
};

const sampleData: Status[] = [
    // 60개의 박스 상태: 예시로 섞어 둠
    ...Array(40).fill('present'),
    ...Array(5).fill('late'),
    ...Array(5).fill('absent'),
    ...Array(10).fill('notYet'),
];

function ParticipationBar({ data }: ParticipationBarProps) {
    return (
        <div className="flex gap-1 w-full h-9 justify-start">
            {data.map((status, idx) => (
                <div key={idx} style={{ backgroundColor: statusColorMap[status] }} className="w-3 h-9 rounded-sm" />
            ))}
        </div>
    );
}

export default function ParticipationRate() {
    const participationRate = 85;

    return (
        <div className=" w-full max-w-[980px] px-6 rounded-xl pt-7 pb-6 flex flex-col bg-[#FFFFFF] border border-[#DDDEE3] gap-7">
            <p className="relative flex items-center gap-3">
                <img
                    src={defaultProfile}
                    alt="profile"
                    className="w-12 border border-[#9C9DA8] rounded-full box-border object-cover"
                />
                <span className="font-bold text-xl">가나다라마바사아</span>
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[#8F919F] font-medium text-xl">
                    {participationRate}% 참여 중
                </span>
            </p>
            <ParticipationBar data={sampleData} />
        </div>
    );
}
