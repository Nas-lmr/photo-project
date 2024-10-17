import { ICard } from "@/interfaces/components/ICard";
import Image from "next/image";
import Link from "next/link";

export default function CarouselCard({ image, title, id }: ICard) {
  return (
    <Link href={`/details/${id}`} passHref>
      <div className="w-60 h-60 bg-white p-4 flex flex-col items-center shadow-md">
        <div className=" relative w-full h-4/5 ">
          <Image
            fill={true}
            src={image}
            alt={title}
            className="h-full w-full "
          />
        </div>
      </div>
    </Link>
  );
}
