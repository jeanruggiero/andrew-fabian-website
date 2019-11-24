import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HeaderBar from "./components/HeaderBar";
import NavIcon from "./components/NavButton";
import { ThemeProvider } from "@material-ui/core/styles"
import andrewTheme from "./styles";
import NavBar from "./components/NavBar";


export default function App() {
  return (
    <div>
      <ThemeProvider theme={andrewTheme}>
        <HeaderBar/>
        <NavBar/>
      </ThemeProvider>
    </div>
  );
}
