import { useSelector } from "react-redux";

const Header = () => {
  const counter = useSelector((state) => state.counterReducer);
  return (
    <div className="header-wrapper">
      <h1 className="header">Counter</h1>
      <h1 className="count">{counter}</h1>
    </div>
  );
};

export default Header;
