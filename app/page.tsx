// "use client"
import Image from "next/image";
import Navbar from "@/Components/Navbar";
import CardSection from "@/Components/CardSection";
import axios from "axios";
import Sidebar from "@/Components/Sidebar";
// import { QueryClient, QueryClientProvider } from "react-query";
import Footer from "@/Components/Footer";

export default function Home() {

  // const queryClient = new QueryClient()

  return (
    // <QueryClientProvider client={queryClient}>
    <main className="flex flex-col">
      <Navbar/>
      <section className="grid grid-cols-5 gap-0">
        <div className="grid col-span-1">
        <Sidebar/>
        </div>
      <div className="grid col-span-4 ">
        <CardSection/></div>
        <div>
        </div>
      </section>
      <Footer></Footer>
    </main>
    // </QueryClientProvider>
  );
}
