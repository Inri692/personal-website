interface CardSkill {
  id?: number;
  image: string;
  name: string;
}
export function CardSkills({ id, name, image }: CardSkill) {
  return (
    <div className="w-56 h-56 bg-white shadow-md rounded-xl border-2 border-[#00FFCA]">
      <div className="block overflow-hidden">
        <img
          className="hover:scale-125 ease-in duration-150 w-full h-44 mt-2"
          src={image}
        />
      </div>
      <h1 className="m-2 text-xl font-bold text-black">{name}</h1>
    </div>
  );
}
