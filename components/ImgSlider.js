import Image from "next/image";
import React from "react";
import MainPageImage1 from "/public/karsten-winegeart-4QfPff4QwwI-unsplash.jpg";
import MainPageImage2 from "/public/karsten-winegeart-IxgVlhsE6C0-unsplash.jpg";
import MainPageImage3 from "/public/keagan-henman-xPJYL0l5Ii8-unsplash.jpg";
import MainPageImage4 from "/public/sincerely-media-9ShY-Tq70Mc-unsplash.jpg";

const MainPageImage = [
  MainPageImage1,
  MainPageImage2,
  MainPageImage3,
  MainPageImage4,
];

const ImgSlider = () => {
  return (
    <div className="w-full select-none ">
      <Image
        layout="fixed"
        width={1080}
        height={600}
        src={MainPageImage[2]}
        alt=""
      />
    </div>
  );
};

export default ImgSlider;
