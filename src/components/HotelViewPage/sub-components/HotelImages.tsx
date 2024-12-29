import React from "react";
import Image from "next/image";
import ImageGalleryDialog from "@/components/ImageSlider/ImageGalleryDialog";

const HotelImages: React.FC<{ images: string[]; hotelName: string }> = ({
  images,
  hotelName,
}) => {
  const visibleImages = images?.slice(0, 4);
  const imagesLength = images?.length || 0;
  const remainingImagesCount = Math.max(0, imagesLength - 4);
  return (
    <div className="grid grid-cols-2 gap-2">
      {visibleImages?.map((image, index) => (
        <div key={index} className="relative aspect-square">
          {index === 3 && remainingImagesCount > 0 ? (
            <ImageGalleryDialog
              images={images}
              triggerContent={
                <div className="relative aspect-square cursor-pointer">
                  <Image
                    src={image}
                    alt={`${hotelName} - Image ${index + 1}`}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                  <div
                    className="absolute inset-0 bg-black bg-opacity-50 border-[2px] border-slate-800 
                          flex items-center justify-center rounded-lg"
                  >
                    <span className="text-white text-2xl font-bold">
                      +{remainingImagesCount}
                    </span>
                  </div>
                </div>
              }
            />
          ) : (
            <Image
              src={image}
              alt={`${hotelName} - Image ${index + 1}`}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default HotelImages;
