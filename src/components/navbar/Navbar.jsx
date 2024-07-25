import Link from "next/link";
import Links from "./links/Links";
import styles from "./navbar.module.css";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
        <Image src="/1m.png" alt="Logo " width={150} height={70} />
      </Link>
      <Links />
    </div>
  );
};

export default Navbar;
