import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";

const Hydrated = ({ children }: { children?: any }) => {
  const [hydration, setHydration] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setHydration(true);
    }
  }, []);
  return hydration ? children : hydration;
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Hydrated>
      <Component {...pageProps} />
    </Hydrated>
  );
}
