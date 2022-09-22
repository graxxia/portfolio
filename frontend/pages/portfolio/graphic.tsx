import Image from "next/image";
import { importAll } from "../../util/util";

require.context("../../public/assets/3D", false, /\.(png|jpe?g|svg|gif)$/);

function Graphic() {
  return (
    <div className="grid mb-5 ">
      <h1 className="text-6xl font-bold uppercase py-10">GRAPHIC</h1>
      <div className="py-20 bg-gradient-to-r from-orange-100 to-cyan-100 mb-10">
        <div className="avatar place-self-center w-30 h-30">
          <Image
            src={"/assets/img/colours.png"}
            alt="Colours Logo"
            quality={100}
            width={300}
            height={300}
            className="rounded-full "
          />
        </div>
      </div>
      <div className="justify-self-center max-w-md m-5">
        <h2 className="text-3xl uppercase leading-10">COLOURS BY MACK</h2>

        <p className=" uppercase font-medium tracking-widest bg-gradient-to-r from-orange-100 to-cyan-100 my-5 py-2 px-3">
          GRAPHIC DESIGN / CREATE / PLANNING
        </p>

        <p className="flex font-medium uppercase tracking-widest underline underline-offset-4 decoration-2 my-4">
          TOOLS
        </p>
        <p className="text-left tracking-wide my-4">Illustrator</p>

        <p className="flex font-medium uppercase tracking-widest underline underline-offset-4 decoration-2 my-4">
          PROJECT
        </p>
        <p className="text-left tracking-wide my-4">
          NOVEMBER 2020 / Designed logo.
        </p>
      </div>
      <div className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-2 desktop:grid-cols-2 gap-10 px-5 py-20 place-items-center max-w-7xl place-self-center ">
        <div className=" my-20">
          <Image
            src={"/assets/graphic/colours/colours1.png"}
            alt="Colours by Mack"
            quality={100}
            width={748}
            height={748}
          />
          <p className="tracking-wide my-10">Negative Logo</p>
        </div>

        <div className="">
          <Image
            src={"/assets/graphic/colours/colours2.png"}
            alt="Colours by Mack"
            quality={100}
            width={748}
            height={748}
          />
          <p className="tracking-wide my-10">Positive Logo</p>
        </div>
        <div className="">
          <Image
            src={"/assets/graphic/colours/colours4.jpg"}
            alt="Colours by Mack"
            quality={100}
            width={748}
            height={748}
          />
          <p className="tracking-wide my-10">Application Product</p>
        </div>

        <div className="">
          <Image
            src={"/assets/graphic/colours/colours3.jpg"}
            alt="Colours by Mack"
            quality={100}
            width={1024}
            height={500}
          />
          <p className="tracking-wide my-10">Initial Idea</p>
        </div>
      </div>
      <hr className=" border-black border-1 mb-28 " />

      <div className="py-20 bg-gradient-to-r from-blue-100 to-green-100 mb-10">
        <div className="avatar place-self-center w-30 h-30">
          <Image
            src={"/assets/img/FAQ.jpg"}
            alt="FAQ Logo"
            quality={100}
            width={300}
            height={300}
            className="rounded-full "
          />
        </div>
      </div>

      <div className="justify-self-center max-w-md m-5">
        <h2 className="text-3xl uppercase leading-10">FAQ</h2>

        <p className="uppercase font-medium tracking-widest bg-gradient-to-r from-blue-100 to-green-100 my-5 py-2">
          GRAPHIC DESIGN / CREATE / PLANNING
        </p>

        <p className="flex font-medium uppercase tracking-widest underline underline-offset-4 decoration-2 my-4">
          TOOLS
        </p>
        <p className="text-left tracking-wide my-4">Illustrator</p>

        <p className="flex font-medium uppercase tracking-widest underline underline-offset-4 decoration-2 my-4">
          PROJECT
        </p>
        <p className="text-left tracking-wide my-4">
          JUNE 2018 / Designed logo, plaque and electronic signature.
        </p>
      </div>

      <div className=" my-20 ">
        <Image
          src={"/assets/graphic/faq/FAQ1.jpg"}
          alt="FAQ Logo"
          quality={100}
          width={606}
          height={338}
          className=""
        />
        <p className="tracking-wide my-5 mb-28">Logo</p>
        <div className="grid bg-base-200 py-10">
          <div className="grid gap-10 px-5 py-20 place-content-center place-self-center max-w-7xl">
            <div className="">
              <Image
                src={"/assets/graphic/faq/FAQ2.jpg"}
                alt="FAQ Plaque"
                quality={100}
                width={1055}
                height={1280}
              />
              <p className="tracking-wide my-10">Plaque</p>
            </div>
          </div>
        </div>
        <div className="my-20 mx-5">
          <Image
            src={"/assets/graphic/faq/FAQ3.jpg"}
            alt="FAQ Signature Left Alignment"
            quality={100}
            width={978}
            height={215}
          />
          <p className="tracking-wide my-10">
            Electronic Signature Left Alignment
          </p>
        </div>
        <div className="my-20 mx-5">
          <Image
            src={"/assets/graphic/faq/FAQ4.jpg"}
            alt="FAQ Signature Right Alignment"
            quality={100}
            width={978}
            height={215}
          />
          <p className="tracking-wide my-10">
            Electronic Signature Right Alignment
          </p>
        </div>
      </div>
    </div>
  );
}

export default Graphic;
