import Head from "next/head";
import Link from "next/link";
import _ from "lodash";
import marked from "marked";

import graphcms from "../../lib/graphcms";

export default function Screenplay({ screenplay }) {
  return (
    <div className="container mx-auto px-4">
      <Head>
        <title>Script</title>
      </Head>
      <main className="mt-5">
        <Link href="/">
          <a className="primary-link">Back</a>
        </Link>
        <div
          className="mt-20 mb-20"
          dangerouslySetInnerHTML={{
            __html: screenplay && screenplay.content && screenplay.content,
          }}
        ></div>
      </main>
    </div>
  );
}

export async function getStaticPaths() {
  const { screenplays } = await graphcms.request(`
    query GetScriptIDs {
      screenplays {
        title
      }
    }
  `);
  const paths = screenplays.map((s) => `/screenplays/${_.kebabCase(s.title)}`);

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const { id } = context.params;
  // TODO pass id to get screenplay via title
  const { screenplay } = await graphcms.request(`
    query GetScreenplay {
      screenplay: screenplays(where: { title: "Blade Runner"}) {
        content
      }
    }
  `);

  const html = marked(screenplay[0].content);

  return {
    props: {
      screenplay: { content: html },
    },
  };
}
