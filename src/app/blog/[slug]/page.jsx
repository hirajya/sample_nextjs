import Image from "next/image";
import styles from "./singlePostPage.module.css";

const SinglePostPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/post_sample.jpg" alt="Post Image" fill className={styles.img} />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Title</h1>
        <div className={styles.authorInfo}>
          <Image src="/avatar.jpg" alt="Author Image" width={100} height={100} className={styles.authorImg} />
          <div className={styles.infoContainer}>
            <span className={styles.authorText}>Author</span>
            <span className={styles.authorName}>Rodney Lei Estrada</span>
          </div>
          <div className={styles.infoContainer}>
            <span className={styles.publishedText}>Published</span>
            <span className={styles.publishedDate}>09.25.2003</span>
          </div>
        </div>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
      </div>
    </div>
  );
};

export default SinglePostPage;
