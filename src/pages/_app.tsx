import { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import { LayoutProvider } from "../components/layoutProvider";

function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <LayoutProvider>
        <Component {...pageProps}></Component>
      </LayoutProvider>
    </RecoilRoot>
  );
}

export default App;
