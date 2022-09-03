import Image from "next/image";
import { importAll } from "../../util/util";

require.context("../../public/assets/3D", false, /\.(png|jpe?g|svg|gif)$/);

function Graphic() {
  return (
    <div className="mb-5 px-4">
      <h1 className="text-6xl font-bold pb-5">GRAPHIC</h1>

      <div className="mx-auto max-w-2xl">
        <div className="avatar place-self-center  mb-5 w-36 h-36">
          <Image
            src={"/assets/img/colours.png"}
            alt="Colours Logo"
            quality={100}
            width={400}
            height={400}
            className="rounded-full "
          />
        </div>

        <hr className=" border-black border-1 my-1 "></hr>
        <div className="max-w-md">
          <h2 className="font-semibold text-left tracking-widest leading-10">
            <span className="inline-block bg-secondary-focus mr-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-4 h-4"
              >
                <path
                  fillRule="evenodd"
                  d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            COLOURS BY MACK
          </h2>

          <p className="flex text-xs text-left font-medium tracking-widest leading-6 ">
            GRAPHIC DESIGN / CREATE / PLANNING
          </p>

          <p className="flex text-xs font-medium tracking-widest leading-6 underline underline-offset-4 decoration-2 decoration-primary-focus">
            TOOLS
          </p>
          <p className="text-xs font-normal text-left tracking-wide leading-6">
            Illustrator
          </p>

          <p className="flex text-xs text-left font-medium tracking-widest leading-6 underline underline-offset-4 decoration-2 decoration-primary-focus">
            PROJECT
          </p>
          <p className="text-xs font-normal text-left tracking-wide leading-6">
            NOVEMBER 2020 / Designed logo.
          </p>
        </div>
        <div className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-2 desktop:grid-cols-2 gap-4 px-4 py-4 ">
          <div className="">
            <Image
              src={"/assets/graphic/colours/colours1.png"}
              alt="Colours by Mack"
              quality={100}
              width={748}
              height={748}
            />
            <p className="text-xs font-normal tracking-wide leading-6">
              Colours by Mack, Negative Logo
            </p>
          </div>

          <div className="">
            <Image
              src={"/assets/graphic/colours/colours2.png"}
              alt="Colours by Mack"
              quality={100}
              width={748}
              height={748}
            />
            <p className="text-xs font-normal tracking-wide leading-6">
              Colours by Mack, Positive Logo
            </p>
          </div>
          <div className="">
            <Image
              src={"/assets/graphic/colours/colours4.jpg"}
              alt="Colours by Mack"
              quality={100}
              width={748}
              height={748}
            />
            <p className="text-xs font-normal tracking-wide leading-6">
              Application Product
            </p>
          </div>

          <div className="">
            <Image
              src={"/assets/graphic/colours/colours3.jpg"}
              alt="Colours by Mack"
              quality={100}
              width={1024}
              height={500}
            />
            <p className="text-xs font-normal tracking-wide leading-6">
              Initial Idea
            </p>
          </div>
        </div>
        <div className="avatar place-self-center  mb-5 w-36 h-36">
          <Image
            src={"/assets/img/FAQ.jpg"}
            alt="FAQ Logo"
            quality={100}
            width={400}
            height={400}
            className="rounded-full "
          />
        </div>
        <hr className=" border-black border-1 my-1 "></hr>
        <div className="max-w-md">
          <h2 className="font-semibold text-left tracking-widest leading-10">
            <span className="inline-block bg-secondary-focus mr-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-4 h-4"
              >
                <path
                  fillRule="evenodd"
                  d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            FAQ
          </h2>

          <p className="flex text-xs text-left font-medium tracking-widest leading-6 ">
            GRAPHIC DESIGN / CREATE / PLANNING
          </p>

          <p className="flex text-xs font-medium tracking-widest leading-6 underline underline-offset-4 decoration-2 decoration-primary-focus">
            TOOLS
          </p>
          <p className="text-xs font-normal text-left tracking-wide leading-6">
            Illustrator
          </p>

          <p className="flex text-xs text-left font-medium tracking-widest leading-6 underline underline-offset-4 decoration-2 decoration-primary-focus">
            PROJECT
          </p>
          <p className="text-xs font-normal text-left tracking-wide leading-6">
            JUNE 2018 / Designed logo, plaque and electronic signature.
          </p>
        </div>
        <div className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-2 desktop:grid-cols-2 gap-4 px-4 py-4 ">
          <div className="">
            <Image
              src={"/assets/graphic/faq/FAQ1.jpg"}
              alt="FAQ Logo"
              quality={100}
              width={606}
              height={338}
            />
            <p className="text-xs font-normal tracking-wide leading-6">Logo</p>
          </div>
          <div className="">
            <Image
              src={"/assets/graphic/faq/FAQ2.jpg"}
              alt="FAQ Plaque"
              quality={100}
              width={1055}
              height={1280}
            />
            <p className="text-xs font-normal tracking-wide leading-6">
              Plaque
            </p>
          </div>
          <div className="">
            <Image
              src={"/assets/graphic/faq/FAQ3.jpg"}
              alt="FAQ Signature Left Alignment"
              quality={100}
              width={978}
              height={215}
            />
            <p className="text-xs font-normal tracking-wide leading-6">
              Electronic Signature Left Alignment
            </p>
          </div>
          <div className="">
            <Image
              src={"/assets/graphic/faq/FAQ4.jpg"}
              alt="FAQ Signature Right Alignment"
              quality={100}
              width={978}
              height={215}
            />
            <p className="text-xs font-normal tracking-wide leading-6">
              Electronic Signature Right Alignment
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Graphic;
