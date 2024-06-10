
import Image from "next/image";
export default function Home() {
  return (
    <main>

      <div className="flex justify-center items-center w-full h-[calc(100vh-4rem)] hero-text">
        <div className="w-1/2  flex flex-col justify-center items-center">
          <div className="text-4xl py-5">
            I <span style={{ color: "gold" }}>am</span>
          </div>
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

        <div className="w-1/2 ">
          <div className="imageWrapper">
            <Image src="/images/AdobePhoto.jpg" width={300} height={300} className="hero-photo"/>
          </div>
        </div>
      </div>
    </main>
  );
}
