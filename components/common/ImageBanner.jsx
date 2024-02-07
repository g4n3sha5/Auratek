import Image from 'next/image';

export const ImageBanner = ({ text, src = '/img/anastasiya-dalenka-Warszawa.webp' }) => {
  return (
    <div className="imageBanner d-flex align-items-center position-relative text-white justify-content-center pt-5 overflow-hidden text-center w-100 ">
      <Image
        src={src}
        priority={true}
        fill={true}
        alt="Wykonany projekt / budynki w tle"
        className="object-fit-cover"
      />
      <div className="bannerOverlay"></div>
      <h1>{text}</h1>
    </div>
  );
};
