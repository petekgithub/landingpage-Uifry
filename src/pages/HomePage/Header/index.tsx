import styles from "./styles.module.scss";
//mport NavBar from "../../../components/NavBar";
//import DownloadButton from "components/Button/DownloadButton";
import Image from 'next/image';
import Logo from "../../../Common/assets/imgs/headerlogo.svg";


const Header: React.FC = () => {
  return (
    <header className={styles.container}>
      <div className= {styles.content}>
        <div className={styles.logo}>
        <Image 
          src={Logo}
          width={117}
          height={35}
        />
        </div>
        {/* <div>
          <NavBar />
        </div> */}
        <nav>
          <span>Home</span>
          <span>Features</span>
          <span>Advantages</span>
          <span>Testimonial</span>
        </nav>
        {/* <div className= {styles.button}>
          <DownloadButton />
        </div> */}
        <button>Download</button>
      </div>
    </header>
  );
};

export default Header;