import Image from "next/image";
import data from "../data.json";

function LinkCard({ 
  title, 
  href, 
  image 
}) {
  return (
    <a href={href} className="flex items-center w-full p-1 rounded-md shadow-lg hover:scale-105 transition-all max-w-3xl bg-gray-100 mb-3">
      <div className="flex text-center w-full">
        <div className="w-10 h-10">
          { image && (
            <Image
              alt={title}
              src={image}
              width={40}
              height={40}
              className="rounded-sm"
            />
          )}
        </div>
        <h2 className="font-semibold w-full flex justify-center items-center -ml-10 text-gray-700">
          {title}
        </h2>
      </div>
    </a>
  )
}

export default function Home() {
  return (
    <div className="flex items-center flex-col mx-auto w-full justify-center mt-16 px-8">
      <Image
        alt={data.name}
        src={data.avatar}
        width={96}
        height={96}
        className="rounded-full"
      />
      <h1 className="font-bold mt-4 text-xl mb-8">
        {data.name}
      </h1>
      {data.links.map((link) => (
        <LinkCard key={link.href} {...link} />
      ))}
    </div>
  );
}