import { Route, Routes } from "react-router-dom";
import './index.css'
import Layout from "./layout/Layout";
import Newsletter from "./components/Newsletter";

function App() {

  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Layout children={ <Newsletter /> } />} />
        </Routes>
      </div>
    </>
  )
}

export default App
