import Image from "next/image";
import Home from '@/components/Home';
import About from '@/components/About';
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Header from "../components/Header";
import { cookies } from "next/headers";

export default async function Main() {

  const cookieStore = await cookies()
  const theme = cookieStore.get("theme")?.value || "light";

  return (
    <>
      <Header currentTheme={theme}/>
      <main className="h-screen">
        <Home />
        <About />
        <Projects />
        <Contact />
      </main>
    </>
    
  );
}
