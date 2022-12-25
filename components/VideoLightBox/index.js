import React from "react";
import Image from "next/image";
import ReactImageVideoLightbox from "react-image-video-lightbox";
import LightBoxImg from "../../assets/Hero-section/lightboximg.png";

const data = [
  {
    url: "https://www.youtube.com/embed/ScMzIvxBSi4",
    type: "video",
    altTag: "some video",
  },
  {
    url: "https://sgp1.digitaloceanspaces.com/eventmaker/ed53d187-032e-4477-b42d-7ee8cef365a9#t=0.5",
    type: "video",
    altTag: "some other video",
  },
];

const VideoLightBox = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const handleToggle = () => setIsOpen(!isOpen);

  const renderWorks = () => {
    return data.map((item, index) => (
      <div key={index} style={{ backgroundImage: `url(${item.url})` }} />
    ));
  };

  return (
    <div className="App flex justify-center">
      {renderWorks()}
      <button
        data-aos="zoom-in"
        data-aos-delay="300"
        onClick={() => handleToggle()}
        className="layer-1 h-[170px] w-[170px] bg-[#f1554c61] rounded-full flex items-center justify-center"
      >
        <div className="layer-2 h-[125px] w-[125px] bg-[#f1554c61] rounded-full flex items-center justify-center">
          <div className="layer-3 h-[80px] w-[80px] rounded-full bg-[#F1554C] flex items-center justify-center">
            <Image src={LightBoxImg} alt="LightBoxImg" />
          </div>
        </div>
      </button>
      {isOpen ? (
        <div className={handleToggle ? "z-[999999999]" : ""}>
          <ReactImageVideoLightbox
            data={data}
            startIndex={0}
            showResourceCount={true}
            onCloseCallback={() => handleToggle()}
          />
        </div>
      ) : null}
    </div>
  );
};

export default VideoLightBox;
