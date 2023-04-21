import React from 'react'
import { Montserrat, Poppins } from "@next/font/google";
import Header from '../Header';
import Footer from '../Footer';

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "900"],
});

type LayoutProps = {
    children: React.ReactNode;
};


const Layout = ({ children }: LayoutProps) => {
    return (
        <div className={`w-full min-h-screen flex flex-col justify-between ${poppins.className}`}>
            <>
                <Header />
            </>
            {children}
            <>
                <Footer />
            </>

        </div>
    )
}

export default Layout