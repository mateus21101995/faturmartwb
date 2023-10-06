import { Link } from "react-router-dom";
import { TbAlignBoxBottomLeft, TbBasket, TbBellRinging, TbBuildingStore, TbLogout2, TbSettings, TbShoppingBag, TbShoppingCart, TbTruckDelivery, TbUser, TbUsers } from "react-icons/tb";
import { FiFileText } from "react-icons/fi";

export default function NavBar(){
    return(
        <main className="bg-white fixed top-0 left-0 bottom-0 w-60 p-3 flex flex-col gap-3 justify-between">
            <div className="">
                <div className="flex flex-col gap-2 outline outline-2 outline-blue-300 rounded-md ">
                    <div className="flex font-bold h-16 justify-center items-center">
                        Logo da Loja
                    </div>
                    <div className="font-bold text-blue-400 justify-center items-center text-center text-sm">Nome da loja</div>
                </div>

                <div className="flex flex-col text-slate-700 font-medium">
                <div className="flex flex-col">
                        <Link to={"/store"} className="hover:bg-blue-100 text-3xl items-center hover:text-slate-900 p-2 rounded flex">
                            <TbBuildingStore /> 
                            <h1 className="px-2 font-bold text-black text-lg">DashBoard</h1>
                        </Link>
                </div>
                <div className="flex flex-col">
                        <Link to={"/store"} className="hover:bg-blue-100 text-3xl items-center hover:text-slate-900 p-2 rounded flex">
                            <TbShoppingCart />
                            <h1 className="px-2 text-base">Venda</h1>
                        </Link>
                </div>
                <div className="flex flex-col">
                        <Link to={"/store/user"} className="hover:bg-blue-100 text-3xl items-center hover:text-slate-900 p-2 rounded flex">
                            <TbUsers />
                            <h1 className="px-2 text-base">Cliente</h1>
                        </Link>
                </div>
                <div className="flex flex-col">
                        <Link to={"/store"} className="hover:bg-blue-100 text-3xl items-center hover:text-slate-900 p-2 rounded flex">
                            <TbBasket />
                            <h1 className="px-2 text-base">Caixa</h1>
                        </Link>
                </div>
                <div className="flex flex-col">
                        <Link to={"/store"} className="hover:bg-blue-100 text-3xl items-center hover:text-slate-900 p-2 rounded flex">
                            <TbShoppingBag />
                            <h1 className="px-2 text-base">Produtos</h1>
                        </Link>
                </div>
                <div className="flex flex-col">
                        <Link to={"/store"} className="hover:bg-blue-100 text-3xl items-center hover:text-slate-900 p-2 rounded flex">
                            <TbTruckDelivery />
                            <h1 className="px-2 text-base">Fornecedor</h1>
                        </Link>
                </div>
                <div className="flex flex-col">
                        <Link to={"/store"} className="hover:bg-blue-100 text-3xl items-center hover:text-slate-900 p-2 rounded flex">
                            <TbAlignBoxBottomLeft />
                            <h1 className="px-2 text-base">Relatorio</h1>
                        </Link>
                </div>
                <div className="flex flex-col">
                        <Link to={"/store"} className="hover:bg-blue-100 text-3xl items-center hover:text-slate-900 p-2 rounded flex">
                            <FiFileText />
                            <h1 className="px-2 text-base">Factura</h1>
                        </Link>
                </div>
                <div className="flex flex-col">
                        <Link to={"/store"} className="hover:bg-blue-100 text-3xl items-center hover:text-slate-900 p-2 rounded flex">
                            <TbUser />
                            <h1 className="px-2 text-base">Usuario</h1>
                        </Link>
                </div>
                    
                </div>
            </div>


            <div className="flex justify-center gap-3 text-xl">
                <Link to={"/store/login"} className="flex gap-1 items-center hover:text-blue-400">
                    <TbLogout2 /> <h1 className="text-sm font-bold"></h1>
                </Link>
                <Link to={"/store/login"} className="flex gap-1 items-center hover:text-blue-400">
                    <TbBellRinging /> <h1 className="text-sm font-bold"></h1>
                </Link>
                <Link to={"/store/login"} className="flex gap-1 items-center hover:text-blue-400">
                    <TbSettings /><h1 className="text-sm font-bold"></h1>
                </Link>
            </div>
        </main>
    )
}