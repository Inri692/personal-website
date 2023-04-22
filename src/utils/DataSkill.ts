interface Skill {
  id: number;
  name: string;
  image: string;
}

const skills: Skill[] = [
  {
    id: 1,
    name: "JavaScript",
    image: "public/img/Js.svg",
  },
  {
    id: 2,
    name: "TypeScript",
    image: "public/img/typescript.svg",
  },
  {
    id: 3,
    name: "HTML5",
    image: "public/img/html.svg",
  },
  {
    id: 4,
    name: "CSS3",
    image: "public/img/css.svg",
  },
  {
    id: 5,
    name: "Sass",
    image: "public/img/SASS.SVG",
  },
  {
    id: 6,
    name: "ReactJs",
    image: "public/img/REACT.svg",
  },
  {
    id: 7,
    name: "NextJs",
    image: "public/img/next.svg",
  },
  {
    id: 8,
    name: "TailwindCss",
    image: "public/img/tailwind.SVG",
  },
  {
    id: 9,
    name: "Bootstrap",
    image: "public/img/bootstrap.png",
  },
];

export default skills;
