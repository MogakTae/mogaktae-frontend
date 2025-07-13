import React, { useState, type ChangeEvent } from 'react';
import defaultProfile from './../assets/images/defaultProfile.png';
import CameraIcon from '../assets/icons/camera.svg?react';

// import { ReactComponent as Icon } from '../assets/icons/camera.svg?';

const FIELD_KEYS = ['bjId'] as const;
type FieldKey = (typeof FIELD_KEYS)[number];
type FormErrors = Partial<Record<FieldKey, string>>;

function createInitialValues<T>(defaultValue: T): Record<FieldKey, T> {
    return FIELD_KEYS.reduce((acc, key) => {
        acc[key] = defaultValue;
        return acc;
    }, {} as Record<FieldKey, T>);
}

type FormValues = Record<FieldKey, string>;

function validateField(name: string, value: string): string | undefined {
    if (name === 'bjId') {
        if (!value.trim()) return '백준 아이디는 필수입니다.';
        if (!/^[a-zA-Z0-9]{4,15}$/.test(value)) return '백준 아이디 형식이 올바르지 않습니다.';
    }

    // 여기에 필드별 유효성 조건 추가
    return undefined;
}

function GithubPage() {
    const [enteredValues, setEnteredValues] = useState<FormValues>(createInitialValues(''));
    const [didEdit, setDidEdit] = useState(createInitialValues(false));
    const [errors, setErrors] = useState<FormErrors>({});
    const [success, setSuccess] = useState(createInitialValues(false));

    function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
        setDidEdit((prevEdit) => ({
            ...prevEdit,
            [e.target.name]: false,
        }));

        setEnteredValues((prevValues) => ({ ...prevValues, [e.target.id]: e.target.value }));

        setErrors((prevErrors) => {
            const updated = { ...prevErrors };

            if (e.target.name in errors) {
                delete updated[e.target.name as FieldKey];
            }
            return updated;
        });
    }

    function handleInputBlur(e: ChangeEvent<HTMLInputElement>) {
        const name = e.target.name as FieldKey;
        const value = e.target.value;
        setDidEdit((prevEdit) => ({
            ...prevEdit,
            [e.target.name]: true,
        }));

        const errorMessage = validateField(name, value);

        setErrors((prevErrors) => {
            const updated = { ...prevErrors };

            if (errorMessage) {
                updated[name] = errorMessage;
            } else {
                delete updated[name];
            }
            return updated;
        });
    }

    function checkRequired(fields: (keyof FormValues)[]) {
        let valid = true;

        const newErrors: Record<string, string> = {};
        const newSuccess: Record<string, boolean> = {};

        fields.forEach((field) => {
            if (!enteredValues[field] || !(enteredValues[field] as string).trim()) {
                newErrors[field] = `${field}를 입력해 주세요.`;
                newSuccess[field] = false;
                valid = false;
            } else {
                newErrors[field] = '';
                newSuccess[field] = true;
            }
        });

        setErrors((prev) => ({ ...prev, ...newErrors }));
        setSuccess((prev) => ({ ...prev, ...newSuccess }));

        return valid;
    }

    function handleSubmit(e: SubmitEvent) {
        e.preventDefault();

        const requiredOk = checkRequired(['bjId']);
        const bjIdOk = checkBaekjoonId(enteredValues.bjId);

        if (requiredOk && bjIdOk) {
            setEnteredValues(createInitialValues(''));
            setErrors({});
            setSuccess(createInitialValues(false));
            alert('폼이 성공적으로 제출되었습니다.');
        }
    }

    function checkBaekjoonId(bjId: string) {
        if (bjId === 'hani0903') {
            return true;
        } else {
            setErrors((prevError) => ({ ...prevError, bjId: '유효하지 않은 백준 아이디입니다.' }));
            return false;
        }
    }

    return (
        <section className="flex flex-col items-center">
            <h1 className="font-semibold text-2xl mt-10 w-full max-w-[600px]">깃허브 리포지토리 연결</h1>
            <form
                onSubmit={handleSubmit}
                className="w-full max-w-[600px] mx-auto mt-6 py-10 px-14 rounded-2xl bg-white border border-[#CCCDD4] shadow-form flex flex-col items-center gap-7"
            >
                <p className="flex flex-col items-center gap-3">
                    <img
                        src={defaultProfile}
                        alt="profile"
                        className="w-24 border border-[#9C9DA8] rounded-full box-border object-cover"
                    />
                    <button
                        type="button"
                        className="cursor-pointer flex items-center px-6 py-2 gap-2 rounded-3xl justify-between text-[#7F00FF] border border-[#7F00FF]"
                    >
                        <CameraIcon />
                        <span className="text-[16px] inline-flex justify-center items-center w-full font-medium text-base">
                            프로필 사진 업로드
                        </span>
                    </button>
                </p>

                <p className="flex flex-col w-full gap-2">
                    <label htmlFor="nickname" className="font-semibold text-sm ">
                        깃허브 닉네임
                    </label>
                    <input
                        id="nickname"
                        name="nickname"
                        value="hani0903"
                        disabled
                        className="border border-[#9C9DA8] px-5 py-4 rounded-xl text-base font-medium"
                    />
                </p>

                <p className="flex flex-col w-full gap-2">
                    <label htmlFor="bjId" className="font-semibold text-sm ">
                        백준 아이디
                    </label>
                    <div className="flex flex-row gap-3">
                        <input
                            id="bjId"
                            name="bjId"
                            placeholder="백준 아이디를 입력하세요"
                            className="flex-grow border border-[#9C9DA8] px-5 py-4 rounded-xl text-base font-medium outline-0 hover:border-purple-800"
                            onChange={handleInputChange}
                            onBlur={handleInputBlur}
                        />
                        <button
                            type="submit"
                            className="cursor-pointer h-auto w-[125px] px-4 py-2 bg-[#7F00FF] rounded-xl text-white font-semibold text-base"
                        >
                            confirm
                        </button>
                    </div>
                    <small className={errors.bjId ? 'text-[#C80000] visible text-sm' : 'invisible'}>
                        {errors.bjId}
                    </small>
                </p>
            </form>
        </section>
    );
}

export default GithubPage;
