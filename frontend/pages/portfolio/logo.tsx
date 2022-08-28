import Image from "next/image";

function Logo() {
  return (
    <div>
      <h1 className="text-2xl font-bold">Logo</h1>

      <Image
        src={"/assets/img/bonita.png"}
        alt="Bonita Logo"
        quality={100}
        width={500}
        height={500}
      />
    </div>
  );
}

export default Logo;
