import { Star, Ticket, Clock } from "lucide-react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import type { Movie } from "@/data/movies"

type MovieCardProps = {
  movie: Movie
}

export function MovieCard({ movie }: MovieCardProps) {
  return (
    <Card className="group flex flex-col overflow-hidden border-white/5 bg-zinc-900/80 transition-all duration-300 hover:-translate-y-1.5 hover:border-white/10 hover:shadow-2xl hover:shadow-black/60">

      {/* Poster */}
      <div className={`relative h-60 shrink-0 overflow-hidden bg-gradient-to-br ${movie.posterGradient}`}>
        {/* Noise overlay */}
        <div className="absolute inset-0 opacity-10 mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Title centered in poster */}
        <div className="absolute inset-0 flex items-center justify-center p-4">
          <p className="text-center text-base font-bold leading-snug text-white/70 transition-colors group-hover:text-white/90">
            {movie.title}
          </p>
        </div>

        {/* Bottom fade */}
        <div className="absolute right-0 bottom-0 left-0 h-16 bg-gradient-to-t from-zinc-900 to-transparent" />

        {/* Rating pill */}
        <div className="absolute top-2.5 right-2.5 flex items-center gap-1 rounded-full bg-black/60 px-2 py-1 backdrop-blur-sm">
          <Star className="size-3 fill-amber-400 text-amber-400" />
          <span className="text-xs font-bold text-white">{movie.rating}</span>
        </div>

        {/* Year pill */}
        <div className="absolute top-2.5 left-2.5 flex items-center gap-1 rounded-full bg-black/60 px-2 py-1 backdrop-blur-sm">
          <span className="text-xs text-zinc-300">{movie.year}</span>
        </div>
      </div>

      <CardContent className="flex flex-1 flex-col gap-3 p-4">
        <div>
          <h3 className="font-semibold text-white leading-tight line-clamp-1">{movie.title}</h3>
          <p className="mt-1.5 text-xs leading-relaxed text-zinc-500 line-clamp-2">{movie.overview}</p>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {movie.genres.map((genre) => (
            <Badge key={genre} variant="secondary" className="bg-zinc-800 text-zinc-400 text-[11px] hover:bg-zinc-700">
              {genre}
            </Badge>
          ))}
        </div>

        <div className="flex items-center gap-1 text-xs text-zinc-600">
          <Clock className="size-3" />
          {movie.duration}
        </div>
      </CardContent>

      <CardFooter className="flex items-center justify-between border-t border-white/5 px-4 py-3">
        <div>
          <p className="text-[11px] text-zinc-600 uppercase tracking-wide">Precio</p>
          <p className="text-sm font-bold text-white">
            ${movie.price.toLocaleString("es-CO")}
            <span className="ml-1 text-[11px] font-normal text-zinc-500">COP</span>
          </p>
        </div>
        <Button
          size="sm"
          className="gap-1.5 bg-red-600 text-xs text-white shadow-md shadow-red-950/40 hover:bg-red-700"
        >
          <Ticket className="size-3" />
          Comprar
        </Button>
      </CardFooter>

    </Card>
  )
}
