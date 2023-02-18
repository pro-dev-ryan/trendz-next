import { Raleway } from "@next/font/google";
const raleway = Raleway({
  weight: ["300", "600"],
  subsets: ["latin"],
  variable: ["--font-raleway"],
});

const Homepage = () => {
  return (
    <div className="bg-emerald-100 h-full">
      <div className="image"></div>
      <div>text</div>
    </div>
  );
};

export default Homepage;
