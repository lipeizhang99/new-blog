import { Provider } from "react-redux";
import Routers from "./routes";
import './App.css'
import store from '@/redux/store'

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <div className="bg-red-500 text-white text-2xl p-10">
          如果你看到红底白字，说明 Tailwind 是生效的
        </div>
      </div>
    </Provider>
  )
}

export default App;