

import { Board } from "./pages/board";
import { Routes, Route } from "react-router";
import { BoardList } from "./pages/boardList";
import { ColorModeSwitcher } from "./ColoreModeSwitch";
function App() {

  return(
    <>
      <ColorModeSwitcher/>
      <Routes>
        <Route path="/board/:id" element={<Board/>}/>
        <Route path="/" element={<BoardList/>}/>
      </Routes>
    </>
  )
}

export default App;
