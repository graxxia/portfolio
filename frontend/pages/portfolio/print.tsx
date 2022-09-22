import Image from "next/image";

function Print() {
  return (
    <div className="grid mb-5 ">
      <h1 className="text-6xl font-bold uppercase py-10">PRINT</h1>
      <div className="py-20 bg-gradient-to-r from-amber-100 to-blue-100 mb-10">
        <div className="avatar place-self-center w-30 h-30">
          <Image
            src={"/assets/img/bonita0.jpg"}
            alt="Bonita Logo"
            quality={100}
            width={300}
            height={300}
            className="rounded-full "
          />
        </div>
      </div>
      <div className="justify-self-center max-w-md m-5">
        <h2 className="text-3xl uppercase leading-10">LA BONITA</h2>

        <p className="uppercase font-medium tracking-widest bg-gradient-to-r from-amber-100 to-blue-100 my-5 p-2">
          GRAPHIC DESIGN / PLANNING / OBJECTIVES
        </p>

        <p className="flex font-medium uppercase tracking-widest underline underline-offset-4 decoration-2 my-4">
          TOOLS
        </p>
        <p className="text-left tracking-wide my-4">Illustrator / Photoshop</p>

        <p className="flex font-medium uppercase tracking-widest underline underline-offset-4 decoration-2 my-4">
          PROJECT
        </p>
        <p className="text-left tracking-wide my-4">
          NOVEMBER 2020 / Redesigned new brand Identity.
        </p>
      </div>
      <div className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-2 desktop:grid-cols-2 gap-10 px-5 py-20 place-items-center max-w-7xl place-self-center ">
        <div className="">
          <Image
            src={"/assets/print/bonita/bc2.jpg"}
            alt="Bonita Business Card"
            quality={100}
            width={301}
            height={526}
          />
          <p className="tracking-wide my-10">Business Card, Front </p>
        </div>{" "}
        <div className="">
          <Image
            src={"/assets/print/bonita/bc1.jpg"}
            alt="Bonita Business Card"
            quality={100}
            width={301}
            height={526}
          />
          <p className="tracking-wide my-10">Business Card, Back </p>
        </div>
        <div className="">
          <Image
            src={"/assets/print/bonita/bonita1.jpg"}
            alt="Bonita Menu"
            quality={100}
            width={1262}
            height={1280}
          />
          <p className="tracking-wide my-10">Food Menu Front</p>
        </div>
        <div className="">
          <Image
            src={"/assets/print/bonita/bonita2.jpg"}
            alt="Bonita Menu"
            quality={100}
            width={1262}
            height={1280}
          />
          <p className="tracking-wide my-10">Food Menu Inside</p>
        </div>
      </div>

      <div className="">
        <Image
          src={"/assets/print/bonita/b-salsas.jpg"}
          alt="Bonita Menu"
          quality={100}
          width={634}
          height={854}
        />
        <p className="tracking-wide my-10">Salsa Label</p>
      </div>
      <div className="">
        <Image
          src={"/assets/print/bonita/bonita3.jpg"}
          alt="Bonita Menu"
          quality={100}
          width={1280}
          height={542}
        />
        <p className="tracking-wide my-10">Drink Menu</p>
      </div>
      <div className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-2 desktop:grid-cols-2 gap-10 px-5 py-20 place-items-center max-w-7xl place-self-center ">
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
      </div>
      <p className="tracking-wide mb-10">Individual Beverage Designs</p>
      <div className="my-10 px-5">
        <Image
          src={"/assets/print/bonita/bonitaOptions.jpg"}
          alt="Bonita Logo Options"
          quality={100}
          width={1611}
          height={580}
        />
        <p className="tracking-wide my-10">Logo Options</p>
      </div>
      <div className="my-10 px-5">
        <Image
          src={"/assets/print/bonita/bonitamodified.jpg"}
          alt="Bonita Modified Details"
          quality={100}
          width={1184}
          height={624}
        />
        <p className="tracking-wide my-10">Modified Details</p>
      </div>
      <div className="my-10 px-5">
        <Image
          src={"/assets/print/bonita/b-idea.jpg"}
          alt="Bonita nitial Idea"
          quality={100}
          width={576}
          height={378}
        />
        <p className="tracking-wide my-10">Initial Idea</p>
      </div>
      <div className="my-10 px-5">
        <Image
          src={"/assets/print/bonita/before1.jpg"}
          alt="Bonita nitial Idea"
          quality={100}
          width={640}
          height={168}
        />
        <p className="tracking-wide my-10">Previous Design</p>
      </div>
    </div>
  );
}

export default Print;
