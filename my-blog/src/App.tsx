import { Provider } from "react-redux";
import Routers from "./routes";
import './App.css'
import store from '@/redux/store'

const App = () => {
  return (
    <Provider store={store}>
      <Routers></Routers>
    </Provider>
  )
}

export default App;