import Image from "next/image";
import bag6 from "@/assets/images/bag6.jpg";
import bag7 from "@/assets/images/bag7.jpg";

export default function TrendingProducts() {
  return (
    <div className="relative w-full">
      <div className="w-full px-4 py-2 lg:px-48 lg:py-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-center">
          <div className="flex flex-col items-end text-center">
            <Image
              src={bag6}
              alt="Trending Bags"
              width={450}
              height={400}
              className="rounded-lg w-full max-w-md sm:max-w-lg lg:max-w-[400px] h-auto"
            />
            
            <div className="bg-gray-100 text-left p-4 sm:p-6 w-full max-w-md sm:max-w-lg lg:max-w-[400px] mt-6 sm:mt-8 rounded-none">
              <h1 className="text-lg sm:text-sm lg:text-xl font-semibold tracking-wider leading-snug">
                Be Trendy With Our <br />
                Products
                <span className="ml-5 font-semibold text-xs lg:text-xs text-black border-b-2 border-gray-500">                  
                  New Arrivals
                </span>
              </h1>
            </div>
          </div>
          
          <div className="flex justify-start items-start">
            <Image
              src={bag7}
              alt="Trending Bags"
              width={380}
              height={520}
              className="rounded-lg w-full max-w-sm sm:max-w-md lg:max-w-[400px] h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
