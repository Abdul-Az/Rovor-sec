import Dashboard from "layouts/Dashboard/Dashboard.jsx";
// import Userslist from "../components/firebase/Userslist";
import Userslistm from "../components/firebase/Userslistm";
import Userslistc from "../components/firebase/Userslistc";
// import Login from "../components/Login/Login";
// import Error from "../components/Login/Error";
// import Example from "../components/Login/BranchLogin";
const indexRoutes = [{ path: "/Userslistm", component: Userslistm }, {path: "/Userslistc", component: Userslistc}];
// const indexRoutes = [{ path: "/", component: Login },
// {path: "/BranchLogin", component: Example},
// {path: "/Dashboard", component: Dashboard}, 
// {path: "*", component: Error}];

export default indexRoutes;
