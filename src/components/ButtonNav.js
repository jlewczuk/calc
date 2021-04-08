import s from "./ButtonNav.module.css";

const ButtonNav = ({ children }) => (
  <div className={s.buttonNav}>{children}</div>
);

export default ButtonNav;