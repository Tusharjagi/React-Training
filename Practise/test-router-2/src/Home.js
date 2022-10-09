import { NavLink, Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <header>
        <a href="#">Logo</a>
        <nav>
            <ul>
                <li>
                    <Link to={"/"}>Home</Link>
                </li>
                <li>
                    <NavLink to={"/about"}>About</NavLink>
                </li>
                <li>
                    <NavLink to={"/contact"}>Contact</NavLink>
                </li>
            </ul>
        </nav>
      </header>
      <section>
        Home
      </section>
    </>
  );
};

export default Home;
