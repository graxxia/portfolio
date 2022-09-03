import Image from "next/image";
import { importAll } from "../../util/util";

require.context("../../public/assets/3D", false, /\.(png|jpe?g|svg|gif)$/);

function Print() {
  return (
    <div className="mb-5 px-4">
      <h1 className="text-6xl font-bold pb-5">PRINT</h1>

      <div className="mx-auto max-w-2xl">
        <div className="avatar place-self-center  mb-5 w-36 h-36">
          <Image
            src={"/assets/img/bonita.png"}
            alt="Bonita Logo"
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
            LA BONITA
          </h2>

          <p className="flex text-xs text-left font-medium tracking-widest leading-6 ">
            GRAPHIC DESIGN / CREATE / PLANNING / OBJECTIVES
          </p>

          <p className="flex text-xs font-medium tracking-widest leading-6 underline underline-offset-4 decoration-2 decoration-primary-focus">
            TOOLS
          </p>
          <p className="text-xs font-normal text-left tracking-wide leading-6">
            Illustrator / Photoshop
          </p>

          <p className="flex text-xs text-left font-medium tracking-widest leading-6 underline underline-offset-4 decoration-2 decoration-primary-focus">
            PROJECT
          </p>
          <p className="text-xs font-normal text-left tracking-wide leading-6">
            NOVEMBER 2020 / Redesigned new brand Identity.
          </p>
        </div>
        <div className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-2 desktop:grid-cols-2 gap-4 px-4 py-4 ">
          <div className="">
            <Image
              src={"/assets/print/bonita/bonita1.jpg"}
              alt="Bonita Menu"
              quality={100}
              width={1262}
              height={1280}
            />
            <p className="text-xs font-normal tracking-wide leading-6">
              Bonita Food Menu Front
            </p>
          </div>
          <div className="">
            <Image
              src={"/assets/print/bonita/bonita2.jpg"}
              alt="Bonita Menu"
              quality={100}
              width={1262}
              height={1280}
            />
            <p className="text-xs font-normal tracking-wide leading-6">
              Bonita Food Menu Inside
            </p>
          </div>
        </div>
        <Image
          src={"/assets/print/bonita/bonita3.jpg"}
          alt="Bonita Menu"
          quality={100}
          width={1280}
          height={542}
        />
        <p className="text-xs font-normal tracking-wide leading-6">
          Bonita Drink Menu Front
        </p>
        <div className="grid grid-cols-5  gap-4 px-4 py-4 ">
          <div className="">
            <Image
              src={"/assets/print/bonita/cards1.jpg"}
              alt="Bonita Individual Menu"
              quality={100}
              width={947}
              height={1379}
            />
          </div>
          <div className="">
            <Image
              src={"/assets/print/bonita/cards2.jpg"}
              alt="Bonita Individual Menu"
              quality={100}
              width={947}
              height={1379}
            />
          </div>
          <div className="">
            <Image
              src={"/assets/print/bonita/cards3.jpg"}
              alt="Bonita Individual Menu"
              quality={100}
              width={947}
              height={1379}
            />
          </div>
          <div className="">
            <Image
              src={"/assets/print/bonita/cards4.jpg"}
              alt="Bonita Individual Menu"
              quality={100}
              width={947}
              height={1379}
            />
          </div>
          <div className="">
            <Image
              src={"/assets/print/bonita/cards5.jpg"}
              alt="Bonita Individual Menu"
              quality={100}
              width={947}
              height={1379}
            />
          </div>
        </div>
        <p className="text-xs font-normal tracking-wide leading-6">
          Individual Beverage Designs
        </p>
      </div>
    </div>
  );
}

export default Print;
