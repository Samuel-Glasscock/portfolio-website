import { Montserrat, Fira_Code } from "next/font/google";

export const montserrat = Montserrat({
    weight: "400",
    variable: "--font-sans",
    display: "swap"
})

export const fire_code = Fira_Code({
    subsets: ["latin"],
    variable: "--font-mono",
    display: "swap",
})