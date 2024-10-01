import About from "./components/About";
import Certification from "./components/Certification";
import Conferences from "./components/Conferences";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
// import Navbar from "./components/Navbar";
import Technologies from "./components/Technologies";

const App = () => {
  return (
    <div className="overflow-x-hidden text-gray-800 selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed h-screen w-screen -z-10">
        <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"><div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full opacity-20 blur-[100px]"></div></div>
      </div>
      <div className="container mx-auto px-4">
        {/* <Navbar /> */}
        <Hero />
        <About />
        <Technologies />
        <Experience />
        <Certification />
        <Conferences />
        <Contact />
      </div>
    </div>
  )
}

export default App
