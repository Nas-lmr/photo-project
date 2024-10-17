import { ICard } from "@/interfaces/components/ICard";
import Image from "next/image";
import Link from "next/link";

export default function Card({ image, title, id }: ICard) {
  return (
    <Link href={`/details/${id}`} passHref>
      <div className="w-72 h-72 lg:w-80 lg:h-80 bg-white p-4 flex flex-col items-center shadow-md ">
        <div className=" relative w-full h-5/6 ">
          {image && title && (
            <Image
              fill={true}
              src={image}
              alt={title}
              className="h-full w-full rounded-lg"
            />
          )}
        </div>
      </div>
    </Link>
  );
}
