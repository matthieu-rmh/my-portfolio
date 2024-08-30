import Image from "next/image";
import { dmSansBold } from "./ui/fonts";
import ProjectCard from "./components/project-card";

const Home = () => {
  return (
    <main className="flex px-40 min-h-screen flex-col items-center justify-between">
      <div className="flex flex-col md:flex-row flex-wrap w-full">
      {/* 2 SECTIONS "HERO" SECTION START */}
        <div className="flex flex-col justify-center justify-items-center flex-auto main-square-sections w-full md:w-1/2 p-28">
          <p className={`${dmSansBold.className} my-2 text-3xl`}>
            HI! I AM MATTHIEU,
          </p>
          <p className=" my-2 text-xl">
            A Full-Stack Developer & Cloud Enthusiast
          </p>
        </div>
        <div className="flex items-center justify-center flex-auto main-square-sections w-full md:w-1/2">
          <Image src="/my-picture.png"
          width={225}
          height={225}
          alt="M"/>
        </div>
      {/* 2 SECTIONS "HERO" SECTION END */}
        {/* PROJECTS PORTFOLIO SECTION START */}
          <div className="flex flex-col w-full mt-32">
            <p className="w-full text-center text-2xl">PROJECTS PORTFOLIO</p>
            <div className="flex justify-center mt-20">
              <ProjectCard/>
              <ProjectCard/>
              <ProjectCard/>
            </div>
          </div>
        {/* PROJECTS PORTFOLIO SECTION END */}
      </div>

      </main>
  );
}

export default Home;