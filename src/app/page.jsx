import Image from "next/image";
import styles from "./home.module.css";

const Homepage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.overlay}>
        <Image
          src="/Herro Section (1).png "
          alt=""
          fill
          objectFit="cover"
          quality={100}
        />
        <div className={styles.textContainer}>
          <h1 className={styles.title}>ESSEX MUMS (AND DADS)</h1>
          <p className={styles.subtitle}>
            THING TO DO PLACES TO GO AND MORE FOR PARENTS IN ESSEX
          </p>
        </div>
      </div>
      {/* Second Section */}
      <div className={styles.secondSection}>
        <div className={styles.boxContainer}>
          <div className={styles.box}>Classes+Events Calendar</div>
          <div className={styles.box}>Essex Mums Awards</div>
          <div className={styles.box}>Local Business Listing</div>
        </div>
        <div className={styles.bannerContainer}>
          <Image
            src="/2Img.png"
            alt="Banner"
            layout="responsive"
            width={1440}
            height={512}
            quality={100}
          />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
