import {useEffect, useReducer} from "react";

export default function useRenderTimeout(timeoutMillis: number, callback: () => void): () => void{
    const [_, toggle] = useReducer((v) => !v, false);

    useEffect(() => {
        let rejecter = () => {
        };

        const timeout = new Promise<void>((resolve, reject) => {
            rejecter = reject;
            setTimeout(() => {
                resolve();
            }, timeoutMillis);
        })

        timeout.then(callback).catch(() => {
        });

        return () => {
            rejecter();
        };
    });


    return toggle;
}