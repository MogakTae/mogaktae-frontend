import React from 'react';
import { useRouteError, isRouteErrorResponse } from 'react-router-dom';

// 404 에러 컴포넌트 - api 연결하면서 수정
const Error404Component = () => (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
            <div className="text-6xl font-bold mb-4">
                <span className="text-purple-600">4</span>
                <span className="text-orange-400">😵</span>
                <span className="text-purple-600">4</span>
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">페이지를 찾을 수 없습니다.</h1>
            <p className="text-gray-600 mb-2">
                입력한 주소가 정확한지, 페이지가 이동하거나 삭제되지는 않았나요?
            </p>
            <p className="text-gray-500 text-sm mb-6">
                주소를 다시 확인하거나, 홈으로 돌아가 서비스를 다시 이용해 주세요.
            </p>
            
            <div className="flex gap-3 justify-center">
                <button 
                    onClick={() => window.history.back()}
                    className="px-4 py-2 border border-purple-600 text-purple-600 rounded-full hover:bg-purple-50 transition-all"
                >
                    이전으로
                </button>
                <button 
                    onClick={() => window.location.href = '/'}
                    className="px-4 py-2 bg-purple text-white rounded-full hover:bg-purple-700 transition-all"
                >
                    메인으로
                </button>
            </div>
        </div>
    </div>
);

// 401 에러 컴포넌트
const Error401Component = () => (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
            <div className="text-6xl font-bold mb-4">
                <span className="text-purple-600">4</span>
                <span className="text-orange-400">😵</span>
                <span className="text-purple-600">1</span>
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">접근 권한이 없습니다.</h1>
            <p className="text-gray-600 mb-2">
                이 페이지는 로그인한 상황한 이용을 수 있습니다.
            </p>
            <p className="text-gray-500 text-sm mb-6">
                계속하시려면 로그인 후 다시 시도해 주세요.
            </p>
            
            <div className="flex gap-3 justify-center">
                <button 
                    onClick={() => window.history.back()}
                    className="px-4 py-2 border border-purple-600 text-purple-600 rounded-full hover:bg-purple-50 transition-all"
                >
                    이전으로
                </button>
                <button 
                    onClick={() => window.location.href = '/'}
                    className="px-4 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-all"
                >
                    메인으로
                </button>
            </div>
        </div>
    </div>
);

// 기본 에러 컴포넌트
const DefaultErrorComponent = ({ title, message }: { title: string; message: string }) => (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
            <div className="text-6xl font-bold text-red-500 mb-4">!</div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">{title}</h1>
            <p className="text-gray-600 mb-6">{message}</p>
            <button 
                onClick={() => window.location.href = '/'}
                className="px-6 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-all"
            >
                메인으로
            </button>
        </div>
    </div>
);

export default function ErrorPage() {
    const error = useRouteError();

    let title = 'An error occurred!';
    let message = 'Something went wrong';

    if (isRouteErrorResponse(error)) {
        switch (error.status) {
            case 404:
                return <Error404Component />;
            case 401:
                return <Error401Component />;
            case 500:
                title = 'Internal Server Error';
                message = (error.data as { message?: string })?.message || 'Internal server error';
                break;
            default:
                title = `Error ${error.status}`;
                message = error.statusText || 'Something went wrong';
        }
    } else if (error instanceof Error) {
        message = error.message;
    }

    // 404, 401이 아닌 다른 에러들은 기본 에러 컴포넌트로
    return <DefaultErrorComponent title={title} message={message} />;
}