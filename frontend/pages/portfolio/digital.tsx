import Image from "next/image";

function Digital() {
  return (
    <div className="grid mb-5 ">
      <h1 className="text-6xl font-bold uppercase py-10">DIGITAL</h1>
      <div className="py-20 bg-gradient-to-r from-teal-100 to-fuchsia-100 mb-10">
        <div className="avatar place-self-center w-30 h-30">
          <Image
            src={"/assets/img/emilyM.png"}
            alt="Emily Murphy Logo"
            quality={100}
            width={300}
            height={300}
            className="rounded-full"
          />
        </div>
      </div>
      <div className="justify-self-center max-w-md m-5">
        <h2 className="text-3xl uppercase leading-10">
          EMILY MURPHY NON-PROFIT HOUSING CORP.
        </h2>

        <p className="uppercase font-medium tracking-widest bg-gradient-to-r from-teal-100 to-fuchsia-100 my-5 py-2">
          GRAPHIC DESIGN / LAYOUT / RESEARCH
        </p>
        <p className="flex font-medium uppercase tracking-widest underline underline-offset-4 decoration-2 my-4">
          TOOLS
        </p>
        <p className="text-left tracking-wide my-4">Illustrator, Photoshop</p>
        <p className="flex font-medium uppercase tracking-widest underline underline-offset-4 decoration-2 my-4">
          PROJECT
        </p>
        <p className="text-left tracking-wide my-4">
          2013 / Team work research. Designed the client&apos;s logo and layout
          of the website and collaborated on the brand identity colours that fit
          the client vision.
        </p>
      </div>

      <div className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-2 desktop:grid-cols-2 gap-10 px-5 py-20 place-items-center max-w-7xl place-self-center ">
        <div className=" my-20">
          <Image
            src={"/assets/img/emilyM.png"}
            alt="Emily Murphy Logo"
            quality={100}
            width={400}
            height={400}
          />

          <p className="tracking-wide mb-10 ">Redesigned Logo</p>
        </div>
        <div className="place-self-center my-10 ">
          <Image
            src={"/assets/digital/emily/emilyColours.png"}
            alt="Emily Murphy colours"
            quality={100}
            width={275}
            height={198}
            className=""
          />

          <p className="tracking-wide my-10">Colour Palette</p>
        </div>
        <div className="">
          <Image
            src={"/assets/digital/emily/emOption1.png"}
            alt="Emily Murphy "
            quality={100}
            width={320}
            height={201}
          />
        </div>
        <div className="my-10">
          <Image
            src={"/assets/digital/emily/emOption2.png"}
            alt="Emily Murphy "
            quality={100}
            width={324}
            height={295}
          />
        </div>
        <p className="tracking-wide">1. Use of Logo, Vertical</p>
        <p className="tracking-wide">2. Use of Logo, Horizontal</p>
      </div>
      <div className="grid bg-base-200">
        <div className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-2 desktop:grid-cols-2 gap-10 px-5 py-20 place-content-center place-self-center max-w-7xl">
          <div className="self-center p-10 text-2xl text-fuchsia-900 mb-20 ">
            <p className="grid justify-items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 stroke-teal-500 m-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
                />
              </svg>
            </p>
            With the team&apos;s research and the client&apos;s help for this
            project, I was able to pick the colours that represent the
            client&apos;s vision and create layouts for their website.
          </div>
          <div className="">
            <Image
              src={"/assets/digital/emily/emWeb1.jpg"}
              alt="Emily Murphy Mobile Layout"
              quality={100}
              width={160}
              height={640}
            />

            <p className="tracking-wide my-10">Mobile Website</p>
          </div>
          <div className="">
            <Image
              src={"/assets/digital/emily/emWeb2.jpg"}
              alt="Emily Murphy Desktop Layout"
              quality={100}
              width={1170}
              height={718}
              className=""
            />

            <p className="tracking-wide my-10">Desktop Website</p>
          </div>
          <div className="">
            <Image
              src={"/assets/digital/emily/emWeb3.jpg"}
              alt="Emily Murphy Content Layout"
              quality={100}
              width={1170}
              height={1489}
            />

            <p className="tracking-wide my-10">Content Website</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-2 desktop:grid-cols-2 gap-10 px-5 py-20 place-items-center max-w-7xl place-self-center ">
        <div className="mt-20">
          <Image
            src={"/assets/digital/emily/emOptions.png"}
            alt="Emily Murphy Logo Options"
            quality={100}
            width={502}
            height={488}
          />

          <p className="tracking-wide my-10">Design Logo Options</p>
        </div>

        <div className="my-20">
          <Image
            src={"/assets/digital/emily/em_bc.jpg"}
            alt="Emily Murphy previous design"
            quality={100}
            width={426}
            height={240}
          />
          <p className="tracking-wide my-10">Previous Design</p>
        </div>
      </div>
      <hr className=" border-black border-1 mb-28 " />

      <div className="py-20 bg-gradient-to-r from-green-100 to-blue-100 mb-10">
        <div className="avatar place-self-center w-30 h-30">
          <Image
            src={"/assets/digital/cammac.jpg"}
            alt="Cammac logo"
            quality={100}
            width={300}
            height={300}
            className="rounded-full"
          />
        </div>
      </div>

      <div className="justify-self-center max-w-md m-5">
        <h2 className="text-3xl uppercase leading-10">CAMMAC - STUDIO COLOC</h2>

        <p className="uppercase font-medium tracking-widest bg-gradient-to-r from-green-100 to-blue-100 my-5 py-2">
          ALREADY POSITIONED BRAND / LAYOUT
        </p>

        <p className="flex font-medium uppercase tracking-widest underline underline-offset-4 decoration-2 my-4">
          TOOLS
        </p>
        <p className="text-left tracking-wide my-4">Illustrator, Photoshop</p>

        <p className="flex font-medium uppercase tracking-widest underline underline-offset-4 decoration-2 my-4">
          PROJECT
        </p>
        <p className="text-left tracking-wide my-4">
          Created promotional designs for digital media in French and English.
        </p>
      </div>
      <div className="my-20">
        <Image
          src={"/assets/digital/cammac/cammacFB1.jpg"}
          alt="Cammac promotional"
          quality={100}
          width={1200}
          height={630}
        />
        <p className="tracking-wide my-10 mx-5">
          Promotional Bring a Friend - French
        </p>
      </div>
      <div className="my-10">
        <Image
          src={"/assets/digital/cammac/cammacFB2.jpg"}
          alt="Cammac promotional"
          quality={100}
          width={1200}
          height={630}
        />
        <p className="tracking-wide my-10 mx-5">
          Promotional Discount for More than One Week - French
        </p>
      </div>
      <div className="my-10 mx-5">
        <Image
          src={"/assets/digital/cammac/cammac1.jpg"}
          alt="Cammac promotional"
          quality={100}
          width={980}
          height={488}
        />
        <p className="tracking-wide my-10 mx-5">
          Promotional Discount for More than One Week - French and English
        </p>
      </div>
      <div className="my-10 mx-5">
        <Image
          src={"/assets/digital/cammac/cammac2.jpg"}
          alt="Cammac promotional"
          quality={100}
          width={964}
          height={578}
        />
        <p className="tracking-wide my-10 mx-5">
          Promotional Share a Room - French and English
        </p>
      </div>
      <div className="my-10 mx-5">
        <Image
          src={"/assets/digital/cammac/cammac3.jpg"}
          alt="Cammac promotional"
          quality={100}
          width={961}
          height={540}
        />
        <p className="tracking-wide my-10 mx-5">
          Promotional 5 and More - French and English
        </p>
      </div>
      <div className="my-10 mx-5">
        <Image
          src={"/assets/digital/cammac/cammac4.jpg"}
          alt="Cammac promotional"
          quality={100}
          width={980}
          height={551}
        />
        <p className="tracking-wide my-10 mx-5">
          Promotional Bring a Friend - French and English
        </p>
      </div>
    </div>
  );
}

export default Digital;
