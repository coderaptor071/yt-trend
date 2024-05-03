import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import ScreenComponentWrapper from '@/Components/screenComponentWrapper'
// import { QueryClient, QueryClientProvider } from "react-query";

export default function Home() {

  // const queryClient = new QueryClient()

  return (
    // <QueryClientProvider client={queryClient}>
    <main className="flex flex-col w-screen">
      <Navbar/>
     <ScreenComponentWrapper/>
      <Footer/>
    </main>
    // </QueryClientProvider>
  );
}
