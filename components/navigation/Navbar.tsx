import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/images/logo.png";
import BurgerMenu from "./BurgerMenu";
import Navlinks from "./Navlinks";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0  flex items-center justify-between p-4 bg-grayDark w-full h-14 md:h-16 lg:h-20 z-50">
      <Link href={"/"}>
        <Image src={Logo} alt="logo" width={50} height={50} />
      </Link>
      <BurgerMenu />
      <Navlinks />
    </nav>
  );
}
