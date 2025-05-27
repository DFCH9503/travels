import Navbar from "@/components/home/navbar";
import Search from "@/components/home/search";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <header>
      <Navbar></Navbar>
    </header>
    <main className="w-full mt-20">
      <div className="mt-24">
          <h1 className="text-2xl md:text-4xl font-bold text-center mb-6">Planifica tu próximo viaje</h1>
          <p className="text-center text-gray-600">Encuentra vuelos, hoteles y más para tus vacaciones soñadas</p>
      </div>
      <Search></Search>
    </main>
    <footer>

    </footer>
    </>
  );
}
