import Link from "next/link";
import { nunito, raleway, garamond } from "app/page";

function Navbar() {
  return (
    <nav className="px-2 md:px-10 2xl:px-48 bg-stone-100 py-3">
      <div className="flex justify-between items-center">
        <h3 className="text-2xl font-medium ">Trendz</h3>
        <ul className="flex gap-3 font-normal md:gap-6 xl:gap-12 md:text-lg xl:text-xl">
          <Link href={`/`}>Home</Link>
          <Link href={`/about`}>About</Link>
          <Link href={`/shop`}>Shop</Link>
          <Link href={`/contact`}>Contact</Link>
        </ul>
        <div className="cto ">
          <button className={`${garamond.variable} linkBtn`}>Login</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
