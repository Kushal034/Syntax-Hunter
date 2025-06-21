import "@/styles/globals.css";
import "../styles/style.css"
import Navbar from "@/Components/Navbar";

export default function App({ Component, pageProps }) {
  return <>
  <div></div>
  <Navbar></Navbar>
   <Component {...pageProps} />;
   </>
}
