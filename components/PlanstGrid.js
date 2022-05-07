import React from "react";
import Image from "next/image";
// 写真
import plantsMainImg from "../public/plantsmain.jpg";
import plantsubImg1 from "../public/hutuu.jpg";
import plantsubImg2 from "../public/ookime.jpg";
import plantsubImg3 from "../public/turusu2.jpg";
import plantsubImg4 from "../public/taniku2.jpg";

const PlanstGrid = () => {
  return (
    <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-4 m-4">
      {/* 商品グリットメイン */}
      <div className="bg-gray-50 flex justify-center ">
        <div className="flex flex-col ">
          <div className="text-4xl justify-center flex">観葉植物</div>
          <div className="text-base pt-2 flex justify-center text-gray-500">
            翌日配送　5000円以上の購入で送料無料
          </div>
          <div className="py-10">
            <Image
              src={plantsMainImg}
              alt="ts"
              width={660}
              height={440}
              objectFit="cover"
            />
          </div>
        </div>
      </div>
      {/* 商品グリットメイン */}
      {/* 右4マス */}
      <div className=" grid grid-cols-2 gap-4">
        <div className="bg-gray-50 flex justify-center ">
          <div className="flex flex-col ">
            <div className="pt-6  text-xl justify-center flex">普通</div>

            <div className="pt-2">
              <Image
                src={plantsubImg1}
                alt="ts"
                width={330}
                height={220}
                objectFit="cover"
              />
            </div>
          </div>
        </div>{" "}
        <div className="bg-gray-50 flex justify-center ">
          <div className="flex flex-col ">
            <div className="pt-6  text-xl justify-center flex">大きめ</div>

            <div className="pt-2">
              <Image
                src={plantsubImg2}
                alt="ts"
                width={330}
                height={220}
                objectFit="cover"
              />
            </div>
          </div>
        </div>{" "}
        <div className="bg-gray-50 flex justify-center ">
          <div className="flex flex-col ">
            <div className="pt-6  text-xl justify-center flex">
              吊るすタイプ
            </div>

            <div className="pt-2">
              <Image
                src={plantsubImg3}
                alt="ts"
                width={330}
                height={220}
                objectFit="cover"
              />
            </div>
          </div>
        </div>{" "}
        <div className="bg-gray-50 flex justify-center ">
          <div className="flex flex-col ">
            <div className="pt-6  text-xl justify-center flex">多肉植物</div>

            <div className="pt-2">
              <Image
                src={plantsubImg4}
                alt="ts"
                width={330}
                height={220}
                objectFit="cover"
              />
            </div>
          </div>
        </div>
      </div>
      {/* 右4マス */}
    </div>
  );
};

export default PlanstGrid;
