import React from 'react';
import { useRouteError, isRouteErrorResponse } from 'react-router-dom';

export default function ErrorPage() {
    const error = useRouteError();

    let title = 'An error occurred!';
    let message = 'Something went wrong';

    if (isRouteErrorResponse(error)) {
        switch (error.status) {
            case 500:
                message = (error.data as { message?: string })?.message || 'Internal server error';
                break;
            case 404:
                title = 'Not found!';
                message = 'Could not find resource or page.';
                break;
        }
    } else if (error instanceof Error) {
        message = error.message;
    }

    return (
        <>
            <h1>{title}</h1>
            <p>{message}</p>
        </>
    );
}
