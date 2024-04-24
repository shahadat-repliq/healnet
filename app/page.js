import DoctorList from "@/common/components/DoctorList";
import HomePage from "@/common/components/HomePage";
import Image from "next/image";

export default function Home() {
    return (
        <main className="flex flex-col items-center justify-between p-2 relative">
          {/* <div className='absolute z-0 inset-0 h-screen'>
            <Image
                className='opacity-50'
                priority="priority"
                src={"/assets/bg.svg"}
                objectFit="cover"
                alt=""/>
            </div> */}
            <HomePage/>
        </main>
    );
}
