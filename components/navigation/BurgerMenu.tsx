"use client";

import Image from "next/image";
import { useState } from "react";
import burgerMenuIcon from "../../public/icons/menu-burger.svg";
import ContentMenu from "./ContentMenu";

export default function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button className="border-0 md:hidden" onClick={toggleMenu}>
        <Image src={burgerMenuIcon} alt="Menu Burger" className="h-6 w-6" />
      </button>

      <ContentMenu isOpen={isOpen} onClose={closeMenu} />
    </>
  );
}
