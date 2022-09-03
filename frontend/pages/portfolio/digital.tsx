import Image from "next/image";
import { importAll } from "../../util/util";

require.context("../../public/assets/3D", false, /\.(png|jpe?g|svg|gif)$/);

function Digital() {
  return (
    <div className="mb-5 px-4">
      <h1 className="text-6xl font-bold pb-5">DIGITAL</h1>

      <div className="mx-auto max-w-2xl">
        <div className="avatar place-self-center  mb-5 w-36 h-36">
          <Image
            src={"/assets/img/emilyM.png"}
            alt="Emily Logo"
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
            EMILY MURPHY NON-PROFIT HOUSING CORP.
          </h2>

          <p className="flex text-xs text-left font-medium tracking-widest leading-6 ">
            GRAPHIC DESIGN / LAYOUT / RESEARCH
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
            2013 / Team work research. Designed the client&apos;s logo and
            layout of the website and collaborated on the brand identity colours
            that fit the client vision.
          </p>
        </div>
        <div className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-2 desktop:grid-cols-2 gap-4 px-4 py-4 ">
          <div className="">
            <Image
              src={"/assets/digital/emily/emColours.png"}
              alt="Emily Murphy colours"
              quality={100}
              width={1036}
              height={519}
            />
            <p className="text-xs font-normal tracking-wide leading-6">
              Colour Palette
            </p>
          </div>

          <div className="">
            <Image
              src={"/assets/img/emilyM.png"}
              alt="Emily Murphy Logo"
              quality={100}
              width={500}
              height={500}
            />
            <p className="text-xs font-normal tracking-wide leading-6">
              Redesigned Logo
            </p>
          </div>

          <div className="">
            <Image
              src={"/assets/digital/emily/emWeb1.jpg"}
              alt="Emily Murphy Mobile Layout"
              quality={100}
              width={160}
              height={640}
            />
            <p className="text-xs font-normal tracking-wide leading-6">
              Mobile Website
            </p>
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
            <p className="text-xs  pb-4 font-normal tracking-wide leading-6">
              Desktop Website
            </p>
            <span>
              <Image
                src={"/assets/digital/emily/emWeb3.jpg"}
                alt="Emily Murphy Content Layout"
                quality={100}
                width={1170}
                height={1489}
              />{" "}
              <p className="text-xs font-normal tracking-wide leading-6">
                Content Website
              </p>
            </span>
          </div>
          <div className="">
            <Image
              src={"/assets/digital/emily/emOptions.png"}
              alt="Emily Murphy Logo"
              quality={100}
              width={1508}
              height={1464}
            />
            <p className="text-xs font-normal tracking-wide leading-6">
              Design Options
            </p>
          </div>
          <div className="">
            <Image
              src={"/assets/digital/emily/em_bc.jpg"}
              alt="Emily Murphy previous design"
              quality={100}
              width={1280}
              height={722}
            />
            <p className="text-xs font-normal tracking-wide leading-6">
              Previous Design
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 items-center"></div>
        <div className="">
          <div className="avatar w-36 mb-5">
            <Image
              src={"/assets/digital/cammac.jpg"}
              alt="Cammac logo"
              quality={100}
              width={672}
              height={672}
              className="rounded-full"
            />
          </div>

          <hr className=" border-black border-1 my-1 "></hr>
          <div className="">
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
              CAMMAC - STUDIO COLOC
            </h2>

            <p className="flex text-xs text-left font-medium tracking-widest leading-6 ">
              ALREADY POSITIONED BRAND / LAYOUT / DIGITAL MEDIA
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
              Created promotional designs for digital media in French and
              English.
            </p>
          </div>
          <div className="">
            <Image
              src={"/assets/digital/cammac/cammacFB1.jpg"}
              alt="Cammac promotional"
              quality={100}
              width={1200}
              height={630}
            />
            <p className="text-xs font-normal tracking-wide leading-6">
              French Promotional Bring a Friend
            </p>
          </div>
          <div className="">
            <Image
              src={"/assets/digital/cammac/cammacFB1.jpg"}
              alt="Cammac promotional"
              quality={100}
              width={1200}
              height={630}
            />
            <p className="text-xs font-normal tracking-wide leading-6">
              French Promotional Discount for More than One Week
            </p>
          </div>
          <div className="grid grid-cols-2 gap-10 px-4 py-4 ">
            <div className="">
              <Image
                src={"/assets/digital/cammac/cammac1E.jpg"}
                alt="Cammac promotional"
                quality={100}
                width={882}
                height={1231}
              />
              <p className="text-xs font-normal tracking-wide leading-6">
                English Promotional 5 and More
              </p>
            </div>

            <div className="">
              <Image
                src={"/assets/digital/cammac/cammac1F.jpg"}
                alt="Cammac promotional"
                quality={100}
                width={885}
                height={1220}
              />
              <p className="text-xs font-normal tracking-wide leading-6">
                French Promotional 5 and More
              </p>
            </div>
            <div className="">
              <Image
                src={"/assets/digital/cammac/cammac2E.jpg"}
                alt="Cammac promotional"
                quality={100}
                width={973}
                height={1216}
              />
              <p className="text-xs font-normal tracking-wide leading-6">
                English Promotional Bring a Friend
              </p>
            </div>
            <div className="">
              <Image
                src={"/assets/digital/cammac/cammac2F.jpg"}
                alt="Cammac promotional"
                quality={100}
                width={860}
                height={1210}
              />
              <p className="text-xs font-normal tracking-wide leading-6">
                French Promotional Bring a Friend
              </p>
            </div>
            <div className="">
              <Image
                src={"/assets/digital/cammac/cammac3E.jpg"}
                alt="Cammac promotional"
                quality={100}
                width={922}
                height={1143}
              />
              <p className="text-xs font-normal tracking-wide leading-6">
                English Promotional Discount for More than One Week
              </p>
            </div>
            <div className="">
              <Image
                src={"/assets/digital/cammac/cammac3F.jpg"}
                alt="Cammac promotional"
                quality={100}
                width={922}
                height={1143}
              />
              <p className="text-xs font-normal tracking-wide leading-6">
                French Promotional Discount for More than One Week
              </p>
            </div>
            <div className="">
              <Image
                src={"/assets/digital/cammac/cammac4E.jpg"}
                alt="Cammac promotional"
                quality={100}
                width={888}
                height={1276}
              />
              <p className="text-xs font-normal tracking-wide leading-6">
                English Promotional Share a Room
              </p>
            </div>
            <div className="">
              <Image
                src={"/assets/digital/cammac/cammac4F.jpg"}
                alt="Cammac promotional"
                quality={100}
                width={888}
                height={1276}
              />
              <p className="text-xs font-normal tracking-wide leading-6">
                French Promotional Share a Room
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Digital;
