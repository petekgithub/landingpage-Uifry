import styles from "./styles.module.scss";
import menuItems from "../../constants/menuItems";

const NavMenu = () => {
  const handleClick = (event:string) => {
    const data = document.getElementById(event);
    window.scrollTo({
      top:data?.offsetTop, 
      behavior:"smooth"
    });
  };

  return (
      <nav className={styles.container}>
         {menuItems.map((x) => (
          <span
            id={x.id}
            key={x.value}
            onClick={() => handleClick(x.value)}>
              {x.value}
          </span>
         ))}
      </nav>
  );
};

export default NavMenu;