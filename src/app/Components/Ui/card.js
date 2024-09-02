import Image from "next/image";
import data from '../../data/projectData.json';

export default function Cards(params) {
  const projects = data.projects;

  let card = projects.map((project, index) => {
    return (
      <Card
        key={index}
        name={project.name}
        link={project.live_link}
        image={project.image_path}
        github={project.github_link}
        tech_stack={project.tech_stack.join(', ')} // Joining tech stack for display
      />
    );
  });

  return (
    <main className="flex flex-col items-center justify-between ">
      <div className="text-center p-5 ">
        <h1 className="font-bold text-4xl mb-4">{params.title}</h1>
        <h1 className="text-xl font-semibold">{params.desc}</h1>
      </div>
     <div className="listcard container mt-3 flex flex-col lg:flex-row items-center gap-4 lg:gap-8" >       
     {card}
     </div>
    </main>
  );
}

function Card({ name, link, image, github, tech_stack }) {
  return (
    <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
     
      <Image src={image} alt={`${name} image`} width={288} height={162} />
      <h1 className='font-bold mt-2'>{name}</h1>
      <p className="text-xs font-semibold text-slate-500">{tech_stack}</p>
     <div className="navigation flex justify-between p-2">
     <a href={link} target="_blank" rel="noopener noreferrer" className="px-2 py-1  m-2  bg-orange-100 hover:bg-orange-300 rounded-md" >
        visit 
      </a>
      <a href={github} target="_blank" rel="noopener noreferrer" className="px-2 py-1 m-2  bg-orange-100  hover:bg-orange-300 rounded-md" >
        download
      </a>
     </div>
    </div>
  );
}
