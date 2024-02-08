import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <header className="bg-gray-100 py-4">
        <nav className="container mx-auto flex justify-between items-center">
          <Link to={"/"} className="font-bold text-lg ms-2">
            Producto
          </Link>
          <ul className="flex items-center pe-4">
            <li className="mr-6">
              <Link to={"/"} className="text-gray-700 hover:text-gray-900">
                Home
              </Link>
            </li>
            <li>
              <Link
                to={"/checkout"}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Check Out
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
