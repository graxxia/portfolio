import Link from "next/link";
import { GRLogoCircle } from "./GrLogos";

export function LogoName() {
  return (
    <div className="pt-4 	">
      <Link href="/" className="">
        <a>
          <GRLogoCircle className="h-28 w-28" />
        </a>
      </Link>
    </div>
  );
}
