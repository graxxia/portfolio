import { useEffect, useState } from "react";

import Link from "next/link";

export const NavMenu = (router) => {
  const [currentURL, setCurrentURL] = useState("");

  useEffect(() => {
    if (router.isReady) {
      const urlSearchParams = new URLSearchParams(window.location.search);
      const data = urlSearchParams.get("data") || "";
      setCurrentURL(data);
    }
  }, [router]);

  const pages = {
    home: "http://localhost:3000/" === currentURL,
  };

  return (
    <div className="navbar ">
      <div className="flex justify-center flex-1 px-2">
        <div className="flex items-stretch">
          <Link href="/">
            <a
              className={
                pages.home
                  ? "btn font-black tracking-wider"
                  : `btn btn-ghost  hover:bg-primary-focus rounded-none tracking-wider `
              }
            >
              PORTFOLIO
            </a>
          </Link>
          <Link href="/about">
            <a className="btn btn-ghost  hover:bg-primary-focus rounded-none tracking-wider">
              ABOUT
            </a>
          </Link>

          <Link href="/contact">
            <a className="btn btn-ghost  hover:bg-primary-focus rounded-none tracking-wider">
              CONTACT
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavMenu;
