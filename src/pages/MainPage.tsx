import React from 'react';
import MainScreen from '../components/MainScreen';
import StudyGroupSection from '../components/StudyGroupSection';
import PeopleImg from './../assets/images/people.png';
import Logo from '../assets/images/logo_dark.svg?react';
import AppCenterLogo from '../assets/images/appcenter.png';

function MainPage() {
    return (
        <main>
            <MainScreen />
            <StudyGroupSection />
            <section className="relative w-full flex flex-col px-50 pt-20 bg-gradient-to-b from-white to-[#D5C9FF]">
                <h2 id="usage-title" className="self-start font-bold text-5xl ">
                    모각테,
                    <br />
                    이렇게 이용하세요!
                </h2>
                <div className="my-15 self-end flex flex-col gap-30 max-w-[740px] text-left">
                    <article className="flex flex-col gap-5">
                        <h3 className="text-3xl font-bold">
                            <span className="block text-xl font-bold text-[#7F00FF]">01</span>
                            깃허브 리포지토리를 연결하고, 목표를 설정해보세요!
                        </h3>
                        <p className="font-medium text-xl">
                            혼자서 꾸준히 코딩하는 게 어렵다면? 목표를 만들고 성장하는 습관을 만들어보세요.
                            <br />
                            이를 통해 꾸준한 성장을 도울 수 있습니다.
                        </p>
                    </article>

                    <article className="flex flex-col gap-5">
                        <h3 className="text-3xl font-bold">
                            <span className="block text-xl font-bold text-[#7F00FF]">02</span>
                            함께하면 더 즐겁고 꾸준히 이어갈 수 있어요!
                        </h3>
                        <p className="font-medium text-xl">
                            그룹을 만들어 동료들을 초대하고, 챌린지에 참여하세요. 그룹에서는 챌린지 기간, 목표, 벌금
                            금액 등을 설정하여 책임감을 높이고 동기부여를 극대화할 수 있습니다.
                        </p>
                    </article>

                    <article className="flex flex-col gap-5">
                        <h3 className="text-3xl font-bold">
                            <span className="block text-xl font-bold text-[#7F00FF]">03</span>
                            챌린지를 완수하고, 성장 기록을 남겨보세요!
                        </h3>
                        <p className="font-medium text-xl">
                            설정된 기간 동안 목표를 달성하며, 진행 과정을 공유하고 서로의 성장을 확인하세요. 챌린지 종료
                            후에는 결과를 정리하고, 성취를 나누며 더 나은 개발 습관을 만들어 나갈 수 있습니다.
                        </p>
                    </article>
                </div>
                <img src={PeopleImg} className="w-full max-w-[1130px] mx-auto" />
            </section>
            <footer className="w-full bg-black">
                <div className="w-full pl-15 pt-12 pb-5 flex flex-row justify-start items-center  gap-5">
                    <Logo className="h-16" />
                    <img src={AppCenterLogo} className="h-16" />
                </div>
                <hr className="border-t border-white opacity-45 mb-6 " />
                <div className="flex flex-col pl-15 pb-12 gap-2">
                    <span className="text-white block opacity-80 font-normal">Powered by INU Appcenter</span>
                    <p className="flex justify-start gap-3.5  text-sm text-white font-normal">
                        <span>모각테</span>
                        <span className="opacity-80">Contact : 010-7753-3204</span>
                        <span className="opacity-80">Email : mogaktae@gmail.com</span>
                    </p>
                    <span className="text-white text-xs font-medium opacity-80">© MOGAKTAE</span>
                </div>
            </footer>
        </main>
    );
}

export default MainPage;
