import Link from "next/link";
import Image from "next/image";

const NavBar = () => {
  return (
    <div className="bg-tpWhite z-[9999]  fixed w-full flex justify-around h-24 items-center">
      <Image
        src="/images/logo.webp"
        width={100}
        height={100}
        alt="Picture of the author"
      />

      <div className="flex gap-6 flex-row  ">
        <Link className="hover:text-blue-800 font-bold hover:underline text-xl" href="/">Home</Link>
        <Link className="hover:text-blue-800 font-bold hover:underline text-xl" href="/about">About</Link>
        <Link className="hover:text-blue-800 font-bold hover:underline text-xl" href="/services">Service</Link>
        <Link className="hover:text-blue-800 font-bold hover:underline text-xl" href="/contact">Contact Us</Link>
        <div></div>
      </div>
    </div>
  );
};

export default NavBar;