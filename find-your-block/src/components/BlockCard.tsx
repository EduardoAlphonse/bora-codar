import Image from "next/image";
import { MapPin } from "phosphor-react";

export interface BlockCardData {
  id?: string;
  title: string;
  cover: string;
  description: string;
  location: string;
}

interface BlockCard {
  data: BlockCardData;
}

export const BlockCard = ({
  data: { title, cover, description, location },
}: BlockCard) => {
  return (
    <div className="flex flex-col text-gray-500 border border-gray-200 rounded-[10px] overflow-hidden">
      <div className="h-[153px] relative">
        <Image
          src={cover}
          alt={`Bloco ${title}`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
        />
      </div>

      <div className="flex flex-col gap-4 p-4">
        <strong>{title}</strong>
        <p>{description}</p>
        <div className="flex gap-2 items-center">
          <MapPin className="text-red-500 text-2xl" />
          <span>{location}</span>
        </div>
      </div>
    </div>
  );
};
