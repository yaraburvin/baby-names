import {useState } from "react";
import babyNameData from './babyNamesData.json'
import { comparing } from './utils/comparing';
import Header from "./components/Header";
import { NameButton } from "../src/components/ContainerForButtons";


function App(): JSX.Element {
  const [value,setValue] = useState("")
  const sortedNames = [...babyNameData].sort(comparing)
  const filteredBabies = sortedNames.filter((i) => i.name.toLocaleLowerCase().includes(value.toLocaleLowerCase()))
  return (<>
    <header> <Header /> </header>
    <section className="searchSection">
      <input 
        type= "text"  
        value = {value} 
        onChange = {(e) => setValue(e.target.value)}
        placeholder = "type a name"
    />
    </section>
    <section className="containerForNames">
    <div className="babyNamesButtons">
    {filteredBabies.map((value,index) => <NameButton 
    name = {value.name}
    id = {value.id}
    sex = {value.sex}
    key = {index}
    />)}
  </div>
    </section>
 
  </>
)}

export default App;


