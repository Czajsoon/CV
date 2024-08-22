import "./skill-chips.css"


interface Props{
    name: string;
}

export default function SkillChips(props: Props) {
    return (
        <div className="chips">
            <p>{props.name}</p>
        </div>
    );
}