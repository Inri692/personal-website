import { BsGithub } from "react-icons/bs";
interface CardSkill {
  id?: number;
  image: string;
  name: string;
}
export function CardSkills({ id, name, image }: CardSkill) {
  return (
    <div className="w-56 h-56 bg-white shadow-md rounded-xl border-2 border-[#00FFCA] ">
      <div className="overflow-hidden ">
        <img
          className="hover:scale-125 ease-in duration-150 w-full h-44 mt-2"
          src={image}
        />
      </div>
      <h1 className="m-2 text-xl font-bold text-black">{name}</h1>
    </div>
  );
}

interface CardProject {
  id?: number;
  image: string;
  name: string;
  description: string;
  link: string;
}
export function CardProjects({
  id,
  name,
  image,
  description,
  link,
}: CardProject) {
  return (
    <div className="grid place-items-center mx-10 my-10">
      <div className="rounded-md bg-gray-800 border-2 border-white">
        <div className="md:flex px-4 max-w-4xl">
          <div className="flex-none  ">
            <img
              src={image}
              alt="pic"
              className="h-60 w-72 transform -translate-y-4 border-4 rounded-xl border-[#00FFCA] bg-black"
            />
          </div>

          <div className="flex-col text-white">
            <p className="m-4 text-2xl font-bold">{name}</p>
            <hr className="hr-text" data-content="" />

            <p className="hidden md:block px-4 my-4 text-sm text-justify ">
              {description}
            </p>
            <div className="text-xs m-2">
              <button className="border border-gray-400 text-gray-400 rounded-md px-4 py-2 m-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-[#14FFEC] duration-300">
                Typescript
              </button>

              <button className="border border-gray-400 text-gray-400 rounded-md px-4 py-2 m-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-[#14FFEC] duration-300">
                ReactJs
              </button>

              <button className="border border-gray-400 text-gray-400 rounded-md px-4 py-2 m-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-[#14FFEC] duration-300">
                Tailwind
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-end gap-3 px-4 mb-4 text-white">
          <button className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-[#14FFEC] duration-300">
            <a href={link} target="_blank" rel="noopener noreferrer">
              <BsGithub className="w-10 h-8" />
            </a>
          </button>
          <button className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300">
            <a href={link} target="_blank" rel="noopener noreferrer">
              <p className="text-sm mt-2">See the source on Github.</p>
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}
