import { Card } from "./Components/card.js";
import "./App.css";
import Atanagildo from "./images/rey_atanagildo.png";
import Ataulfo from "./images/rey_ataulfo.png";
import Ervigio from "./images/rey_ervigio.png";
import Leogivildo from "./images/rey_leogivildo.png";
import Recesvinto from "./images/rey_recesvinto.png";
import Sisebuto from "./images/rey_sisebuto.png";
import Teodorico from "./images/rey_teodorico.png";

function App() {
  let kingName = [
    "Atanagildo",
    "Ataulfo",
    "Ervigio",
    "Leogivildo",
    "recsvinto",
    "Sisebuto",
    "teodorico",
  ];
  return (
    <div className="container-cards">
      <Card image={Atanagildo} name={kingName[0]}></Card>
      <Card image={Ataulfo} name={kingName[1]}></Card>
      <Card image={Ervigio} name={kingName[2]}></Card>
      <Card image={Leogivildo} name={kingName[3]}></Card>
      <Card image={Recesvinto} name={kingName[4]}></Card>
      <Card image={Sisebuto} name={kingName[5]}></Card>
      <Card image={Teodorico} name={kingName[6]}></Card>
    </div>
  );
}

export default App;
