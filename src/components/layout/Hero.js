import Image from "next/image";
import Right from "../icons/Right.js";
export default function Hero() {
    return (
        <section className="hero mt-4">
            <div className="py-12"><h1 className="text-4xl font-semibold"> Finish the food <span className="text-primary">story</span> </h1>
                <p className="my-6 text-gray-500 text-sm">There is some story that need to finish.now its become necessity to finish the food </p>
                <div className="flex gap-4 text-sm">
                    <button className="bg-primary uppercase text-white px-4 py-2 items-center rounded-full flex gap-2">Order Now
                        <Right/>
                    </button>
                    <button className="flex gap-2 py-3 text-gray-600 items-center font-semibold">Our story <Right/></button>
                </div>
            </div>
            <div className="relative">  <Image src={'/pizza.png'} layout={"fill"} objectFit={"contain"} alt={'food'} /></div>
        </section>
    );
}