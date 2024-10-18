import { ICard } from "@/interfaces/components/ICard";
import Image from "next/image";
import Link from "next/link";

export default function CarouselCard({ image, title, id }: ICard) {
  return (
    <Link href={`/details/${id}`} passHref>
      <div className="w-60 h-60 md:w-72 md:h-72 lg:w-80 lg:h-80 bg-white p-4 flex flex-col items-center shadow-md">
        <div className=" relative w-full h-4/5 ">
          {image && title && (
            <Image
              fill={true}
              src={image}
              alt={title}
              className="h-full w-full"
            />
          )}
        </div>
      </div>
    </Link>
  );
}
