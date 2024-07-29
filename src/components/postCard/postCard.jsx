import Image from "next/image";
import styles from "./postCard.module.css";
import Link from "next/link";
const PostCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image className={styles.img} src="/5img.png" alt="" fill />
        </div>
        <div className={styles.tag}>
          <Image
            className={styles.tagImg}
            src="/Vector.png"
            alt=""
            width={16}
            height={16}
          />
          <h4>APA Blog</h4>
        </div>
      </div>
      <div className={styles.middle}>
        <div className={styles.textContainer}>
          <div className={styles.detail}>
            <div className={styles.title}>
              <h1>Essex Mum Awards 2023 – Voting</h1>
            </div>
            <span className={styles.date}>JUNE 22, 2023</span>
          </div>
        </div>
        <hr className={styles.line} />
      </div>
      <div className={styles.bottom}>
        <div className={styles.desc}>
          <div className={styles.likimg}>
            <Link className={styles.link} href="/blog/post">
              Read more
            </Link>
            <Image src="/1icon.png" alt="" width={20} height={20} />
          </div>
          <span className={styles.comment}>
            <Image src="/comment.png" alt="" width={20} height={20} /> 0
          </span>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
