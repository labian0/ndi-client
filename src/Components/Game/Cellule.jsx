import Ph from '../../assets/Asset_ore.png';
import Ph2 from '../../assets/Asset_tree.png';
import Ph3 from '../../assets/Asset_garbage.png';
import Ph4 from '../../assets/Asset_sappling.png';
import PhG from '../../assets/Asset_ground.png';
import Axios from "axios";

export default function Cellule(props) {
    const infrastructures = [
        Ph,
        Ph2,
        "",
    ]

    const handleNature = () => {
        switch (props.contenu) {
            case 'M':
                return Ph;
                break;
            case 'B':
                return Ph2;
                break;
            case 'D':
                return Ph3;
                break;
            case 'P':
                return Ph4;
                break;
            default:
                return PhG;
                break;
        }
    }

    const showCoordinates = () => {
        console.log(props.row + " " + props.col)
    }
    const actions = async () => {
        const data = {
            coord: [props.row,props.col],
            session_token: localStorage.getItem('token'),
        }
        const res = await Axios.post('http://91.92.252.31:5000/actions_disponibles', data,{
            headers:{
                "Content-Type":"application/json"
            }
        })

    }
    return (
        <div className="cell" onClick={actions}>
            <img src={handleNature()} alt="" width='60px' height='60px'/>
        </div>
    )
}