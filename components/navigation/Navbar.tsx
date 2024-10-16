import BurgerMenu from "./BurgerMenu";

export default function Navbar() {
  return (
    <nav className=" flex items-center p-4 bg-brunFonce w-full h-14 md:h-16 lg:h-20">
      <BurgerMenu />
    </nav>
  );
}
