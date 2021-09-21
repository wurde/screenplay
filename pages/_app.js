import { useRouter } from "next/router";
import { IntlProvider } from "react-intl";

import Messages from "../i18n/Messages";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <IntlProvider
      key={router.locale}
      locale={router.locale}
      messages={Messages[router.locale]}
      defaultLocale="en-US"
    >
      <Component {...pageProps} />
    </IntlProvider>
  );
}

export default MyApp;
