import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faCog,
  faBars,
  faTimes,
  faUser,
  faSitemap,
} from "@fortawesome/free-solid-svg-icons";
import { signOut } from "next-auth/client";
import Button from "../components/button";
import Badge from "../components/badge";
import Link from "next/link";

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  let navClass =
    "w-72 max-w-full bg-blue-800 h-screen flex flex-col text-white fixed lg:absolute lg:sticky top-0 transition-transform transform duration-500 ease";
  if (mobileOpen) navClass += " translate-x-0";
  else navClass += " -translate-x-full lg:translate-x-0";
  return (
    <div className={navClass}>
      <FontAwesomeIcon
        icon={mobileOpen ? faTimes : faBars}
        onClick={() => setMobileOpen(!mobileOpen)}
        className="absolute top-0 right-0 mt-8 text-3xl text-blue-800 transform cursor-pointer translate-x-double lg:hidden"
      />
      <a href="#" className="block mt-6 no-underline">
        <img src="../../y-logo.png" className="w-40 mx-auto" />
      </a>
      <div className="flex-1 mt-8">
        <div className="px-8">
          <Button onClick={() => signOut()} text="Sign Out" size="sm" full />
        </div>
        <div className="mt-6">
          <Link href="/">
            <a
              href="/"
              className="flex justify-between w-full px-8 py-3 text-sm no-underline transition-colors duration-200 ease-in-out border-l-2 border-transparent hover:bg-blue-900 hover:border-blue-400"
            >
              <div>
                <FontAwesomeIcon icon={faHome} className="mr-4" /> Home
              </div>
            </a>
          </Link>
          <Link href="/sites">
            <a className="flex justify-between w-full px-8 py-3 text-sm no-underline transition-colors duration-200 ease-in-out border-l-2 border-transparent hover:bg-blue-900 hover:border-blue-400">
              <div>
                <FontAwesomeIcon icon={faSitemap} className="mr-4" /> Sites
              </div>
              <Badge type="dark" text="3" />
            </a>
          </Link>
          <Link href="/users">
            <a className="flex justify-between w-full px-8 py-3 text-sm no-underline transition-colors duration-200 ease-in-out border-l-2 border-transparent hover:bg-blue-900 hover:border-blue-400">
              <div>
                <FontAwesomeIcon icon={faUser} className="mr-4" /> Users
              </div>
            </a>
          </Link>
          <Link href="/settings">
            <a className="flex justify-between w-full px-8 py-3 text-sm no-underline transition-colors duration-200 ease-in-out border-l-2 border-transparent hover:bg-blue-900 hover:border-blue-400">
              <div>
                <FontAwesomeIcon icon={faCog} className="mr-4" /> Settings
              </div>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
