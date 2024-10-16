"use client"; // Assurez-vous que ce composant est un composant client

import { IBurgerMenu } from "@/interfaces/components/IBurgerMenu";
import Image from "next/image";
import { useEffect, useState } from "react";
import CloseIcon from "../../public/icons/cross.svg";

export default function ContentMenu({ isOpen, onClose }: IBurgerMenu) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500); // Simuler le chargement
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return null; // Vous pouvez personnaliser ce loader
  }

  return (
    <div
      className={`absolute top-0 right-0 w-3/4 h-full p-4 bg-[#E5D1B8] transition-transform transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className=" w-full h-14 flex justify-between items-center">
        <h2 className="text-lg font-bold">Menu</h2>
        <button onClick={onClose}>
          <Image src={CloseIcon} alt="Cross" className="h-6 w-6" />
        </button>
      </div>
      <ul className="p-4">
        <li>
          <a href="#" className="block py-2">
            Accueil
          </a>
        </li>
        <li>
          <a href="#" className="block py-2">
            Galerie
          </a>
        </li>
        <li>
          <a href="#" className="block py-2">
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
}
