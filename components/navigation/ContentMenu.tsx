"use client";

import { IBurgerMenu } from "@/interfaces/components/IBurgerMenu";
import Image from "next/image";
import Link from "next/link";
import CloseIcon from "../../public/icons/cross.svg";

export default function ContentMenu({ isOpen, onClose }: IBurgerMenu) {
  const handleLinkClick = () => {
    onClose();
  };

  return (
    <div
      className={`fixed top-0 right-0 w-3/4 h-full p-4 bg-grayLight transition-transform duration-300 ease-in-out transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } z-40`}
    >
      <div className="w-full h-14 flex justify-between items-center p-4">
        <h2 className="text-lg font-bold">Menu</h2>
        <button onClick={onClose}>
          <Image src={CloseIcon} alt="Croix" className="h-6 w-6" />
        </button>
      </div>
      <ul className="p-4 h-2/4 flex flex-col justify-around text-lg">
        <li className="h-1/3 content-center">
          <Link href="/" passHref>
            <span onClick={handleLinkClick}>Accueil</span>
          </Link>
        </li>
        <li className="h-1/3 content-center">
          <Link href="/galerie" passHref>
            <span onClick={handleLinkClick}>Galerie</span>
          </Link>
        </li>
        <li className="h-1/3 content-center">
          <Link href="/contact" passHref>
            <span onClick={handleLinkClick}>Contact</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}
