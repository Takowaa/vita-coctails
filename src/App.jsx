
import './App.css'
import {RouterProvider} from "react-router-dom";
import {router} from "./components/router/Router.jsx";
function App() {


  return (
    <>
     <div className='container'>

       <RouterProvider router={router} />
     </div>
    </>
  )
}

export default App
