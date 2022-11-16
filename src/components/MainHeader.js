import { NavLink } from "react-router-dom";
import style from "./MainHeader.module.css";

const MainHeader = () => {
  return (
    <header className={style.header}>
      <nav>
        <ul>
          <li>
            <NavLink activeClassName={style.active} to="/welcome">welcome</NavLink>
          </li>
          <li>
            <NavLink activeClassName={style.active} to="/product">product</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
