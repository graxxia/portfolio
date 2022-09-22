import Link from "next/link";

import Router, { useRouter } from "next/router";
import { useEffect, useState } from "react";

function NavMenu() {
  const router = useRouter();
  const [currentURL, setCurrentURL] = useState("");

  if (router) {
    const { asPath } = router;

    console.log(asPath, "PATH");
  }

  useEffect(() => {
    if (Router.isReady) {
      const urlSearchParams = new URLSearchParams(window.location.search);
      const data = urlSearchParams.get("data") || "";
      setCurrentURL(data);
    }
  }, []);

  const pages = {
    // home: "https://www.gracia.works/" === currentURL,
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
}
NavMenu.getInitialProps = async ({ pathname }) => {
  console.log(pathname, "ctx");
  return { url: pathname };
};
export default NavMenu;
