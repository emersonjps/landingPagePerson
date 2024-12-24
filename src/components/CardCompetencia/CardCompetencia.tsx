import Image, { StaticImageData } from "next/image";

interface Props {
  desctiption: string;
  img: StaticImageData;
  widht: number;
  height: number;
}

export default function CardCompetencia({
  desctiption,
  img,
  widht,
  height,
}: Props) {
  return (
    <div className="card_competencia h-48">
      <div className="card_inner justify-center items-center text-center">
        <div className="card_front flex justify-center">
          <Image
            id="img-competencia"
            alt="img"
            src={img}
            className="rounded-xl"
            width={widht}
            height={height}
          />
        </div>
        <div className="card_back absolute -mt-48 bg-slate-700 p-2 rounded">
          <p className="w-60 text-justify">{desctiption}</p>
        </div>
      </div>
    </div>
  );
}
