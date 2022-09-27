import { NavLink } from "react-router-dom";

const Contact = () => {
  return (
    <>
      <header>
        <a href="#">Logo</a>
        <nav>
            <ul>
                <li>
                    <NavLink to={"/"}>Home</NavLink>
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
        Contact
      </section>
    </>
    
  );
};

export default Contact;
