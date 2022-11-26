import {Routes, Route} from 'react-router-dom'
import {Home, RandomColorGrid, NumberGenerator, BasicForm, RandomColorStripes, RandomColor} from './pages/index'

function App() {
  return (
    <>
    <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route path="/random-color" element={<RandomColor/>} />
      <Route path="/random-colors" element={<RandomColorStripes/>} />
      <Route path="/number-generator" element={<NumberGenerator/>} />
      <Route path="/basic-form" element={<BasicForm/>} />
      <Route path="/random-color-grid" element={<RandomColorGrid/>} />
    </Routes>
    </>
  );
}

export default App;
