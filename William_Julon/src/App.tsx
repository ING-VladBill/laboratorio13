import { Separator } from "@/components/ui/separator"
import { Navbar } from "@/components/layout/Navbar"
import { MovieHero } from "@/components/movies/MovieHero"
import { MovieCard } from "@/components/movies/MovieCard"
import { movies } from "@/data/movies"

const featuredMovie = movies.find((m) => m.featured) ?? movies[0]
const catalogMovies = movies.filter((m) => !m.featured)

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <main>
        {/* Hero */}
        <MovieHero movie={featuredMovie} />

        {/* Catalog */}
        <section className="mx-auto max-w-7xl px-6 py-16">
          <div className="mb-8 flex items-end justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-red-400">
                Ahora en salas
              </p>
              <h2 className="mt-1 text-2xl font-bold text-white">En cartelera</h2>
              <p className="mt-1 text-sm text-zinc-500">
                Compra tus tickets antes de que se agoten
              </p>
            </div>
            <button className="text-sm text-zinc-500 transition-colors hover:text-white">
              Ver todo →
            </button>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {catalogMovies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        </section>

        <Separator className="mx-auto max-w-7xl bg-white/5" />

        {/* Promo banner */}
        <section className="mx-auto max-w-7xl px-6 py-16">
          <div className="relative overflow-hidden rounded-2xl border border-white/5 bg-gradient-to-r from-red-950/60 via-zinc-900 to-zinc-900 p-8 md:p-12">
            <div className="absolute -right-16 -top-16 size-64 rounded-full bg-red-600/10 blur-3xl" />
            <div className="relative z-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-2xl font-bold text-white md:text-3xl">
                  Experiencia Premium
                </h3>
                <p className="mt-2 max-w-md text-zinc-400">
                  Disfruta la mejor selección de cine desde donde estés. Compra tus tickets en segundos y vive la experiencia.
                </p>
              </div>
              <button className="shrink-0 rounded-xl bg-red-600 px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-red-950/50 transition-colors hover:bg-red-700">
                Explorar estrenos
              </button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-white/5 py-10">
          <div className="mx-auto max-w-7xl px-6">
            <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
              <p className="text-sm font-bold text-zinc-600">
                Cine<span className="text-red-600">Spoiler</span>S
              </p>
              <p className="text-xs text-zinc-700">
                © 2024 CineSpoilerS — Todos los derechos reservados
              </p>
              <div className="flex gap-4 text-xs text-zinc-700">
                <button className="hover:text-zinc-400 transition-colors">Términos</button>
                <button className="hover:text-zinc-400 transition-colors">Privacidad</button>
                <button className="hover:text-zinc-400 transition-colors">Contacto</button>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
