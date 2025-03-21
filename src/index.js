import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from './App';
// import SearchBar from './Components/SearchBar';
// import AdvanceSearch from './AdvanceFIlter/AdvanceSearch';
// import DebounceSearch from './AdvanceFIlter/DebounceSearch';
// import ToastBar from './ToastBar/ToastBar';
// import UpdatedDetails from "./UpdateDetails/UpdatedDetails";
import TodoList from "./Todo/TodoList";
// import ToggleButton from "./UpdateDetails/ToggleButton";
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <SearchBar /> */}
    {/* <AdvanceSearch /> */}
    {/* <DebounceSearch /> */}
    {/* <ToastBar /> */}
    {/* <UpdatedDetails /> */}
    {/* <ToggleButton /> */}
    <TodoList />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
