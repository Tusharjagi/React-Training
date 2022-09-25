import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <>
      <div className="contact-div">
        <h1>Contact</h1>
        <div className="div-inline">
          <Link to={"/"}>
            <button className="btn">Home page</button>
          </Link>
          <Link to={"/contact"}>
            <button className="btn">Contact page</button>
          </Link>
          <Link to={"/about"}>
            <button className="btn">About page</button>
          </Link>
        </div>
      </div>
      <section>This is Contact page</section>
    </>
  );
};

export default Contact;
