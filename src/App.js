import MainPage from "./Components/MainPage/MainPage";
import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Result from "./Components/Result/Result";

function App() {
  return (

          <main>
          <Routes>

              <Route path='/' element={<MainPage/>}/>
              <Route path='/result' element={<Result/>}/>

          </Routes>
          </main>

  )
}

export default App;
