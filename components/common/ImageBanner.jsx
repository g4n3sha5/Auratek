import Image from 'next/image';

export const ImageBanner = ({ text, src = '/img/anastasiya-dalenka-Warszawa.jpg' }) => {
  return (
    <div className="imageBanner d-flex align-items-center position-relative text-white justify-content-center pt-5 overflow-hidden text-center w-100 ">
      <Image src={src} layout="fill" className="object-fit-cover" />
      <div className="bannerOverlay"></div>
      <h1>{text}</h1>
    </div>
  );
};
