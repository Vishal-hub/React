import React, { Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Contact from "./components/Contact";
import ErrorMsg from "./components/ErrorMsg";
import RestaurantInfo from "./components/RestaurantInfo";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import UserContext from "./utils/UserContext";
import { lazy } from "react";

//lazy loading
const About = lazy(() => import("./components/About"));

const App = () => {

  const [username, setUsername] = useState();

  useEffect(()=>{
    //make and API call and set username
    const data = {
      name: "John Doe",
    };
    setUsername(data.name);
  },[])

  return (
    //setting Context API and modifying it by seeting up new username (check about us page)
    <UserContext.Provider value={{loggedInUser: username, setUsername}}>
    <div>
        <Header />
        <Outlet />
    </div>
    </UserContext.Provider>
  );
}

const AppRouter= createBrowserRouter([
  {
    path:"/", 
    element:<App />,
    children:[
      {
        path:"/",
        element: <Body />,
      },
      {
        path:"/about",
        element: 
                <Suspense fallback={<h1>loading...</h1>}>         
                  <About />
                </Suspense>,
                //we use Suspense for fallback, until the lazy component loads we show this usig suspense
      },
      {
        path:"/contact",
        element: <Contact />,
      },
      {
        path:"/brand/:brand_id/:client_source_id",
        element: <RestaurantInfo />,
      },
    ],
    errorElement: <ErrorMsg />,
  },
]);

const root= ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={AppRouter}/>);