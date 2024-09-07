import Image from "next/image";
import React from "react";

function Table() {
  return (
    <main className="flex flex-col gap-8 text-center py-10">
      <p className="2xl:text-6xl xl:text-4xl md:text-3xl font-bold">
        <span className="text-[#0466C8]">Key </span>
        <span className="text-[#090909]">Competitor</span>
      </p>
      <p className="2xl:text-2xl xl:text-base lg:text-sm md:text-xs font-normal text-[#605D64]">
        Surpassing Competitor with Brand-Focused Customer features
      </p>
      <div className="flex flex-col justify-center items-center">
        <table className="border-2 border-collapse divide-y-2">
          <thead>
            <tr className="2xl:text-2xl md:text-base font-medium text-center text-[#000000]">
              <th></th>
              <th className="p-2">
                <Image
                  className="2xl:w-[180px] 2xl:h-[180px] md:w-[130px] md:h-[90px]"
                  src={"/image/tablelogo.svg"}
                  width={630}
                  height={316}
                  alt="travel"
                ></Image>
              </th>
              <th className="p-2">Concentrix</th>
              <th className="p-2">West Corporation</th>
            </tr>
          </thead>

          <tbody>
            <tr className="text-center bg-[#F9FAFB]">
              <td className="p-3 2xl:text-2xl md:text-base font-semibold text-[#090909]">
                Market share
              </td>
              <td className="p-3 2xl:text-2xl lg:text-base md:text-xs font-normal text-[#605D64]">
                37%
              </td>
              <td className="p-3 2xl:text-2xl lg:text-base md:text-xs font-normal text-[#605D64]">
                19%
              </td>
              <td className="p-3 2xl:text-2xl lg:text-base md:text-xs font-normal text-[#605D64]">
                12%
              </td>
            </tr>

            <tr className="text-center">
              <td className="p-3 2xl:text-2xl md:text-base font-semibold text-[#090909]">
                Global presence
              </td>
              <td className="p-3">
                <Image
                  className="m-auto 2xl:w-[40px] 2xl:h-[40px] md:w-[20px] md:h-[20px]"
                  src={"/image/tick.svg"}
                  width={630}
                  height={316}
                  alt="travel"
                ></Image>
              </td>
              <td className="p-3">
                <Image
                  className="m-auto 2xl:w-[40px] 2xl:h-[40px] md:w-[20px] md:h-[20px]"
                  src={"/image/tick.svg"}
                  width={630}
                  height={316}
                  alt="travel"
                ></Image>
              </td>
              <td className="p-3">
                <Image
                  className="m-auto 2xl:w-[40px] 2xl:h-[40px] md:w-[20px] md:h-[20px]"
                  src={"/image/cross.svg"}
                  width={630}
                  height={316}
                  alt="travel"
                ></Image>
              </td>
            </tr>

            <tr className="text-center bg-[#F9FAFB]">
              <td className="p-3 2xl:text-2xl lg:text-base font-semibold text-[#090909]">
                Increasing sales
              </td>
              <td className="p-3 2xl:text-2xl lg:text-base md:text-xs font-normal text-[#605D64]">
                60%
              </td>
              <td className="p-3 2xl:text-2xl lg:text-base md:text-xs font-normal text-[#605D64]">
                40%
              </td>
              <td className="p-3 2xl:text-2xl lg:text-base md:text-xs font-normal text-[#605D64]">
                30%
              </td>
            </tr>

            <tr className="text-center">
              <td className="p-3 2xl:text-2xl md:text-base font-semibold text-[#090909]">
                Omnichannel support
              </td>
              <td className="p-3">
                <Image
                  className="m-auto 2xl:w-[40px] 2xl:h-[40px] md:w-[20px] md:h-[20px]"
                  src={"/image/tick.svg"}
                  width={630}
                  height={316}
                  alt="travel"
                ></Image>
              </td>
              <td className="p-3">
                <Image
                  className="m-auto 2xl:w-[40px] 2xl:h-[40px] md:w-[20px] md:h-[20px]"
                  src={"/image/cross.svg"}
                  width={630}
                  height={316}
                  alt="travel"
                ></Image>
              </td>
              <td className="p-3">
                <Image
                  className="m-auto 2xl:w-[40px] 2xl:h-[40px] md:w-[20px] md:h-[20px]"
                  src={"/image/cross.svg"}
                  width={630}
                  height={316}
                  alt="travel"
                ></Image>
              </td>
            </tr>

            <tr className="text-center bg-[#F9FAFB]">
              <td className="p-3 2xl:text-2xl md:text-base font-semibold text-[#090909]">
                Customer focus
              </td>
              <td className="p-3 2xl:text-2xl lg:text-base md:text-xs font-normal text-[#605D64]">
                Strong
              </td>
              <td className="p-3  2xl:text-2xl lg:text-base md:text-xs font-normal text-[#605D64]">
                Medium
              </td>
              <td className="p-3 2xl:text-2xl lg:text-base md:text-xs font-normal text-[#605D64]">
                Low
              </td>
            </tr>

            <tr className="text-center">
              <td className="p-3 2xl:text-2xl md:text-base font-semibold text-[#090909]">
                Innovative solutions
              </td>
              <td className="p-3">
                <Image
                  className="m-auto 2xl:w-[40px] 2xl:h-[40px] md:w-[20px] md:h-[20px]"
                  src={"/image/tick.svg"}
                  width={630}
                  height={316}
                  alt="travel"
                ></Image>
              </td>
              <td className="p-3">
                <Image
                  className="m-auto 2xl:w-[40px] 2xl:h-[40px] md:w-[20px] md:h-[20px]"
                  src={"/image/tick.svg"}
                  width={630}
                  height={316}
                  alt="travel"
                ></Image>
              </td>
              <td className="p-3">
                <Image
                  className="m-auto 2xl:w-[40px] 2xl:h-[40px] md:w-[20px] md:h-[20px]"
                  src={"/image/tick.svg"}
                  width={630}
                  height={316}
                  alt="travel"
                ></Image>
              </td>
            </tr>

            <tr className="text-center bg-[#F9FAFB]">
              <td className="p-3 2xl:text-2xl md:text-base font-semibold text-[#090909]">
                Competitive pricing
              </td>
              <td className="p-3 2xl:text-2xl lg:text-base md:text-xs font-normal text-[#605D64]">
                Strong
              </td>
              <td className="p-3 2xl:text-2xl lg:text-base md:text-xs font-normal text-[#605D64]">
                Medium
              </td>
              <td className="p-3 2xl:text-2xl lg:text-base md:text-xs font-normal text-[#605D64]">
                Low
              </td>
            </tr>

            <tr className="text-center">
              <td className="p-3 2xl:text-2xl md:text-base font-semibold text-[#090909]">
                Affordable services
              </td>
              <td className="p-3">
                <Image
                  className="m-auto 2xl:w-[40px] 2xl:h-[40px] md:w-[20px] md:h-[20px]"
                  src={"/image/tick.svg"}
                  width={630}
                  height={316}
                  alt="travel"
                ></Image>
              </td>
              <td className="p-3">
                <Image
                  className="m-auto 2xl:w-[40px] 2xl:h-[40px] md:w-[20px] md:h-[20px]"
                  src={"/image/cross.svg"}
                  width={630}
                  height={316}
                  alt="travel"
                ></Image>
              </td>
              <td className="p-3">
                <Image
                  className="m-auto 2xl:w-[40px] 2xl:h-[40px] md:w-[20px] md:h-[20px]"
                  src={"/image/cross.svg"}
                  width={630}
                  height={316}
                  alt="travel"
                ></Image>
              </td>
            </tr>

            <tr className="text-center bg-[#F9FAFB]">
              <td className="p-3 2xl:text-2xl md:text-base font-semibold text-[#090909]">
                Basic features
              </td>
              <td className="p-3">
                <Image
                  className="m-auto 2xl:w-[40px] 2xl:h-[40px] md:w-[20px] md:h-[20px]"
                  src={"/image/tick.svg"}
                  width={630}
                  height={316}
                  alt="travel"
                ></Image>
              </td>
              <td className="p-3">
                <Image
                  className="m-auto 2xl:w-[40px] 2xl:h-[40px] md:w-[20px] md:h-[20px]"
                  src={"/image/tick.svg"}
                  width={630}
                  height={316}
                  alt="travel"
                ></Image>
              </td>
              <td className="p-3">
                <Image
                  className="m-auto 2xl:w-[40px] 2xl:h-[40px] md:w-[20px] md:h-[20px]"
                  src={"/image/tick.svg"}
                  width={630}
                  height={316}
                  alt="travel"
                ></Image>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
}

export default Table;
