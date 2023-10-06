import HeaderStore from "./components/header";
import NavBar from "./components/navbar";


function AdminHome(){
    return(
        <main className="min-h-screen bg-slate-300">
            <HeaderStore />
            <NavBar />
        </main>
    )
}

export default AdminHome;