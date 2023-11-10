import Image from "next/image";
import aboutImage from "../public/assets/star_trails_great_coxwell.jpg";
import React from "react";

const About = () => {
  return (
    <div className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651ef]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            praesentium dolore libero molestiae aliquid reiciendis veritatis ea
            provident. Natus debitis aperiam, placeat doloribus vel repudiandae
            mollitia nemo aliquam tenetur quia.
          </p>
          <p className="py-2 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
            incidunt neque consectetur accusamus. Rem iusto quos laboriosam
            culpa accusantium quas ut inventore tenetur sapiente at, sed officia
            assumenda voluptates veritatis?
          </p>
          <p className="py-2 text-gray-600 underline cursor-pointer">
            Check out some of my latest projects
          </p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image className="rounded-xl" src={aboutImage} alt="Logo" />
        </div>
      </div>
    </div>
  );
};

export default About;
