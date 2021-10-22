import Navbar from "./nav";
import Head from "next/head";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestionCircle, faBell } from "@fortawesome/free-solid-svg-icons";
import Avatar from "../components/avatar";
// import Footer from './footer'

export default function Layout({ children, title }) {
  return (
    <div className="flex">
      <Head>
        <title>{title}</title>
      </Head>
      <Navbar />
      <div className="flex-1 min-h-screen bg-gray-200">
        <div className="flex items-center justify-between w-full px-6 py-6 bg-white border-b border-gray-300">
          <h2 className="pl-12 text-lg font-bold text-blue-800 lg:pl-0">
            {title}
          </h2>
          <div className="flex items-center">
            <FontAwesomeIcon
              icon={faQuestionCircle}
              className="ml-4 text-xl cursor-pointer"
            />
            <FontAwesomeIcon
              icon={faBell}
              className="ml-4 text-xl cursor-pointer"
            />
            <div className="relative ml-4">
              <Avatar
                image="https://picsum.photos/id/237/200/200.jpg"
                className="cursor-pointer"
                status="online"
              />
            </div>
          </div>
        </div>
        <div className="w-full max-w-screen-xl px-6 py-12">
          <div className="mb-12">{children}</div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}
