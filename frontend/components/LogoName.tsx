import Link from "next/link";
import { GRLogoCircle } from "./GrLogos";

export function LogoName() {
  return (
    <div className="grid place-items-center  place-self-center  mb-5 pt-8">
      <Link href="/" className="">
        <GRLogoCircle className="h-28 w-28" />
      </Link>
    </div>
  );
}
