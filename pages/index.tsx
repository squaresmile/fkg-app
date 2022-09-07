import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Cereal&apos;s Flower Knight Girl App</title>
                <meta
                    name="description"
                    content="Cereal's Flower Knight Girl App"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <Link href="/characters">
                    <a className="text-decoration-none">Characters</a>
                </Link>
            </main>
        </div>
    );
};

export default Home;
