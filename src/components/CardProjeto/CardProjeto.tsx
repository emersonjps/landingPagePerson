import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { URL } from "url";

interface Props {
  desctiption: string;
  img: StaticImageData;
  link: string;
  widht: number;
  height: number;
}

export default function CardProjeto({
  desctiption,
  img,
  link,
  widht,
  height,
}: Props) {
  return (
    <div className="card_competencia">
      <div className="card_inner justify-center items-center text-center">
        <div className="card_front flex justify-center">
          <Image
            alt="img"
            src={img}
            className="mt-10 rounded-xl border-2"
            width={widht}
            height={height}
          />
        </div>
        <div className="card_back absolute top-0 flex flex-col items-center">
          <p className="w-96 text-justify">{desctiption}</p>
          <Link
            className="p-2 mt-3 bg-green-800 rounded hover:bg-green-700"
            href={`${link}`}
            target="_blank"
          >
            Link!
          </Link>
        </div>
      </div>
    </div>
  );
}
