import React, {useCallback, useEffect, useState} from 'react';
import {Button} from "@/components/ui/button";
import {PlaidLinkOnSuccess, PlaidLinkOptions, usePlaidLink} from "react-plaid-link";
import {useRouter} from "next/navigation";
import {createLinkToken, exchangePublicToken} from "@/lib/actions/user.actions";
import {PlaidLinkProps} from "@/types";
import Image from 'next/image';

const PlaidLink = ({user, variant}: PlaidLinkProps) => {
    const router = useRouter();

    const [token, setToken] = useState('');

    useEffect(() => {
        const getLinkToken = async () => {
            const data = await createLinkToken(user);
            setToken(data?.linkToken);
        }

        getLinkToken();
    }, [user]);

    const onSuccess = useCallback<PlaidLinkOnSuccess>(async (public_token: string) => {
        await exchangePublicToken({
            publicToken:  public_token,
            user,
        });

        router.push('/');
    }, [router, user]);

    const config: PlaidLinkOptions = {
        token,
        onSuccess
    }

    const {open, ready} = usePlaidLink(config);

    return (
        <>
            {variant === 'primary' ? (
                <Button
                    className="plaidlink-primary"
                    onClick={() => open()}
                    disabled={!ready}
                >
                    Connect Bank
                </Button>
            ): variant === 'ghost' ? (
                <Button
                    variant="ghost"
                    onClick={() => open()}
                    className="plaidlink-ghost"
                >
                    <Image
                        src="/icons/connect-bank.svg"
                        alt="Connect Bank"
                        width={24}
                        height={24}
                    />
                    <p className="hiddenl text-[16px] font-semibold text-black-2 xl:block">
                        Connect Bank
                    </p>
                </Button>
            ): (
                <Button
                    onClick={() => open()}
                    className="plaidlink-default"
                >
                    <Image
                        src="/icons/connect-bank.svg"
                        alt="Connect Bank"
                        width={24}
                        height={24}
                    />
                    <p className="text-[16px] font-semibold text-black-2">
                        Connect Bank
                    </p>
                </Button>
            )}
        </>
    );
};

export default PlaidLink;