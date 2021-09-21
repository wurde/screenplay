import Head from "next/head";
import Link from "next/link";

export default function Script() {
  return (
    <div className="container mx-auto px-4">
      <Head>
        <title>Script</title>
      </Head>
      <Link href="/">
        <a>Back</a>
      </Link>
    </div>
  );
}
