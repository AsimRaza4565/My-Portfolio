import About from "@/components/about-me";
import Blogs from "@/components/blogs";
import Experience from "@/components/experience";
import Footer from "@/components/footer";
import Home from "@/components/hero";
import Navbar from "@/components/navbar";
import Projects from "@/components/projects";
import Services from "@/components/services";
import Skills from "@/components/skills";

export default function Page() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Services />
      <Projects />
      <Experience />
      <Blogs />
      <Footer />
    </>
  );
}
