import Ph from '../../assets/ph1.svg';
import Ph2 from '../../assets/ph2.svg';
export default function Cellule(props){
    this.row = props.row;
    this.col = props.col;
    const infrastructures = [
        Ph,
        Ph2,
        "",
    ]
    return(
        <div className="cell">
            <img src={Ph} alt=""/>
        </div>
    )
}