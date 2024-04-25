import Footer from "@/common/components/Footer";
import Header from "@/common/components/Header";

export default function DoctorPageLayout({children}) {
    return (
        <div className="flex flex-col items-center justify-between p-2 relative gap-4">
            < Header/> 
                {children}
            < Footer/>
        </div>
    )
}