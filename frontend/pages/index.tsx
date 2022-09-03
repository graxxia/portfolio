import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-2 desktop:grid-cols-2 mb-5">
        <div className="px-4 py-4 hover:bg-white">
          <a className="cursor-pointer">
            <Link href="/portfolio/3D">
              <div className="card-normal ">
                <Image
                  src={"/assets/3D/porco/porco3.jpg"}
                  alt="Donut"
                  quality={100}
                  width={500}
                  height={500}
                  className="shadow-lg"
                />
              </div>
            </Link>

            <hr className=" border-black border-1 my-1 "></hr>

            <p className="flex font-semibold text-xs text-left tracking-widest ">
              3D
              <span className="inline-block bg-secondary-focus px-1 ml-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M3.22 16.78a.75.75 0 001.06 0L15.5 5.56v7.69a.75.75 0 001.5 0v-9.5a.75.75 0 00-.75-.75h-9.5a.75.75 0 000 1.5h7.69L3.22 15.72a.75.75 0 000 1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </p>
            <p className="flex text-xs text-left tracking-widest">
              CHARACTER DESIGN
            </p>
            <p className="flex text-xs text-left tracking-widest">MODEL</p>
          </a>
        </div>

        <div className="px-4 py-4 hover:bg-white">
          <a className="cursor-pointer">
            <Link href="/portfolio/digital">
              <div className="card-normal shadow-md">
                <Image
                  src={"/assets/img/emilyM.png"}
                  alt="Emily Murphy Logo"
                  quality={100}
                  width={500}
                  height={500}
                />
              </div>
            </Link>

            <hr className=" border-black border-1 my-1 "></hr>

            <p className="font-semibold text-xs text-left tracking-widest">
              DIGITAL
              <span className="inline-block bg-secondary-focus px-1 ml-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M3.22 16.78a.75.75 0 001.06 0L15.5 5.56v7.69a.75.75 0 001.5 0v-9.5a.75.75 0 00-.75-.75h-9.5a.75.75 0 000 1.5h7.69L3.22 15.72a.75.75 0 000 1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </p>
            <p className="flex text-xs text-left tracking-widest">CONCEPTION</p>
            <p className="flex text-xs text-left tracking-widest">
              COMMUNICATION
            </p>
          </a>
        </div>
        <div className="px-4 py-4 hover:bg-white">
          <a className="cursor-pointer">
            <Link href="/portfolio/graphic">
              <div className="card-normal shadow-md">
                <Image
                  src={"/assets/img/colours.png"}
                  alt="Colours Logo"
                  quality={100}
                  width={500}
                  height={500}
                />
              </div>
            </Link>

            <hr className=" border-black border-1 my-1 "></hr>

            <p className="font-semibold text-xs text-left tracking-widests tracking-widest">
              GRAPHIC DESIGN
              <span className="inline-block bg-secondary-focus px-1 ml-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M3.22 16.78a.75.75 0 001.06 0L15.5 5.56v7.69a.75.75 0 001.5 0v-9.5a.75.75 0 00-.75-.75h-9.5a.75.75 0 000 1.5h7.69L3.22 15.72a.75.75 0 000 1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </p>
            <p className="flex text-xs text-left tracking-widest">PLANNING</p>
            <p className="flex text-xs text-left tracking-widest">CREATE</p>
          </a>
        </div>
        <div className="px-4 py-4 hover:bg-white">
          <a className="cursor-pointer">
            <Link href="/portfolio/print">
              <div className="card-normal shadow-md">
                <Image
                  src={"/assets/img/bonita.png"}
                  alt="Cat Illustration"
                  quality={100}
                  width={500}
                  height={500}
                />
              </div>
            </Link>

            <hr className=" border-black border-1 my-1 "></hr>

            <p className="font-semibold text-xs text-left tracking-widests tracking-widest">
              PRINT
              <span className="inline-block bg-secondary-focus px-1 ml-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M3.22 16.78a.75.75 0 001.06 0L15.5 5.56v7.69a.75.75 0 001.5 0v-9.5a.75.75 0 00-.75-.75h-9.5a.75.75 0 000 1.5h7.69L3.22 15.72a.75.75 0 000 1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </p>
            <p className="flex text-xs text-left tracking-widest">OBJECTIVES</p>
            <p className="flex text-xs text-left tracking-widest">DESIGN</p>
          </a>
        </div>
      </div>
    </>
  );
}
