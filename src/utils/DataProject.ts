interface Project {
  id: number;
  name: string;
  image: string;
  description: string;
  link: string;
}

const projects: Project[] = [
  {
    id: 1,
    name: "Campyuk (February 2023)",
    image: "public/img/portfolios/campyuk.png",
    description:
      "The Campyuk Project aims to create camping service providers with various facilities that users can enjoy. The Campyuk project has three user role models, namely Guest, Host, and Superadmin. The features in the guest role are registration, login, logout, a landing page where the user can see a list of camping spots, camp details, orders, booking history, booking details, and a Google calendar. The features in the host role are registration, login, and adding, updating, and deleting campsites. The features of the superadmin role are logging in and rejecting or accepting camping spots that were previously registered by the host.",
    link: "https://github.com/Inri692/campyuk-FE",
  },
  {
    id: 2,
    name: "Happy Shop (January 2023)",
    image: "public/img/portfolios/happyshop.png",
    description:
      "The Happy Shop App is an online shop (e-commerce) system to sell only the best items online. Registration, login, and logout; landing pages where users can view a list of items on the website; adding items to the cart; adding products to the sale list; the order page; transaction and shipping; sale and purchase history; and a user profile page are all features of this project.",
    link: "https://github.com/Inri692/ecommerce-FE",
  },
  {
    id: 3,
    name: "Nonton (January 2023)",
    image: "public/img/portfolios/nonton.png",
    description:
      "Nonton is a project where users can see a list of the latest movies. The features of this website are the homepage list of movie lists, favorite pages, and movie detail pages.",
    link: "https://github.com/Inri692/mymovies-app-react",
  },
  {
    id: 4,
    name: "Pokemom-app (January 2023)",
    image: "public/img/portfolios/pokemon.png",
    description:
      "Pokemon app is a website that displays a list of pokemon along with their pictures and displays every pokemon detail with specific characteristics.",
    link: "https://github.com/Inri692/-pokemon-app",
  },
];

export default projects;
