import { Link } from "react-router-dom";
import HeaderStore from "../components/header";
import NavBar from "../components/navbar";
import { TbUsersPlus } from "react-icons/tb";

export default function User(){
    return(
        <main className="flex min-h-screen bg-slate-300">
            <HeaderStore />
            <NavBar />
            <section className="flex flex-col p-3 gap-3 justify-between fixed left-60 top-14 right-0 bottom-0 bg-slate-200">
                <div className="flex p-3 bg-white rounded font-semibold justify-between items-center">
                    <div className="">
                        <h1>Usuarios</h1>
                    </div>
                    <div className="">
                        <Link to={"/store/user/create"} className="flex gap-1 bg-blue-400 p-2 rounded text-slate-100">
                            <TbUsersPlus />
                            <h1 className="font-semibold text-sm">Novo</h1>
                        </Link>
                    </div>
                </div>
                <div className="flex p-3 bg-white rounded font-semibold justify-between items-center h-full">
                    <h1>Tabelas</h1>
                </div>
            </section>
        </main>
    )
}