import Image from "next/image";
import React from "react";

import PodImg from "../public/nathalie-klippert-9II6ibogNLk-unsplash.jpg";
import FlowerPodImg from "../public/cherry-blossoms-4069596_1920.jpg";
import WearImg from "../public/mediamodifier-7cERndkOyDw-unsplash.jpg";
import DryFlowerImg from "../public/jana-niggeloh-XTJo9zH-Wvs-unsplash.jpg";

const Others = () => {
  const OthersItem = [
    { title: "ドライフラワー", src: DryFlowerImg },
    { title: "植木鉢", src: PodImg },
    { title: "花瓶", src: FlowerPodImg },
    { title: "アパレル", src: WearImg },
  ];

  return (
    <div className=" grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 py-10 mx-4 gap-4">
      {OthersItem.map((Other) => {
        return (
          <div className="bg-gray-50 flex justify-center " key={Other}>
            <div className="flex flex-col ">
              <h2 className="pt-2 justify-center flex">{Other.title}</h2>
              <div className="pt-2">
                <Image
                  src={Other.src}
                  alt="ts"
                  width={330}
                  height={220}
                  objectFit="cover"
                  className="rounded-md"
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Others;
