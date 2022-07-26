import {allBabyNames} from "./ContainerForButtons";

function App(): JSX.Element {
  return (<div className="babyNamesButtons">
    {allBabyNames}
  </div>)
}

export default App;
