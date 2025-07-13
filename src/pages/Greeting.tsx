import greetingImg from './../../public/greeting.png';

function Greeting() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-5rem)]">
            <h1 className="font-['SBAggroB'] font-normal text-6xl flex flex-col items-center justify-center h-full">
                Let's grow together
            </h1>
            <img className="ml-15 w-75" src={greetingImg} alt="Welcome illustration" />
            <p className="text-center text-xl font-medium">
                함께 하게 되어 반가워요, 홍길동님
                <br />
                모각테에 오신 것을 진심으로 환영합니다!
            </p>
            <button className="box-border mt-10 bg-[#7F00FF] text-white px-7 py-3 rounded-full w-40">메인으로</button>
        </div>
    );
}

export default Greeting;
