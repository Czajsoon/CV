import "./interest-chip.css"

interface Props{
    name: string;
}

export default function InterestChip({name}: Props){
    return(
        <div className="interest-chips">
            <p>{name}</p>
        </div>
    );
}