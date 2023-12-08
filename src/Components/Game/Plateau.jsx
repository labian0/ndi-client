import '../Styles/plateau.css'
import {useEffect, useState} from "react";
import Axios from "axios";
import Cellule from "./Cellule";

export default function Plateau() {
    const [elements, setElements] = useState([
        ['M']
    ]);

    useEffect(() => {
        Axios.post("http://91.92.252.31:5000/init_plateau",`session_token=${localStorage.getItem('token')}`)
            .then(res => {
                setElements(res.data.mat);
            })
    }, []);



    return (
        <div className="plateau">
            {
                elements.map((elem,index) => (
                    <div key={index} className={'row'}>
                        {elements[index].map((eleme,i) => <Cellule key={i} row={index} col={i} contenu={eleme}/>)}
                    </div>
                    )
                )
            }
        </div>
    );
}
