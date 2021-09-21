import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import _ from "lodash";

import { FormattedMessage } from "react-intl";

import graphcms from "../lib/graphcms";
import styles from "../styles/Home.module.css";

const title = "Screenplays";

export default function Home({ screenplays }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <meta name="description" content="A collection of screenplays." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>{title}</h1>

        <ol className="mt-10">
          {screenplays.map((s, i) => {
            return (
              <li className="my-3">
                <Link href={`/scripts/${_.kebabCase(s.title)}`}>
                  <a className="script-link">{s.title}</a>
                </Link>
                <br />
                Written by {s.writers}
              </li>
            );
          })}
        </ol>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FormattedMessage
            id="index.poweredBy"
            defaultMessage="powered by"
          ></FormattedMessage>{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}

export async function getStaticProps() {
  const { screenplays } = await graphcms.request(`
    {
      screenplays(orderBy: title_ASC) {
        title
        writers
      }
    }
  `);

  return {
    props: {
      screenplays,
    },
  };
}
