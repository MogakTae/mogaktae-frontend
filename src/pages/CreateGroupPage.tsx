import React, { useState, useRef } from 'react';
import PhotoIcon from '../assets/icons/photo.svg?react';
import CameraIcon from '../assets/icons/camera.svg?react';
import SearchIcon from '../assets/icons/search.svg?react';
import ParticipationRate from '../components/ParticipationRate';

const groupName = 'hello';

function CreateGroupPage() {
    const [year, setYear] = useState(null);
    const [month, setMonth] = useState(null);
    const [day, setDay] = useState(null);

    const [preview, setPreview] = useState(null);
    const inputRef = useRef();

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setPreview(imageUrl);
        }
    };

    return (
        <section className="flex flex-col items-center pb-30">
            <h1 className="font-semibold text-2xl mt-10 w-full max-w-[600px]">그룹 만들기</h1>
            <form className="w-full max-w-[600px] mx-auto mt-6 py-10 px-14 rounded-2xl bg-white border border-[#CCCDD4] shadow-form flex flex-col items-center gap-7">
                <div className="w-full image-upload-wrapper flex flex-row justify-start items-center gap-6">
                    <label htmlFor="group-image-upload" className="upload-label">
                        {preview ? (
                            <img src={preview} alt="업로드된 대표 이미지 미리보기" className="image-preview" />
                        ) : (
                            <div
                                className=" rounded-xl p-9 image-placeholder mx-0 my-auto border bg-[#F3F4F5] border-[#9C9DA8]"
                                aria-hidden="true"
                            >
                                <PhotoIcon width={46} />
                            </div>
                        )}
                        <span className="sr-only">대표 사진 업로드</span>
                    </label>

                    <input
                        id="group-image-upload"
                        name="groupImage"
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        ref={inputRef}
                        style={{ display: 'none' }}
                    />

                    <button
                        type="button"
                        className="cursor-pointer flex max-h-11 items-center px-6 py-2 gap-2 rounded-3xl justify-between text-[#7F00FF] border border-[#7F00FF]"
                    >
                        <CameraIcon />
                        <span className="text-[16px] inline-flex justify-center items-center w-full font-medium text-base">
                            대표 사진 업로드
                        </span>
                    </button>
                </div>
                <p className="w-full flex flex-col justify-start gap-2.5">
                    <label className="font-medium text-xl">
                        리포지토리 주소 <span className="text-[#EF4452] align-baseline">*</span>
                    </label>
                    <div className="w-full flex gap-2">
                        <input
                            placeholder="리포지토리 주소를 입력하세요"
                            className="flex-1 border border-[#9C9DA8] rounded-xl px-4 py-2.5 "
                        />
                        <button className="font-semibold text-base border border-[#7F00FF] text-[#7F00FF] px-4 rounded-xl">
                            Confirm
                        </button>
                    </div>
                </p>

                <p className="w-full flex flex-col justify-start gap-2.5">
                    <label className="font-medium text-xl">
                        그룹명 <span className="text-[#EF4452] align-baseline">*</span>
                    </label>
                    <div className="relative">
                        <input
                            placeholder="그룹명을 입력하세요"
                            className="w-full border border-[#9C9DA8] rounded-xl px-4 py-2.5 "
                        />
                        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-gray-400">
                            {groupName.length}/20
                        </span>
                    </div>
                </p>

                <p className="w-full flex flex-col justify-start gap-2.5">
                    <label className="font-medium text-xl">
                        기간 <span className="text-[#EF4452] align-baseline">*</span>
                    </label>
                    <div className="flex items-center gap-2">
                        {/* 연도 */}
                        <div className="flex items-center gap-1">
                            <input
                                type="number"
                                id="year"
                                name="year"
                                placeholder="YYYY"
                                className="border border-[#9C9DA8] rounded-xl px-2.5 py-3 w-24 text-center"
                                value={year}
                                onChange={(e) => setYear(Number(e.target.value))}
                                min={2000}
                                max={2099}
                            />
                            <span className="text-lg font-semibold text-[#64656D]">년</span>
                        </div>

                        {/* 월 */}
                        <div className="flex items-center gap-1">
                            <input
                                type="number"
                                name="month"
                                placeholder="MM"
                                className="border border-[#9C9DA8] rounded-xl px-2.5 py-3 w-20 text-center"
                                value={month}
                                onChange={(e) => setMonth(Number(e.target.value))}
                                min={1}
                                max={12}
                            />
                            <span className="text-lg font-semibold text-[#64656D]">월</span>
                        </div>

                        {/* 일 */}
                        <div className="flex items-center gap-1">
                            <input
                                type="number"
                                name="day"
                                placeholder="DD"
                                className="border border-[#9C9DA8] rounded-xl px-2.5 py-3 w-20 text-center"
                                value={day}
                                onChange={(e) => setDay(Number(e.target.value))}
                                min={1}
                                max={31}
                            />
                            <span className="text-lg font-semibold text-[#64656D]">일까지</span>
                        </div>
                    </div>
                </p>

                <p className="w-full flex flex-col justify-start gap-2.5">
                    <label className="font-medium text-xl">
                        목표 설정 <span className="text-[#EF4452] align-baseline">*</span>
                    </label>
                    <div className="flex gap-2 items-center">
                        <span className="text-[#64656D] font-semibold text-xl">1일</span>
                        <input type="number" className="w-20 border border-[#9C9DA8] rounded-xl px-4 py-2.5 " />
                        <span className="text-[#64656D] font-semibold text-xl">백준</span>
                    </div>
                </p>

                <p className="w-full flex flex-col justify-start gap-2.5">
                    <label className="font-medium text-xl">벌금</label>
                    <div className="relative">
                        <input
                            placeholder="금액을 입력하세요"
                            className="w-full flex-1 border border-[#9C9DA8] rounded-xl px-4 py-2.5 "
                        />
                        <span className="absolute  right-4 top-1/2 -translate-y-1/2  text-lg font-semibold text-[#64656D]">
                            원
                        </span>
                    </div>
                </p>

                <p className="w-full flex flex-col justify-start gap-2.5">
                    <label className="font-medium text-xl">참여자 추가</label>
                    <div className="relative w-full">
                        <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2" />
                        <input
                            placeholder="참여자 닉네임을 검색하세요"
                            className="w-full border border-[#9C9DA8] rounded-xl pr-4 pl-11 py-2.5 "
                        />
                    </div>
                </p>
                <button className="w-full bg-[#7F00FF] rounded-xl text-white py-6 font-bold text-xl">
                    그룹 만들기
                </button>
            </form>

            <ParticipationRate />
        </section>
    );
}

export default CreateGroupPage;
