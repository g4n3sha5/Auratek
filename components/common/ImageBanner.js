const ImageBanner = ({ text }) => {
  return (
    <div className="imageBanner d-flex align-items-center justify-content-center pt-5 text-center w-100 h-100">
      <h1>{text}</h1>
    </div>
  );
};
export default ImageBanner;
