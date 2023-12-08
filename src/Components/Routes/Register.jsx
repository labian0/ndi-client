import '../Styles/form.css'
import {useState} from "react";
import Axios from "axios";
import {Cookies} from "react-cookie";

export default function Register() {

    const cookies = new Cookies();

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const [confirmModal,setConfirmModal] = useState(false);
    const [registerClicked,setRegisterClicked] = useState(false);
    const getToken = (e) => {
        e.preventDefault();
        Axios.post("http://91.92.252.31:5000/register",
            `username=${userName}&password=${password}`
        ).then(res => {
            if(res.status == 200){
                setConfirmModal(true);
            }else{
                setConfirmModal(false);
            }
        }).catch((err)=>{
            console.log(err)
        });
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
                <button onClick={() => setRegisterClicked(true)}>Se connecter</button>
                {(confirmModal && registerClicked) ? <div className={'register-modal'}><p>Inscris avec succès !</p></div> : <div className={'register-error'}><p>Un problème est survenu !</p></div>}
            </form>
        </div>
    )
}