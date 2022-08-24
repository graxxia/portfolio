import { importAll } from "../../util/util";

require.context("../../public/assets/3D", false, /\.(png|jpe?g|svg|gif)$/);

const images = importAll(
  require.context("../../public/assets/3d", false, /\.(png|jpe?g|svg|gif)$/)
);

function ThreeD() {
  console.log(Object.keys(images));
  const imageKeys = Object.keys(images);
  const imageSRCs = imageKeys.filter((ik, i) => i < imageKeys.length / 2);

  return (
    <div>
      <div>
        <h1 className="text-4xl font-bold p-5">3D</h1>
      </div>

      {imageSRCs.map((imgSrc) => (
        <img src={images[imgSrc].default.src} />
      ))}
    </div>
  );
}

export default ThreeD;
