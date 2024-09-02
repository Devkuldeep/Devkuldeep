import Image from "next/image";
import Hero from "./Components/Ui/hero";
import About from "./Components/Ui/about";
import Expert from "./Components/Ui/cta";
import Contact from "./Components/Ui/contact";


export default function Home() {
  return (<>

    <main className="container m-auto flex min-h-screen flex-col w-full">
     <Hero/>
     <About/>  
     <Expert/>
     {/* <Contact/> */}
    </main>
    </>
  );
}
