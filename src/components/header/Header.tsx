import "./header.scss";
import logo from "../../assets/Rectangle.png";

function Header() {
  return (
    <div className="header">
      <div className="logoWraper">
        <img src={logo} />
      </div>
    </div>
  );
}

export default Header;
