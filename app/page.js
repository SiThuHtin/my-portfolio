import Link from "next/link";

export default function Home() {
  return (
    <main>
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
                href="/projects"
                className="py-5 px-3 hover:bg-gray-700 transition duration-300"
              >
                My Projects
              </Link>
              <Link
                href="/contact"
                className="py-5 px-3 hover:bg-gray-700 transition duration-300"
              >
                Contact Me
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <div className="flex justify-center items-center w-full h-[calc(100vh-4rem)] hero-text">
        <div className="w-1/2  flex flex-col justify-center items-center">
          <div className="text-4xl py-5">I am a</div>
          <ul className="py-4 ">
            <li>Website Developer</li>
            <li>Database Developer</li>
            <li>IT Support</li>
            <li>BI Analyst</li>
          </ul>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Go To My Projects
          </button>
        </div>

        <div className="w-1/2">Hello Test</div>
      </div>
    </main>
  );
}
