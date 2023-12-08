import '../Styles/form.css'
import {useState} from "react";
import Axios from "axios";
import {Cookies} from "react-cookie";

export default function Register() {

    const cookies = new Cookies();

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const getToken = (e) => {
        e.preventDefault();
        Axios.post("http://91.92.252.31:5000/register",
            `username=${userName}&password=${password}`
        ).then(res => {
            cookies.set('access-token',res.data.session_token,{
                path:'*',
                httpOnly : true,
                secure : true
            })
        }).catch(

        )
    }
    return (
        <div className="form-container">
            <form onSubmit={getToken}>
                <label htmlFor="username">Nom d'utilisateur :</label>
                <input type="text" id="username" value={userName} name="username"
                       onChange={(e) => setUserName(e.target.value)}/>
                <label htmlFor="password">Mot de passe :</label>
                <input type="password" id="password" value={password} name="password"
                       onChange={(e) => setPassword(e.target.value)}/>
                <button>Se connecter</button>
            </form>
        </div>
    )
}