import ImageSlider from './component/ImageSlider';
import { SliderData } from './component/SliderData';

function App() {
  return (
    <div className="App">
      <center>
     <ImageSlider slides={SliderData} />
</center>
    </div>
  );
}
export default App;
