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

function ThreeD() {
  const porcoImageKeys = Object.keys(imagesPorco);
  const porcoImageSRCs = porcoImageKeys.filter(
    (ik, i) => i < porcoImageKeys.length / 2
  );

  const jadeImageKeys = Object.keys(imagesJade);
  const jadeImageSRCs = jadeImageKeys.filter(
    (ik, i) => i < jadeImageKeys.length / 2
  );

  return (
    <div className=" mb-5">
      <h1 className="text-6xl font-bold pb-5">3D</h1>
      <div className="container mx-auto max-w-2xl">
        <div className="px-4 py-4 ">
          <div className="card-normal ">
            <Image
              src={"/assets/3D/porco/porco3.jpg"}
              alt="Donut"
              quality={100}
              width={500}
              height={500}
            />
          </div>

          <hr className=" border-black border-1 my-1 "></hr>
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

          <p className="flex text-xs text-left tracking-widest leading-5 ">
            3D
          </p>
          <p className="flex text-xs text-left tracking-widest leading-5">
            CHARACTER DESIGN
          </p>
          <p className="flex text-xs text-left tracking-widest leading-5">
            MODEL
          </p>
        </div>

        {porcoImageSRCs.map((imgSrc, i) => (
          <Image
            src={imagesPorco[imgSrc].default.src}
            key={`${imgSrc}-i`}
            alt={imgSrc}
            width={500}
            height={500}
          />
        ))}
        <hr className=" border-black border-1 my-1 "></hr>
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

        <p className="flex text-xs text-left tracking-widest leading-5 ">3D</p>
        <p className="flex text-xs text-left tracking-widest leading-5">
          CHARACTER DESIGN
        </p>
        <p className="flex text-xs text-left tracking-widest leading-5">
          MODEL
        </p>
        {jadeImageSRCs.map((imgSrc, i) => (
          <Image
            src={imagesJade[imgSrc].default.src}
            key={`${imgSrc}-i`}
            alt={imgSrc}
            width={500}
            height={500}
          />
        ))}
      </div>
    </div>
  );
}

export default ThreeD;
