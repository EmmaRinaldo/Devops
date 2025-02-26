import Image from "next/image"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#C9ABA6] to-[#E6D5D2] text-[#2C1810] font-serif">
      {/* Header */}
      <header className="w-full max-w-7xl mx-auto text-center py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#4A0E0E] drop-shadow-lg">
          Le Royaume du Chocolat
        </h1>
        <p className="mt-6 text-xl sm:text-2xl text-[#2C1810] max-w-3xl mx-auto leading-relaxed">
          Plongez dans un univers de gourmandise et de raffinement avec nos chocolats artisanaux d'exception.
        </p>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Image */}
        <div className="relative h-96 mb-16 overflow-hidden rounded-2xl shadow-2xl">
          <Image
            src="/chocolate-delight.jpg"
            alt="Chocolat fondant"
            layout="fill"
            objectFit="cover"
            priority
            className="transition-transform duration-500 hover:scale-105"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
            <h2 className="text-4xl sm:text-5xl font-bold text-white text-center px-4">Nos Créations Gourmandes</h2>
          </div>
        </div>

        {/* Description */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <p className="text-xl sm:text-2xl leading-relaxed text-[#2C1810]">
            Découvrez une collection de chocolats réalisés avec passion et des ingrédients soigneusement sélectionnés.
          </p>
        </div>

        {/* Chocolate Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Chocolat Noir Intense",
              description: "Un arôme puissant et des notes corsées, pour une expérience chocolatée inoubliable.",
              image: "/dark-chocolate.jpg",
            },
            {
              title: "Chocolat au Lait",
              description: "Une douceur crémeuse avec une texture fondante et réconfortante.",
              image: "/milk-chocolate.jpg",
            },
            {
              title: "Chocolat Blanc Vanillé",
              description: "Une touche de vanille pour une explosion de saveurs délicates.",
              image: "/white-chocolate.jpg",
            },
          ].map((chocolate, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
            >
              <div className="relative h-48">
                <Image
                  src={chocolate.image || "/placeholder.svg"}
                  alt={chocolate.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-[#4A0E0E] mb-3">{chocolate.title}</h3>
                <p className="text-[#2C1810]">{chocolate.description}</p>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* About Section */}
      <section id="about" className="bg-[#4A0E0E] text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">À propos de nous</h2>
          <p className="text-lg sm:text-xl leading-relaxed">
            Nous sommes passionnés par l'art du chocolat et l'amour des saveurs authentiques, mettant l'accent sur la
            qualité, l'originalité et l'expérience sensorielle.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2C1810] text-white py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-lg">© 2025 Chocolaterie Royale. Le plaisir du chocolat authentique.</p>
        </div>
      </footer>
    </div>
  )
}
