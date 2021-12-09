import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name='keywords' content='ninjas'></meta>
      </Head>
      <div>
        <h1 className={styles.title}>Home Page</h1>
        <p className={styles.text}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
          accusamus tempora. Dolore eligendi, blanditiis recusandae perspiciatis
          quisquam architecto consequuntur dolores labore vitae facilis
          quibusdam libero fugiat nulla corporis numquam repellat. Magni
          accusamus necessitatibus, aperiam eius quaerat dolorum. Odit similique
          facilis at ut nisi! Aut officia velit facilis totam alias
          exercitationem.
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
          aliquid nostrum doloremque dolorem maiores ipsam, a dolore alias
          commodi eos minus, provident quae placeat, quas iste quam fugit
          repellat suscipit perferendis. Ipsum vel saepe nisi obcaecati
          recusandae repellat, voluptatibus, quaerat deleniti eligendi quas
          exercitationem reprehenderit molestias, tempore labore illo et!
        </p>
        <Link href='/ninjas' className={styles.btn}>
          <a>Ninja Listing</a>
        </Link>
      </div>
    </>
  );
}
