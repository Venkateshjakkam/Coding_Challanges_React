import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import SelectCountry from "./ToastBar/SelectCountry";
// import GridLight from "./Components/GridLight";
// import App from './App';
// import SearchBar from './Components/SearchBar';
// import AdvanceSearch from './AdvanceFIlter/AdvanceSearch';
// import DebounceSearch from "./AdvanceFIlter/DebounceSearch";
// import ToastBar from "./ToastBar/ToastBars";
// import GridLight from "./Components/GridLight";
// import UpdatedDetails from "./UpdateDetails/UpdatedDetails";
// import TodoList from "./Todo/TodoList";
// import Theam from "./Theam/Theam";
// import FetchUserData from "./Fetch/FetchUserData";
// import ToggleButton from "./UpdateDetails/ToggleButton";
// import reportWebVitals from './reportWebVitals';
// import StopWatch from "./Fetch/StopWatch";
// import GridLightGreen from "./UpdateDetails/GridLightGreen";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <SearchBar /> */}
    {/* <AdvanceSearch /> */}
    {/* <DebounceSearch /> */}
    {/* <ToastBar /> */}
    <SelectCountry />
    {/* <UpdatedDetails /> */}
    {/* <ToggleButton /> */}
    {/* <TodoList /> */}
    {/* <GridLight /> */}
    {/* <GridLightGreen /> */}
    {/* <Theam /> */}
    {/* <FetchUserData /> */}
    {/* <StopWatch /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
