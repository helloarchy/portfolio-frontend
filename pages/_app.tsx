import "tailwindcss/tailwind.css"; // Use Tailwind everywhere

import { AppProps } from "next/app";

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default App;
