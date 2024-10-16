"use client";

import Image from "next/image";
import { useState } from "react";
import burgerMenuIcon from "../../public/icons/menu-burger.svg";
import ContentMenu from "./ContentMenu";

export default function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(true);
  };
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button className="border-0" onClick={toggleMenu}>
        <Image src={burgerMenuIcon} alt="Menu Burger" className="h-6 w-6" />
      </button>

      {isOpen && <ContentMenu isOpen={isOpen} onClose={closeMenu} />}
    </>
  );
}
