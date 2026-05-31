import Image, { StaticImageData } from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"

interface Props {
  title: string
  description: string
  img: StaticImageData
  link: string
  stack: string[]
}

export default function CardProjeto({ title, description, img, link, stack }: Props) {
  return (
    <Card className="overflow-hidden flex flex-col group">
      <div className="relative w-full h-44 overflow-hidden">
        <Image
          alt={title}
          src={img}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#202023] via-transparent to-transparent" />
      </div>

      <CardContent className="flex flex-col flex-1 pt-4 gap-3">
        <h3 className="text-sm font-semibold text-white/90 leading-snug">{title}</h3>
        <p className="text-xs text-white/55 leading-relaxed line-clamp-3">{description}</p>

        <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
          {stack.map((s) => (
            <Badge key={s} variant="hard" className="text-[10px]">{s}</Badge>
          ))}
        </div>

        <Link
          href={link}
          target="_blank"
          className="inline-flex items-center gap-1.5 text-xs font-medium text-teal-400 hover:text-teal-300 transition-colors mt-1"
        >
          Ver projeto <ExternalLink size={12} />
        </Link>
      </CardContent>
    </Card>
  )
}
