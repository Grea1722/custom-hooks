import React from "react";
import { Navigate, Route, Routes, Link } from "react-router-dom";
import { HomePage } from "./HomePage";
import { AboutPage } from "./AboutPage";
import { LoginPage } from "./LoginPage";
import { Navbar } from "./Navbar";
import { UserProvider } from "./context/UserProvider";

export const MainApp = () => {
  return (
    <UserProvider>
      <Navbar />

      <hr />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="about" element={<AboutPage />} />
        //! Comodin para cuando no existe una ruta
        {/* <Route path='/*' element={<HomePage />} /> */}
        //? Usualmente se hace de esta forma ya que no tiene sentido repetir
        componentes
        <Route path="/*" element={<Navigate to={"/"} />} />
      </Routes>
    </UserProvider>
  );
};
