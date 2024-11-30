import Image from "next/image"
import bag4 from "@/assets/images/bag4.jpg"
import bag5 from "@/assets/images/bag5.jpg"

export default function BagsCollection() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 items-start justify-center lg:px-48 gap-0">
            <div className="flex flex-col justify-end">
                <Image
                    src={bag5}
                    alt="Leather bag"
                    width={450}
                    height={480}
                    className="rounded-lg"
                    priority
                />
                <h1 className="text-left text-xl lg:text-3xl ml-3 font-semibold mt-3 tracking-wide">
                    Leather bag
                </h1>
            </div>

            <div className="flex flex-col justify-start mt-0 lg:mt-64">
                <Image
                    src={bag4}
                    alt="Stylish backpack"
                    width={450}
                    height={480}
                    className="rounded-lg"
                    priority
                />
                <h1 className="text-right text-xl lg:text-3xl font-semibold mt-3 tracking-wide mr-10">
                    Stylish backpack
                </h1>
            </div>
        </div>
    )
}
