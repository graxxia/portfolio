import Link from "next/link";
import { GLogo } from "./GrLogos";

let date = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="flex items-center justify-center w-full h-24 border-t">
      <Link href="/">
        <a>
          <div>
            <h2 className="flex items-center text-xs font-semibold tracking-widest">
              PORTFOLIO
              <span className="inline-block ">
                <GLogo className="w-8 h-8" />
              </span>
              {/* <img src="/heart.gif" alt="crown" className="h-4 ml-2" /> */}
              {date}
            </h2>
          </div>
        </a>
      </Link>
    </footer>
  );
}
