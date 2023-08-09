
import './App.css';
import ColorPickerApp from './Components/ColorPickerApp/Colorpickerapp';

function App() {
  return (
    <div className="App">
  
    <ColorPickerApp h2color="#FF6663" pcolor="PINK"/>
    <ColorPickerApp h2color="#333333" pcolor="GRAY"/>
    <ColorPickerApp h2color="#000000" pcolor="BLACK"/>
    <ColorPickerApp h2color="#38BB14" pcolor="GREEN"/>
    <ColorPickerApp h2color="#C90B0B" pcolor="RED"/>
    <ColorPickerApp h2color="#FF8000" pcolor="ORANGE"/>
    <ColorPickerApp h2color="#FFF500" pcolor="YELLOW"/>
    <ColorPickerApp h2color="#CCCCCC" pcolor="LIGHT GRAY"/>
    <ColorPickerApp h2color="#7E41A2" pcolor="PURPLE"/>
    <ColorPickerApp h2color="#C14911" pcolor="BROWN"/>
    
    </div>
  );
}

export default App;
