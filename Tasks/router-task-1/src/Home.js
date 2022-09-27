import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="home-div">
        <h1>Home</h1>
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
      <section>This is Home page</section>
    </>
  );
};

export default Home;
