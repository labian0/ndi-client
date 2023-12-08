import '../Styles/plateau.css'
import {useEffect,} from "react";
import Axios from "axios";
import Cellule from "./Cellule";

export default function Plateau() {
    let elements = [];
    const createRow = (elements,index) =>{
        elements[index].forEach(elem=> {
            console.log(elem)
        })
    }
    useEffect(() => {
        Axios.get("http://91.92.252.31:5000/plateau_golmon")
            .then(res => {
                elements = res.data.mat;
                console.log(elements)
                createRow(elements,1);
            })
    }, []);

    return (
        <div className="plateau">

        </div>
    )
}