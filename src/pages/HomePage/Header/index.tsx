import styles from "./styles.module.scss";
import Image from 'next/image';
import { useEffect, useState } from "react";
import Logo from "Common/assets/imgs/headerlogo.svg";
import NavMenu from "components/NavBar";


const Header: React.FC = () => {

  const [scrolled, setScrolled] = useState(false);

  const onScroll = () => {
    const top = window.pageYOffset || document.documentElement.scrollTop;
    setScrolled(top > 50);
  }

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    }
  },[]);


  return (
    <header className={`${styles.container} ${scrolled ? styles.scrolled : ""}`}>
      <div className= {styles.content}>
        <div className={styles.logo}>
          <Image src={Logo} width={117} height={35} />
        </div>
        <div>
          <NavMenu />
        </div> 
        {/* <nav>
          <span>Home</span>
          <span>Features</span>
          <span>Advantages</span>
          <span>Testimonial</span>
        </nav> */}
        {/* <div className= {styles.button}>
          <DownloadButton />
        </div> */}
        <button>Download</button>
      </div>
    </header>
  );
};

export default Header;