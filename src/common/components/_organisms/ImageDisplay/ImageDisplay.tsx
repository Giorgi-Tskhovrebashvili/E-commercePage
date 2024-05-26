import { SetStateAction, useState } from "react";
import Image1 from "./image1.png";
import Image2 from "./Image2.png";
import Image3 from "./Image3.png";
import Image4 from "./Image4.png";
import { Close, LeftArrow, RightArrow } from "../../_atoms";

const images = [Image1, Image2, Image3, Image4];

const ImageDisplay = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [modalIndex, setModalIndex] = useState(currentIndex);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleThumbnailClick = (index: SetStateAction<number>) => {
    setCurrentIndex(index);
  };

  const handleModalOpenClick = (index: SetStateAction<number>) => {
    setModalIndex(index);
    setIsModalOpen(true);
  };

  const goToPreviousImage = () => {
    setModalIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNextImage = () => {
    setModalIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex flex-col gap-[32px]">
      <img
        className="w-[375px] h-[300px] xl:w-[445px] xl:h-[445px] rounded-[10px]"
        src={images[currentIndex]}
        alt={`Image ${currentIndex + 1}`}
        onClick={() => handleModalOpenClick(currentIndex)}
      />
      <div className="hidden xl:flex xl:gap-[31px]">
        {images.map((image, index) => (
          <img
            key={index}
            className={`cursor-pointer w-[88px] h-[88px] rounded-[10px] ${
              currentIndex === index ? "border-2 border-[#FF7E1B]" : ""
            }`}
            src={image}
            alt={`Thumbnail ${index + 1}`}
            onClick={() => handleThumbnailClick(index)}
          />
        ))}
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
          <div className="p-4 rounded-lg relative">
            <button
              className="absolute top-[-30px] right-[20px]"
              onClick={closeModal}
            >
              <Close fill={"white"} />
            </button>
            <img
              className="w-[550px] h-[550px] rounded-[10px]"
              src={images[modalIndex]}
              alt={`Image ${modalIndex + 1}`}
            />
            <div className="flex gap-[16px] justify-center mt-4">
              <button
                className="absolute top-[250px] left-[-10px]"
                onClick={goToPreviousImage}
              >
                <LeftArrow />
              </button>
              <button
                className="absolute top-[250px] right-[-10px]"
                onClick={goToNextImage}
              >
                <RightArrow />
              </button>
            </div>
            <div className="flex gap-[31px] mt-4 justify-center">
              {images.map((image, index) => (
                <img
                  key={index}
                  className={`cursor-pointer w-[88px] h-[88px] rounded-[10px] ${
                    modalIndex === index ? "border-2 border-[#FF7E1B]" : ""
                  }`}
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  onClick={() => setModalIndex(index)}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageDisplay;
