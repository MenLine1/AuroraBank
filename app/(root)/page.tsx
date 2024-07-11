import React from 'react';
import HeaderBox from "@/components/HeaderBox";
import "@/app/globals.css";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import RightSidebar from "@/components/RightSidebar";
import { getLoggedInUser } from "@/lib/actions/user.actions";
import { getAccount, getAccounts } from "@/lib/actions/bank.actions";
import { SearchParamProps } from "@/types";

const Home = async ({ searchParams: { id, page } }: SearchParamProps) => {
    const loggedIn = await getLoggedInUser();

    if (!loggedIn) {
        console.error("User is not logged in");
        return null;
    }

    const accounts = await getAccounts({
        userId: loggedIn.$id
    });

    if (!accounts) {
        console.error("No accounts found");
        return null;
    }

    const accountsData = accounts?.data;
    const appwriteItemId = (id as string) || accountsData[0]?.appwriteItemId;
    const account = await getAccount({ appwriteItemId });

    return (
        <section className="home">
            <div className="home-content">
                <header className="home-header">
                    <HeaderBox
                        type="greeting"
                        title="Welcome"
                        user={loggedIn?.firstName || "Guest"}
                        subtext="Access and manage your account and transactions."
                    />
                    <TotalBalanceBox
                        accounts={accountsData}
                        totalBanks={accounts?.totalBanks}
                        totalCurrentBalance={accounts?.totalCurrentBalance}
                    />
                </header>

                RECENT TRANSACTIONS
            </div>

            <RightSidebar
                user={loggedIn}
                transactions={accounts?.transactions}
                banks={accountsData?.slice(0, 2)}
            />
        </section>
    );
};

export default Home;
