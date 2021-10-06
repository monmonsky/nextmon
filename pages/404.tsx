import { useEffect } from 'react';
import { useRouter } from 'next/dist/client/router';

export default function Custom404() {
    const router = useRouter();
    useEffect(() => {
        setTimeout(() => {
            router.push('/');
        }, 2000);
    }, []);
    return (
        <div>
            <h1 className="title-not-found">Oooops......</h1>
            <h1 className="title-not-found">Pages Not Found</h1>
        </div>
    );
}
