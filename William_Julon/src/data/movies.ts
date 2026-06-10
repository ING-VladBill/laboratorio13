export type Movie = {
  id: number
  title: string
  overview: string
  genres: string[]
  rating: number
  year: number
  duration: string
  price: number
  posterGradient: string
  featured?: boolean
}

export const movies: Movie[] = [
  {
    id: 1,
    title: "Dune: Part Two",
    overview:
      "Paul Atreides se une a los Fremen para emprender un viaje espiritual y militar mientras busca vengar la caída de su familia.",
    genres: ["Sci-Fi", "Aventura"],
    rating: 8.5,
    year: 2024,
    duration: "2h 46min",
    price: 15000,
    posterGradient: "from-amber-950 via-yellow-900 to-orange-950",
    featured: true,
  },
  {
    id: 2,
    title: "Oppenheimer",
    overview:
      "La historia del físico J. Robert Oppenheimer y su papel en el desarrollo de la bomba atómica durante la Segunda Guerra Mundial.",
    genres: ["Drama", "Historia"],
    rating: 8.9,
    year: 2023,
    duration: "3h 0min",
    price: 15000,
    posterGradient: "from-slate-950 via-red-950 to-zinc-900",
  },
  {
    id: 3,
    title: "Poor Things",
    overview:
      "La extraordinaria evolución de Bella Baxter, una joven revivida por un brillante y poco convencional científico.",
    genres: ["Comedia", "Drama"],
    rating: 8.0,
    year: 2023,
    duration: "2h 21min",
    price: 15000,
    posterGradient: "from-teal-900 via-cyan-950 to-blue-950",
  },
  {
    id: 4,
    title: "Alien: Romulus",
    overview:
      "Un grupo de jóvenes colonizadores se enfrenta a la forma de vida más aterradora del universo en una estación espacial abandonada.",
    genres: ["Terror", "Sci-Fi"],
    rating: 7.3,
    year: 2024,
    duration: "1h 59min",
    price: 14000,
    posterGradient: "from-green-950 via-emerald-950 to-zinc-950",
  },
  {
    id: 5,
    title: "Furiosa",
    overview:
      "El origen de la guerrera Furiosa antes de que se cruzara con la pandilla de Mad Max en el apocalíptico desierto.",
    genres: ["Acción", "Aventura"],
    rating: 7.8,
    year: 2024,
    duration: "2h 28min",
    price: 15000,
    posterGradient: "from-orange-950 via-red-900 to-rose-950",
  },
  {
    id: 6,
    title: "Inside Out 2",
    overview:
      "Regresa a la mente de Riley, ahora adolescente, donde nuevas emociones irrumpen para tomar el control de su cabeza.",
    genres: ["Animación", "Familia"],
    rating: 7.6,
    year: 2024,
    duration: "1h 40min",
    price: 12000,
    posterGradient: "from-yellow-900 via-amber-800 to-orange-900",
  },
]
