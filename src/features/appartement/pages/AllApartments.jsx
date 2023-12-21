import SideBar from "../../admin/components/SideBar";
import Header from "../../admin/layout/Header";
import AllAppart from "../components/AllAppart";

 export default function AllApartments(){


    return (
        <>
        <div className="grid h-screen min-h-screen w-full overflow-hidden lg:grid-cols-[280px_1fr]">

            <SideBar/>
            <div className="flex flex-col">

                <Header/>
                {/* <main className="flex flex-1 bg-blue-50 flex-col gap-4 p-4 md:gap-8 md:p-6">
                    <div className="flex items-center gap-4">
                        <h1 className="font-semibold text-lg md:text-xl">Dashboard</h1>
                    </div> */}
            {/* <AddAppart/> */}
            <AllAppart/>
            {/* <AllApartmentsC/> */}

            {/* </main>*/}
            </div>
        </div> 
        </>
    )
 }