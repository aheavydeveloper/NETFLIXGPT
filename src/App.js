
import Body from "./components/Body";
import Login from "./components/Login";
import Browse from './components/Browse'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body/>,
    children: [
      {
        path: "/",
        element: <Login/>
      },
      {
        path: "/watch",
        element: <Browse/>
      }
    ]
  }
  
])

function App() {
  return (
    <Provider store={appStore}>
    <div className="">
      <RouterProvider router={appRouter} />
      </div>
      </Provider>
  );
}

export default App;
