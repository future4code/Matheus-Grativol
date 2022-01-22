import HomePage from "../Pages/HomePage"
import ListTripsPage from "../Pages/ListTripsPage"
import LoginPage from "../Pages/LoginPage"
import ApplicationFormPage from "../Pages/ApplicationFormPage"
import TripDetailsPage from "../Pages/TripDetailsPage"
import AdminHomePage from "../Pages/AdminHomePage"
import CreateTripPage from "../Pages/CreateTripPage"

import { BrowserRouter, Switch, Route} from "react-router-dom";

export const Router = () =>{
    return(
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
    )
}