import babyNameData from './babyNamesData.json';
import { comparing } from './utils/comparing';

export interface babyName {
    id : number;
    name : string;
    sex : string;
}

function  NameButton (props : babyName) : JSX.Element {

    return (
    
            <button className={props.sex}>
                {props.name}
            </button>

       
    )
}

const sortedNames = [...babyNameData].sort(comparing)

const allBabyNames = sortedNames.map((value,index) => <NameButton 
    name = {value.name}
    id = {value.id}
    sex = {value.sex}
    key = {index}
    />)



export {allBabyNames}