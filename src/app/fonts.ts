import { Libre_Baskerville, Nunito_Sans } from "next/font/google"

export const nunito_sans = Nunito_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
  variable: "--font-nunito",
})

export const libre_baskerville = Libre_Baskerville({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
  variable: "--font-libre",
})
