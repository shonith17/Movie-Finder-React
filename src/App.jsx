import React from 'react';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Home from './Home';
import Movie from './Movie';
import Header from "./Header"

const NotFound = () => {
  return <h2>404 Not Found</h2>;
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Header />}>
      <Route index element={<Home />} />
      <Route path="/movie/:id" element={<Movie />} />
      <Route element={<NotFound />} />
    </Route>
  )
)

function App({routes}) {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}
export default App;
