import { Clapperboard, Search, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"

const NAV_LINKS = ["Películas", "Géneros", "Estrenos", "Tendencias"]

export function Navbar() {
  return (
    <header className="fixed top-0 right-0 left-0 z-50 border-b border-white/5 bg-black/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

        <div className="flex items-center gap-2">
          <Clapperboard className="size-5 text-red-500" />
          <span className="text-lg font-bold tracking-tight text-white">
            Cine<span className="text-red-500">Spoiler</span>
            <span className="text-zinc-400">S</span>
          </span>
        </div>

        <nav className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((item) => (
            <button
              key={item}
              className="rounded-md px-3 py-1.5 text-sm text-zinc-400 transition-colors hover:bg-white/5 hover:text-white"
            >
              {item}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-1">
          <Button variant="ghost" size="icon" className="text-zinc-400 hover:text-white">
            <Search className="size-4" />
          </Button>
          <Button variant="ghost" size="icon" className="relative text-zinc-400 hover:text-white">
            <ShoppingCart className="size-4" />
            <span className="absolute -top-0.5 -right-0.5 flex size-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white">
              0
            </span>
          </Button>
        </div>

      </div>
    </header>
  )
}
