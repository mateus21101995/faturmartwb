import ReactSelect from "react-select";
import {Link} from "react-router-dom";
  

function Login(){

    const options = [
        { value: "TFT Tecnology", label: "TFT Tecnology" },
        { value: "rock", label: "Rock" },
        { value: "jazz", label: "Jazz" },
        { value: "orchestra", label: "Orchestra" },
      ];

    return(
        <main className="flex flex-col min-h-screen justify-center items-center bg-slate-300">
            <div className="w-[350px] bg-white rounded-lg p-4">
                <h1 className="text-red-500 font-bold justify-center py-4">Login</h1>
                <form action="" className="flex flex-col gap-4">
                    <div className="">
                        <ReactSelect options={options} />
                    </div>
                    <div className="flex">
                        <input type="email" name="" id="" placeholder="Digite o seu email" className="py-1 px-2 outline outline-1 rounded outline-slate-400 w-full" />
                    </div>
                    <div className="">
                        <input type="password" name="" id="" placeholder="Digite a sua senha" className="py-1 px-2 outline outline-1 rounded outline-slate-400 w-full" />
                    </div>
                    <div className="flex gap-4 text-sm">
                        <div className="">
                            <button type="submit" className="bg-red-500 py-1 px-4 rounded text-white">Logar</button>
                        </div>
                        <div className="">
                            <Link to={"/store/createstore"} className="text-red-500">Criar uma Loja</Link>
                        </div>
                    </div>
                </form>
            </div>
        </main>
    )
}

export default Login;