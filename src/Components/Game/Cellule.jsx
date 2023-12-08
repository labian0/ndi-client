import Ph from '../../assets/ph1.svg';
import Ph2 from '../../assets/ph2.svg';
import Ph3 from '../../assets/ph3.svg';
import Ph4 from '../../assets/ph4.svg';
export default function Cellule(props){
    let row = props.row;
    let col = props.col;
    const infrastructures = [
        Ph,
        Ph2,
        "",
    ]

    const handleNature = () =>{
        switch (props.contenu){
            case 'M':
                return Ph;
                break;
            case 'B':
                return Ph2;
                break;
            case 'D':
                return Ph3;
                break;
            default:
                return Ph4;
                break;
        }
    }

    return(
        <div className="cell">
            <img src={handleNature()} alt="" width='50px' height='50px'/>
        </div>
    )
}