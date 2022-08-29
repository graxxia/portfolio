import Image from "next/image";
import { importAll } from "../../util/util";

require.context("../../public/assets/3D", false, /\.(png|jpe?g|svg|gif)$/);

const imagesPorco = importAll(
  require.context(
    "../../public/assets/3D/porco",
    false,
    /\.(png|jpe?g|svg|gif)$/
  )
);

const imagesJade = importAll(
  require.context(
    "../../public/assets/3D/jade",
    false,
    /\.(png|jpe?g|svg|gif)$/
  )
);

const imagesDonut = importAll(
  require.context(
    "../../public/assets/3D/donut",
    false,
    /\.(png|jpe?g|svg|gif)$/
  )
);

function ThreeD() {
  const porcoImageKeys = Object.keys(imagesPorco);
  const porcoImageSRCs = porcoImageKeys.filter(
    (ik, i) => i < porcoImageKeys.length / 2
  );

  const jadeImageKeys = Object.keys(imagesJade);
  const jadeImageSRCs = jadeImageKeys.filter(
    (ik, i) => i < jadeImageKeys.length / 2
  );

  const donutImageKeys = Object.keys(imagesDonut);
  const donutImageSRCs = donutImageKeys.filter(
    (ik, i) => i < donutImageKeys.length / 2
  );

  return (
    <div className=" mb-5">
      <h1 className="text-6xl font-bold pb-5">3D</h1>
      <div className="container mx-auto max-w-2xl">
        <div className="px-4 py-4 ">
          <div className="avatar w-36 mb-5">
            <Image
              src={"/assets/3D/jade.jpg"}
              alt="Jade face"
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
              GAME CHARACTER &quot;JADE&quot;
            </h2>

            <p className="flex text-xs text-left font-medium tracking-widest leading-6 ">
              3D / CHARACTER DESIGN / MODEL / MAP / RIG
            </p>

            <p className="flex text-xs font-medium tracking-widest leading-6 underline underline-offset-4 decoration-2 decoration-primary-focus">
              TOOLS
            </p>
            <p className="text-xs font-normal text-left tracking-wide leading-6">
              Autodesk Maya, Unity
            </p>

            <p className="flex text-xs text-left font-medium tracking-widest leading-6 underline underline-offset-4 decoration-2 decoration-primary-focus">
              PROYECT
            </p>
            <p className="text-xs font-normal text-left tracking-wide leading-6">
              Created a game model in low poly style. Simplified anatomy, used
              UVs and texture and adding some animations for use in Unity game
            </p>
          </div>
          <div className="grid gap-6 my-14">
            {jadeImageSRCs.map((imgSrc, i) => (
              <Image
                src={imagesJade[imgSrc].default.src}
                key={`${imgSrc}-i`}
                alt={imgSrc}
                width={672}
                height={672}
                className=""
              />
            ))}
          </div>

          <div className="avatar w-36 mb-5">
            <Image
              src={"/assets/3D/porco.jpg"}
              alt="Porco face"
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
              GAME CHARACTER &quot;PORCO&quot;
            </h2>

            <p className="flex text-xs text-left font-medium tracking-widest leading-6 ">
              3D / CHARACTER DESIGN / MODEL / MAP / RIG
            </p>

            <p className="flex text-xs font-medium tracking-widest leading-6 underline underline-offset-4 decoration-2 decoration-primary-focus">
              TOOLS
            </p>
            <p className="text-xs font-normal text-left tracking-wide leading-6">
              Autodesk Maya, Unity
            </p>

            <p className="flex text-xs text-left font-medium tracking-widest leading-6 underline underline-offset-4 decoration-2 decoration-primary-focus">
              PROYECT
            </p>
            <p className="text-xs font-normal text-left tracking-wide leading-6">
              Low poly style model. Porco is designed as a villian character for
              a pirate game theme
            </p>
          </div>
          <div className="grid gap-6 my-14">
            {porcoImageSRCs.map((imgSrc, i) => (
              <Image
                src={imagesPorco[imgSrc].default.src}
                key={`${imgSrc}-i`}
                alt={imgSrc}
                width={672}
                height={672}
                className=""
              />
            ))}
          </div>

          <div className="avatar w-36 mb-5">
            <Image
              src={"/assets/3d/donut.png"}
              alt="Jade face"
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
              &quot;THE DONUT&quot;
            </h2>

            <p className="flex text-xs text-left font-medium tracking-widest leading-6 ">
              3D / MODEL
            </p>

            <p className="flex text-xs font-medium tracking-widest leading-6 underline underline-offset-4 decoration-2 decoration-primary-focus">
              TOOLS
            </p>
            <p className="text-xs font-normal text-left tracking-wide leading-6">
              Blender
            </p>

            <p className="flex text-xs text-left font-medium tracking-widest leading-6 underline underline-offset-4 decoration-2 decoration-primary-focus">
              PROYECT
            </p>
            <p className="text-xs font-normal text-left tracking-wide leading-6">
              Fun YouTube tutorial proyect that convinced me to start the 3D
              model path
            </p>
          </div>
          <div className="grid gap-6 my-14">
            {donutImageSRCs.map((imgSrc, i) => (
              <Image
                src={imagesDonut[imgSrc].default.src}
                key={`${imgSrc}-i`}
                alt={imgSrc}
                width={672}
                height={672}
                className=""
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThreeD;
