import axios from "axios";
import styled from "styled-components";
import { Switch, Route, BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";
import {useState, useEffect} from 'react'
import LoginPage from "./Pages/LoginPage";
import ListTripsPage from "./Pages/ListTripsPage";
import HomePage from "./Pages/HomePage";
import AdminHomePage from "./Pages/AdminHomePage";
import ApplicationFormPage from "./Pages/ApplicationFormPage";
import CreateTripPage from "./Pages/CreateTripPage";
import TripDetailsPage from "./Pages/TripDetailsPage";


function App() {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={"/"}>
          <HomePage/>
        </Route>
        <Route exact path={"/ListTrips"}>
          <ListTripsPage/>
        </Route>
        <Route exact path={"/Login"}>
          <LoginPage/>
        </Route>
        <Route exact path={"/ApplicationForm"}>
          <ApplicationFormPage/>
        </Route>
        <Route exact path={"/TripDetails"}>
          <TripDetailsPage/>
        </Route>
        <Route exact path={"/AdminHome"}>
          <AdminHomePage/>
        </Route>
        <Route exact path={"/CreateTrip"}>
          <CreateTripPage/>
        </Route>
      </Switch>
    </BrowserRouter>    
  );
}

export default App;
