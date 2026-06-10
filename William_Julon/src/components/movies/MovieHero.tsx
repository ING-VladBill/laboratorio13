import { Star, Clock, Calendar, Ticket, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import type { Movie } from "@/data/movies"

type MovieHeroProps = {
  movie: Movie
}

export function MovieHero({ movie }: MovieHeroProps) {
  return (
    <section className={`relative flex min-h-[88vh] items-end bg-gradient-to-br ${movie.posterGradient}`}>
      {/* Noise texture overlay */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Gradient fade to black at the bottom */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/10" />
      {/* Gradient fade on the right */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" />

      {/* Featured badge top-right */}
      <div className="absolute top-24 right-8 hidden md:block">
        <div className="rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-center backdrop-blur-sm">
          <p className="text-xs text-zinc-500 uppercase tracking-widest">Destacada</p>
          <p className="mt-1 text-2xl font-bold text-amber-400">{movie.rating}</p>
          <div className="mt-0.5 flex justify-center gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`size-2.5 ${i < Math.round(movie.rating / 2) ? "fill-amber-400 text-amber-400" : "text-zinc-700"}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-20 pt-8">
        <div className="max-w-2xl space-y-5">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-red-400">
            Película destacada
          </p>

          <div className="flex flex-wrap gap-2">
            {movie.genres.map((genre) => (
              <Badge
                key={genre}
                variant="secondary"
                className="border border-white/10 bg-white/10 text-white backdrop-blur-sm"
              >
                {genre}
              </Badge>
            ))}
          </div>

          <h1 className="text-5xl font-bold leading-none tracking-tight text-white md:text-7xl">
            {movie.title}
          </h1>

          <p className="max-w-xl text-base leading-relaxed text-zinc-300">
            {movie.overview}
          </p>

          <div className="flex flex-wrap items-center gap-5 text-sm text-zinc-400">
            <span className="flex items-center gap-1.5">
              <Star className="size-4 fill-amber-400 text-amber-400" />
              <span className="font-bold text-white">{movie.rating}</span>
              <span>/10 IMDb</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="size-4" />
              {movie.year}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="size-4" />
              {movie.duration}
            </span>
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            <Button
              size="lg"
              className="gap-2 bg-red-600 px-6 text-white shadow-lg shadow-red-950/50 hover:bg-red-700"
            >
              <Ticket className="size-4" />
              Comprar tickets — ${movie.price.toLocaleString("es-CO")} COP
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="gap-2 border-white/15 bg-white/5 text-white backdrop-blur-sm hover:bg-white/10 hover:text-white"
            >
              <Play className="size-4 fill-current" />
              Ver tráiler
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
