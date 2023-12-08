import '../Styles/plateau.css'
import {useEffect, useState,} from "react";
import Axios from "axios";
import Cellule from "./Cellule";


export default function Plateau() {
    const [elements, setElements] = useState([]);
    const createRow = (elements) => {

    }
    useEffect(() => {
        Axios.get("http://91.92.252.31:5000/plateau_golmon")
            .then(res => {
                setElements(res.data.mat)
                console.log(elements)
            })
    }, []);

    return (
        <div className="plateau">
            {createRow(elements)}
        </div>
    )
}