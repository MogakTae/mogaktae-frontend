import React from 'react';
import defaultProfile from './../assets/images/defaultProfile.png';
import CameraIcon from '../assets/icons/camera.svg?react';
// import { ReactComponent as Icon } from '../assets/icons/camera.svg?';

function GithubPage() {
    let hasError = true;
    return (
        <section className="flex flex-col items-center">
            <h1 className="font-semibold text-2xl mt-10 w-full max-w-[600px]">깃허브 리포지토리 연결</h1>
            <form className="w-full max-w-[600px] mx-auto mt-6 py-10 px-14 rounded-2xl bg-white border border-[#CCCDD4] shadow-form flex flex-col items-center gap-7">
                <div className="flex flex-col items-center gap-3">
                    <img
                        src={defaultProfile}
                        alt="profile"
                        className="w-24 border border-[#9C9DA8] rounded-full box-border object-cover"
                    />
                    <button className="flex items-center px-6 py-2 gap-2 rounded-3xl justify-between text-[#7F00FF] border border-[#7F00FF]">
                        <CameraIcon />
                        <span className="text-[16px] inline-flex justify-center items-center w-full font-medium text-base">
                            프로필 사진 업로드
                        </span>
                    </button>
                </div>

                <p className="flex flex-col w-full gap-2">
                    <label htmlFor="nickname" className="font-semibold text-sm ">
                        깃허브 닉네임
                    </label>
                    <input
                        id="nickname"
                        value="hani0903"
                        disabled
                        className="border border-[#9C9DA8] px-5 py-4 rounded-xl text-base font-medium"
                    />
                </p>

                <p className="flex flex-col w-full gap-2">
                    <label htmlFor="bjId" className="font-semibold text-sm ">
                        백준 아이디
                    </label>
                    <p className="flex flex-row gap-3">
                        <input
                            id="bjId"
                            placeholder="백준 아이디를 입력하세요"
                            className="flex-grow border border-[#9C9DA8] px-5 py-4 rounded-xl text-base font-medium"
                        />
                        <button className="h-auto w-[125px] px-4 py-2 bg-[#7F00FF] rounded-xl text-white font-semibold text-base">
                            confirm
                        </button>
                    </p>
                    <p className={hasError ? 'text-[#C80000] visible text-sm' : 'invisible'}>
                        유효하지 않은 백준 아이디입니다.
                    </p>
                </p>
            </form>
        </section>
    );
}

export default GithubPage;
