import React from "react";
import Image from "next/image";

interface TechTagProps {
  alt: string;
  src: string;
}

const TechTag: React.FC<TechTagProps> = ({ alt, src }) => {
  return (
    <span className="inline-flex items-center justify-center px-3 py-3 mt-1 rounded-full text-sm font-medium bg-neutral-100 text-neutral-800 dark:bg-neutral-800 dark:text-neutral-100 border border-neutral-300/50 dark:border-neutral-600/50">
      <span className="sr-only">{alt}</span>
      <Image
        src={src}
        alt={alt}
        width={24}
        height={24}
        className="h-8 w-8 text-gray-400"
      />
    </span>
  );
};

export default TechTag;
