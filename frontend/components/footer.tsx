import Link from "next/link";
import { GLogo } from "./GrLogos";

let date = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="flex items-center justify-center w-full h-36 border-t">
      <Link href="/">
        <a>
          <div className="grid justify-items-center">
            <h2 className="flex items-center text-xs font-semibold tracking-widest my-4">
              PORTFOLIO
              <span className="inline-block ">
                <GLogo className="w-8 h-8" />
              </span>
              {date}
            </h2>
            <p className="text-xs">
              Welcome to my website, I created it using Vercel Next.js. <br />
              Thank you for your visit.
            </p>
          </div>
        </a>
      </Link>
    </footer>
  );
}
