
import './App.css';
import Header from "./Components/Header/header.jsx";
import Introduction from "./Components/Introduction/introduction.jsx";
import Goals from "./Components/Goals/goals.jsx";
import Description from "./Components/Description/description.jsx";
import DesignerServices from "./Components/DesignerServicies/designer-services.jsx";
import RoadMap from "./Components/RoadMap/road-map.jsx";

function App() {
  return (
    <div className="App">
      <Header/>
      <Introduction/>
      <Goals/>
      <Description/>
      <DesignerServices/>
      <RoadMap/>
    </div>
  );
}

export default App;
