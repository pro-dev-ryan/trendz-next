import { Raleway } from "@next/font/google";
const raleway = Raleway({
  weight: ["300", "600"],
  subsets: ["latin"],
  variable: ["--font-raleway"],
});

const Homepage = () => {
  return (
    <div>
      <h1 className={`${raleway.className} font-head`}>This is the new Way</h1>
    </div>
  );
};

export default Homepage;
