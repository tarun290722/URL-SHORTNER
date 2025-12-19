import { useState } from "react";
import "../src/App.css";
const API_BASE = "http://localhost:5000"; // change to your backend
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./component/Navbar";
import SignIn from "./pages/SignIn.page";
import SignUp from "./pages/SignUp.page";
import LinkShow from "./pages/LinkShow.page";
import ShortArea from "./pages/ShortnerPage.page";
import ShortenerPage from "./pages/ShortnerPage.page";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <ShortenerPage />
      </>
    ),
  },
  {
    path: "/signup",
    element: (
      <>
        <SignUp></SignUp>
      </>
    ),
  },
  {
    path: "/signin",
    element: (
      <>
        <SignIn />
      </>
    ),
  },
  {
    path: "/links",
    element: (
      <>
        <LinkShow />
      </>
    ),
  },
  {
    path: "/createLink",
    element: (
      <>
        <ShortArea />
      </>
    ),
  },
]);
export default function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}
