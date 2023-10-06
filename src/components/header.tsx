

function Header(){
    return(
        <main className="flex flex-col">
            <div className="flex justify-between  p-2">
                <div className="">Acesso Restrito</div>
            </div>
            <div className="flex">
                <div className="container m-auto grid grid-cols-2">
                    <div className="">
                        <h1>Logo</h1>
                    </div>
                    <div className="flex gap-3">
                        <h1>Home</h1>
                        <h1>Home</h1>
                        <h1>Home</h1>
                        <h1>Home</h1>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Header;