import Image from 'next/image';
export const ImageBanner = ({ text }) => {
  return (
    <div className="imageBanner d-flex align-items-center justify-content-center pt-5 overflow-hidden text-center w-100 ">
      {/* <Image src="/img/posnaniafyrtel.jpg" layout="fill" className=" object-fit-cover" />
      <div className="bannerOverlay"></div> */}
      <h1>{text}</h1>
    </div>
  );
};
