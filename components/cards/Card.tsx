import { ICard } from "@/interfaces/components/ICard";
import Link from "next/link";

export default function Card({ image, title, id }: ICard) {
  return (
    <Link href={`/details/${id}`} passHref>
      <div className="w-72 h-72 bg-beige rounded-lg p-4 flex flex-col items-center shadow-lg">
        <div className="w-full h-4/5 ">
          <img src={image} alt={title} className="h-full w-full rounded-lg" />
        </div>
        <div className="flex flex-col w-full h-1/5 justify-around ">
          <p className="font-bold">{title}</p>
        </div>
      </div>
    </Link>
  );
}
