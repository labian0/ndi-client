import '../Styles/form.css'
import {useState} from "react";
import Axios from "axios";
import {Cookies} from "react-cookie";
import {Link} from "react-router-dom";

export default function Login() {

    const cookies = new Cookies();

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const getToken = (e) => {
        e.preventDefault();
        Axios.post("http://91.92.252.31:5000/login",
            `username=${userName}&password=${password}`
        ).then(res => {
            console.log(res.data)
            localStorage.setItem('token', res.data.session_token)
            cookies.set('access-token', res.data.session_token, {
                path: '*',
                httpOnly: true,
                secure: true
            })
        })
    }

    const handleGameStart = (e) => {
        if (localStorage.getItem('token' == null)) {
            alert("Vous êtes déconnecté !")
        } else {
            e.cancel();
        }
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

            <button><Link to={'/plateau'} onClick={e => handleGameStart(e)}>Lancer une partie</Link></button>
        </div>
    )
}