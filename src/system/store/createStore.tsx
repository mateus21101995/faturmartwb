import { Link } from "react-router-dom";


function CreateStore(){
    return(
        <main className="flex flex-col min-h-screen justify-center items-center bg-slate-300">
            <div className="w-[350px] bg-white rounded-lg p-4">
                <h1 className="text-red-500 font-bold justify-center py-4">Criação da minha loja</h1>
                <form action="" className="flex flex-col gap-4">
                   <div className="flex">
                        <input type="text" name="" id="" placeholder="Nome da loja" className="py-1 px-2 outline outline-1 rounded outline-slate-400 w-full" />
                    </div>
                   <div className="flex">
                        <input type="text" name="" id="" placeholder="NIF" className="py-1 px-2 outline outline-1 rounded outline-slate-400 w-full" />
                    </div>
                   <div className="flex">
                        <input type="number" name="" id="" placeholder="Telefone" className="py-1 px-2 outline outline-1 rounded outline-slate-400 w-full" />
                    </div>
                   <div className="flex">
                        <input type="text" name="" id="" placeholder="Endereço" className="py-1 px-2 outline outline-1 rounded outline-slate-400 w-full" />
                    </div>
                    <div className="flex">
                        <input type="email" name="" id="" placeholder="Email" className="py-1 px-2 outline outline-1 rounded outline-slate-400 w-full" />
                    </div>
                    <div className="">
                        <textarea name="" id="" placeholder="Sobre a empresa" className="py-1 px-2 outline outline-1 rounded outline-slate-400 w-full"></textarea>
                    </div>
                    <div className="flex gap-4 text-sm">
                        <div className="">
                            <button type="submit" className="bg-red-500 py-1 px-4 rounded text-white">Criar</button>
                        </div>
                        <div className="">
                            <Link to={"/store/login"} className="text-red-500">Já tenho</Link>
                        </div>
                    </div>
                </form>
            </div>
        </main>
    )
}

export default CreateStore;