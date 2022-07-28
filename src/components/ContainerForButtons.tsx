
export interface babyName {
    id : number;
    name : string;
    sex : string;
}

export function  NameButton (props : babyName) : JSX.Element {
    

    return (
    <>
        
        <button className={props.sex}>
            {props.name}
        </button>
    </>
            

       
    )
}




