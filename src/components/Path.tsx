import Image from "next/image";
import progress from "../assets/tagcoders_process.png"

export default function Path() {
    return (
      <div id ="path" className="flex justify-center bg-wave-path bg-no-repeat bg-cover items-center m-4 rounded-xl">
      <Image src={progress} alt="path" className="max-w-full h-auto"/>
      </div>
    );
  }
  