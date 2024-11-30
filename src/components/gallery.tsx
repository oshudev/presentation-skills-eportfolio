import { PropsWithChildren } from 'react';
import Image from 'next/image';

const Gallery = ({ children }: PropsWithChildren) => {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {children}
    </div>
  );
};

const GalleryGroup = ({ children }: PropsWithChildren) => {
  return <div className="flex flex-col gap-5">{children}</div>;
};

interface GalleryImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}

const GalleryImage = ({ src, alt, width, height }: GalleryImageProps) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className="border border-gray-800"
    />
  );
};

const GalleryTitle = ({ children }: PropsWithChildren) => {
  return <h3 className="text-lg tracking-wide">{children}</h3>;
};

export { Gallery, GalleryGroup, GalleryImage, GalleryTitle };
