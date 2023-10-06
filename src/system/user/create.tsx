import { Link } from "react-router-dom";
import HeaderStore from "../components/header";
import NavBar from "../components/navbar";
import { TbUsersPlus } from "react-icons/tb";

export default function CreateUser(){
    return(
        <main className="flex min-h-screen bg-slate-300">
            <HeaderStore />
            <NavBar />
            <section className="flex flex-col p-3 gap-3 justify-between fixed left-60 top-14 right-0 bottom-0 bg-slate-200">
                <div className="flex p-3 bg-white rounded font-semibold justify-between items-center">
                    <div className="">
                        <h1>Cliente</h1>
                    </div>
                    <div className="">
                        <Link to={"/store/user"} className="flex gap-1 bg-blue-400 p-2 rounded text-slate-100">
                            <TbUsersPlus />
                            <h1 className="font-semibold text-sm">Ver</h1>
                        </Link>
                    </div>
                </div>
                <div className="flex p-3 bg-white rounded font-semibold justify-between items-center h-full">
                    <div className="">
                        <form action="" method="post">
                            <div className="flex flex-col">
                                <label>Nome do Cliente</label>
                                <input type="text" name="" id="" className="outline outline-1 outline-blue-300 rounded text-sm p-2 font-normal" />
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    )
}