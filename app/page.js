import Homepage from "app/Home/page";
import { Nunito_Sans, Raleway, EB_Garamond } from "@next/font/google";

export const nunito = Nunito_Sans({
  subsets: ["latin"],
  weight: ["200", "400"],
  variable: ["--font-nunito"],
});
export const raleway = Raleway({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: ["--font-raleway"],
});
export const garamond = EB_Garamond({
  subsets: ["latin"],
  weight: ["variable"],
  variable: ["--font-gara"],
});

export default function Home() {
  return (
    <main>
      <Homepage />
    </main>
  );
}
