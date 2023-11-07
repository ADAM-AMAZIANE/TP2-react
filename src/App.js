import './App.css';
import ImageSlider from './component/ImageSlider';
import { SliderData } from './component/SliderData';

function App() {
  return (
    <div className="App">
     <ImageSlider slides={SliderData} />

    </div>
  );
}
export default App;
