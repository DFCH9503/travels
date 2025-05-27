import CardPromoFlight from "@/components/home/cardPromo/cardPromoFligth";
import Navbar from "@/components/home/navbar";
import Search from "@/components/home/search";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <header>
      <Navbar></Navbar>
    </header>
    <main className="w-full mt-16">
      <section className="bg-gray-200 pt-8 pb-16">
        <div className="">
            <h1 className="text-2xl md:text-4xl font-bold text-center mb-6">Planifica tu próximo viaje</h1>
            <p className="text-center text-gray-600">Encuentra vuelos, hoteles y más para tus vacaciones soñadas</p>
        </div>
        <div className="flex justify-center p-2 md:p-8">
          <Search></Search>
        </div>
      </section>
      <section>
        <div>
          <h2 className="text-xl md:text-4xl font-bold">Promociones</h2>
          <p className="text-gray-600">Descubre ofertas especiales en vuelos</p>
        </div>
        <div className="flex justify-center p-2 md:p-8">
          <CardPromoFlight></CardPromoFlight>
        </div>
      </section>
    </main>
    <footer>
 
    </footer>
    </>
  );
}
