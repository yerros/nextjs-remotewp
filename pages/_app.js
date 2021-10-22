import { Provider } from "next-auth/client";
import "tailwindcss/tailwind.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function MyApp({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <ToastContainer autoClose={3000} theme="colored" />
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
