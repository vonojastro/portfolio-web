import React from 'react'
import { Poppins } from "@next/font/google";
import Header from './Header/Header';

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "900"],
});

type LayoutProps = {
    children: React.ReactNode;
};


const Layout = ({ children }: LayoutProps) => {
    return (
        <div className={`w-full ${poppins.className}`}>
            <>
                <Header />
            </>
            {children}

        </div>
    )
}

export default Layout