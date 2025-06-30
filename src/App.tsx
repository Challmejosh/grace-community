import AppLayout from "./components/Layout/Applayout"
import Routers from "./components/Routers"


function App() {

  return <AppLayout children={
    <Routers />
  } />
}

export default App
