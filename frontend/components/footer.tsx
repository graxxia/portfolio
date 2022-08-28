import Link from "next/link";

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
                <img src="/Gracia.svg" alt="Gracia Logo" className="h-7 mx-1" />
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
