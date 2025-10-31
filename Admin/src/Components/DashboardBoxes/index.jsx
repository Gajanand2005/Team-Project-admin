import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { HiGiftTop } from "react-icons/hi2";
import { IoStatsChart } from "react-icons/io5";
import { FcDoughnutChart } from "react-icons/fc";
import { GiBanknote } from "react-icons/gi";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";

const DashboardBoxes = () => {
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Navigation]}
        className="dashboardBoxesSlider"
      >
        <SwiperSlide>
        <div className="box p-5 cursor-pointer hover:bg-[#f1f1f1] rounded-md border-1 border-[rgba(0,0,0,0.2)] flex items-center gap-4">
        <HiGiftTop className="text-[40px] text-[#3872fa]" />
        <div className="info w-[70%] ">
            <h3>New Orders</h3>
            <b>$1,390</b>
        </div>
        <IoStatsChart className="text-[50px] text-[#3872fa]" />
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="box p-5 cursor-pointer hover:bg-[#f1f1f1] rounded-md border-1 border-[rgba(0,0,0,0.2)] flex items-center gap-4">
        <FcDoughnutChart  className="text-[40px] text-[#10b981]" />
        <div className="info w-[70%] ">
            <h3>Sales</h3>
            <b>$57,890 </b>
        </div>
        <IoStatsChart className="text-[50px] text-[#10b981]" />
        </div>
        </SwiperSlide>
         <SwiperSlide>
        <div className="box p-5 cursor-pointer hover:bg-[#f1f1f1] rounded-md border-1 border-[rgba(0,0,0,0.2)] flex items-center gap-4">
        <GiBanknote  className="text-[50px] text-[#7928ca]" />
        <div className="info w-[70%] ">
            <h3>Revenue</h3>
            <b>$12,390</b>
        </div>
        <IoStatsChart className="text-[50px] text-[#7928ca]" />
        </div>
        </SwiperSlide>
         <SwiperSlide>
        <div className="box p-5 cursor-pointer hover:bg-[#f1f1f1] rounded-md border-1 border-[rgba(0,0,0,0.2)] flex items-center gap-4">
        <MdOutlineProductionQuantityLimits className="text-[40px] text-[#3872fa]" />
        <div className="info w-[70%] ">
            <h3>Total Products</h3>
            <b>1,390</b>
        </div>
        <IoStatsChart className="text-[50px] text-[#312be1d8]" />
        </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default DashboardBoxes;
