import {DM_Sans} from 'next/font/google';
import "./globals.css";
import {SpeedInsights} from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react"
import Footer from "@/components/Footer";

const mainFont = DM_Sans({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700'],
    display: 'swap',
});

export const metadata = {
    weight: ['300', '400', '500', '700'],
    title: "Phil Hancox | Web Developer, South Yorkshire | React, PHP, MySQL, WordPress etc",
    description: "Home of Phil Hancox, a web developer based in Sheffield, England. ",
};

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <body>
        <div>
        {children}
        <Footer/>
        </div>
        <SpeedInsights/>
        <Analytics />
        </body>
        </html>
    );
}
