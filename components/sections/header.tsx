import Image from "next/image";

export default function Header() {
  return (
    <div className="mb-8">
      <div className="flex items-center justify-between flex-col sm:flex-row">
        <div className="flex items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl mb-2">
              Angel Chavez
            </h1>
            <p className="text-lg">
              Software Developer with a strong focus on user experience, design
              and quality code.
            </p>
          </div>
          <Image
            src="/assets/photo.jpg"
            alt="Angel Chavez"
            className="w-20 h-20 sm:w-24 sm:h-24 xl:w-32 xl:h-32 rounded-full object-cover border border-gray-300"
            priority
            width={800}
            height={800}
          />
        </div>
      </div>
    </div>
  );
}
