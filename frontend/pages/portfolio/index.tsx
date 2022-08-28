import Image from "next/image";

function Portfolio() {
  return (
    <div>
      <h1 className="text-2xl font-bold">Work Portfolio</h1>

      <div className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-2 desktop:grid-cols-2">
        <Image
          src="/vercel.svg"
          alt="Vercel Logo"
          className="h-4 ml-2"
          height={25}
          width={25}
        />
        <Image
          src="/vercel.svg"
          alt="Vercel Logo"
          className="h-4 ml-2"
          height={25}
          width={25}
        />

        <div className="card bordered">
          <figure>
            <Image
              src={"/assets/img/cat600px.png"}
              alt="cat picture"
              height={500}
              width={500}
            />
          </figure>
        </div>
        <div className="card bordered ">
          <figure>
            <Image
              src={"/assets/3D/Donut.png"}
              alt="cat picture"
              height={500}
              width={500}
            />
          </figure>
          <figure>
            <Image
              src={"/assets/3D/Donut.png"}
              alt="cat picture"
              height={500}
              width={500}
            />
          </figure>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
