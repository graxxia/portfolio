import { motion } from "framer-motion";

function NavMenu() {
  return (
    <div className="navbar mb-2  ">
      <div className="flex justify-center  flex-1 px-2">
        <div className="flex items-stretch">
          <a href="/" className="btn btn-ghost font-thin tracking-wider">
            Home
          </a>
          <a href="/about" className="btn btn-ghost font-thin tracking-wider">
            About
          </a>

          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              className="btn btn-ghost font-thin tracking-wider"
            >
              Work
            </div>

            <ul
              tabIndex={1}
              className="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52 "
            >
              <li>
                <a href="/portfolio/" className="btn-ghost  ">
                  Graphic
                </a>
              </li>
              <li>
                <a href="/portfolio/3D">3D</a>
              </li>
              <li>
                <a href="/portfolio/pixelart">Pixel Art</a>
              </li>
            </ul>
          </div>

          <a href="/contact" className="btn btn-ghost font-thin tracking-wider">
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}
export default NavMenu;
