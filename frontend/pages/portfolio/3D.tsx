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
    <div className="grid mb-5 ">
      <h1 className="text-6xl font-bold uppercase py-10">3D</h1>
      <div className="py-20 bg-gradient-to-r from-teal-100 to-yellow-100 mb-10">
        <div className="avatar place-self-center w-30 h-30">
          <Image
            src={"/assets/3D/jade.jpg"}
            alt="Jade face"
            quality={100}
            width={300}
            height={300}
            className="rounded-full"
          />
        </div>
      </div>

      <div className="justify-self-center max-w-md m-5">
        <h2 className="text-3xl uppercase leading-10">
          GAME CHARACTER &quot;JADE&quot;
        </h2>

        <p className="uppercase font-medium tracking-widest bg-gradient-to-r from-teal-100 to-yellow-100 my-5 py-2">
          3D / CHARACTER DESIGN / MODEL / MAP / RIG
        </p>

        <p className="flex font-medium uppercase tracking-widest underline underline-offset-4 decoration-2 my-4">
          TOOLS
        </p>
        <p className="text-left tracking-wide my-4">Autodesk Maya, Unity</p>

        <p className="flex font-medium uppercase tracking-widest underline underline-offset-4 decoration-2 my-4">
          PROJECT
        </p>
        <p className="text-left tracking-wide my-4">
          2022 / Created a game model in low poly style. Simplified anatomy,
          used UVs and texture and adding some animations for use in Unity game.
        </p>
      </div>
      <div className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-2 desktop:grid-cols-2 gap-10 px-5 py-20 place-items-center  place-self-center ">
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
      <hr className=" border-black border-1 mb-28 " />
      <div className="py-20 bg-gradient-to-r from-teal-100 to-fuchsia-100 mb-10">
        <div className="avatar place-self-center w-30 h-30">
          <Image
            src={"/assets/3D/porco.jpg"}
            alt="Porco face"
            quality={100}
            width={300}
            height={300}
            className="rounded-full"
          />
        </div>
      </div>

      <div className="justify-self-center max-w-md m-5">
        <h2 className="text-3xl uppercase leading-10">
          GAME CHARACTER &quot;PORCO&quot;
        </h2>

        <p className=" uppercase font-medium tracking-widest bg-gradient-to-r from-teal-100 to-fuchsia-100 my-5 py-2">
          3D / CHARACTER DESIGN / MODEL / MAP / RIG
        </p>

        <p className="flex font-medium uppercase tracking-widest underline underline-offset-4 decoration-2 my-4">
          TOOLS
        </p>
        <p className="text-left tracking-wide my-4">Autodesk Maya, Unity</p>

        <p className="flex font-medium uppercase tracking-widest underline underline-offset-4 decoration-2 my-4">
          PROJECT
        </p>
        <p className="text-left tracking-wide my-4">
          2022 / Low poly style model. Porco is designed as a villain character
          for a pirate game theme.
        </p>
      </div>
      <div className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-2 desktop:grid-cols-2 gap-10 px-5 py-20 place-items-center  place-self-center ">
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
      <hr className=" border-black border-1 mb-28 " />
      <div className="py-20 bg-gradient-to-r from-cyan-100 to-rose-100 mb-10">
        <div className="avatar place-self-center w-30 h-30">
          <Image
            src={"/assets/3D/donut.png"}
            alt="Donut"
            quality={100}
            width={300}
            height={300}
            className="rounded-full"
          />
        </div>
      </div>

      <div className="justify-self-center max-w-md m-5">
        <h2 className="text-3xl uppercase leading-10">&quot;THE DONUT&quot;</h2>

        <p className="tuppercase font-medium tracking-widest bg-gradient-to-r from-cyan-100 to-rose-100 my-5 py-2">
          3D / MODEL
        </p>
        <p className="flex font-medium uppercase tracking-widest underline underline-offset-4 decoration-2 my-4">
          TOOLS
        </p>
        <p className="text-left tracking-wide my-4"> Blender</p>
        <p className="flex font-medium uppercase tracking-widest underline underline-offset-4 decoration-2 my-4">
          PROJECT
        </p>
        <p className="text-left tracking-wide my-4">
          2021 / Fun YouTube tutorial project that convinced me to start the 3D
          model path.
        </p>
      </div>

      <div className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-2 desktop:grid-cols-2 gap-10 px-5 py-20 place-items-center  place-self-center ">
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
  );
}

export default ThreeD;
