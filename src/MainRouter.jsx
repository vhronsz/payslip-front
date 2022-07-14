// import {useRoutes} from 'hookrouter';
import Home from "./Page/home";
import styled from "styled-components";
import React, {useState} from "react";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

const Container =styled.div`
  width: 100%;
  height: 100vh;
  border: 1px solid black;
`;

function Router(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default Router;