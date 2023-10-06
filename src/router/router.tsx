import { Route, Routes} from "react-router-dom";

import Home from "../system/index";
import Login from "../system/login";
import CreateStore from "../system/store/createStore";
import User from "../system/user/index";
import CretaUser from "../system/user/create";

function Rotas(){
    return(
        <Routes>
            <Route path="/store" element={<Home />} />
            <Route path="/store/login" element={<Login />} />
            <Route path="/store/createstore" element={<CreateStore />} />
            <Route path="/store/user" element={<User />} />
            <Route path="/store/user/create" element={<CretaUser />} />
        </Routes>
    )
}

export default Rotas