import Link from "next/link";

export function LogoName() {
  return (
    <div className="pt-4 	">
      <Link href="/" className="">
        <a>
          {" "}
          <img className="h-24 w-24" src="/GraciaLogo.svg" alt="logo" />
        </a>
      </Link>
    </div>
  );
}
