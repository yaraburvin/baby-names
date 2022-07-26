import babyNameData from './babyNamesData.json';

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

const sortedNames = [...babyNameData].sort(function(a, b){
    if(a.name < b.name) { return -1; }
    if(a.name > b.name) { return 1; }
    return 0;
})
const allBabyNames = sortedNames.map((value,index) => <NameButton 
    name = {value.name}
    id = {value.id}
    sex = {value.sex}
    key = {index}
    />)



export {allBabyNames}