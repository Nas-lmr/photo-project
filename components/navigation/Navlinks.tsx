import Link from "next/link";

export default function Navlinks() {
  return (
    <div className="hidden w-2/4 lg:w-2/5 xl:w-1/4 h-full md:flex justify-between items-center p-4">
      <ul className="w-full  flex  justify-between text-lg text-grayLight">
        <li className="h-1/3 content-center ">
          <Link href="/" passHref>
            <span>Accueil</span>
          </Link>
        </li>
        <li className="h-1/3 content-center">
          <Link href="/galerie" passHref>
            <span>Galerie</span>
          </Link>
        </li>
        <li className="h-1/3 content-center">
          <Link href="/contact" passHref>
            <span>Contact</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}
