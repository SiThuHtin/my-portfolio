import Link from "next/link";
const Nav = () => {
  return (
    <nav className="bg-black text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-4">
            {/* Logo or branding can go here */}
            <div>
              <a href="#" className="flex items-center py-5 px-2 text-white">
                <span className="font-bold">Sithu Htin</span>
              </a>
            </div>
            {/* Primary Navbar items */}
          </div>
          {/* Secondary Navbar items, add if needed */}

          {/* Future links or buttons can be added here */}
          <div className="flex items-center space-x-1">
            <Link
              href="/"
              className="py-5 px-3 hover:bg-gray-700 transition duration-300"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="py-5 px-3 hover:bg-gray-700 transition duration-300"
            >
              About Me
            </Link>
            <Link
              href="/my-projects"
              className="py-5 px-3 hover:bg-gray-700 transition duration-300"
            >
              My Projects
            </Link>
            <Link
              href="/contact-me"
              className="py-5 px-3 hover:bg-gray-700 transition duration-300"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
