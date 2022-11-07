import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ChildWindow } from "./components/ChildWindow";

function App() {
  return (
    <div style={{ margin: "0px 20px" }}>
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<ChildWindow />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
