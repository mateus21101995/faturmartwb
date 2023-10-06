import { TbUserCog } from "react-icons/tb";
import { Link } from "react-router-dom";

export default function HeaderStore(){
    return(
        <main className="flex fixed right-0 left-60 top-0 h-14 p-3 shadow-md justify-between">
            <div className="">
                <h1>Header</h1>
            </div>
            <div className="bg-blue-300 rounded flex items-center justify-center px-3">
                <Link to={"/store"} className="flex gap-2 items-center text-2xl text-slate-50 font-semibold">
                    <h1 className="text-sm">Usuario</h1><TbUserCog />
                </Link>
            </div>
        </main>
    )
}