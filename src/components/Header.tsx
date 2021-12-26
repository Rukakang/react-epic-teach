import React from "react";
import {Link} from "react-router-dom"
import Logo from "./logo.svg"

function Header(){
    return(
        <div>
            <img src={Logo}/>
            <Link to= "/">首页</Link>
            <Link to= "/history">历史</Link>
            <Link to= "/about">关于我</Link>
        </div>
    )
}
export default Header