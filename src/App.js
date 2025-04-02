import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import {
//     ApolloClient,
//     InMemoryCache,
//     ApolloProvider,
//     // createHttpLink,
// } from "@apollo/client";
// import { setContext } from "@apollo/client/link/context";

// import classes from "./App.css";

import Navbar from "./components/Navbar";
// import Footer from "./containers/Footer";

// import Home from "./pages/Home";
// import Stock from "./pages/Stock";
// import Register from "./pages/Register";
// import Login from "./pages/LoginForm";
// import Profile from "./pages/Profile";
// import About from "./pages/About";

// const client = new ApolloClient({
//     uri: '/graphql',
//     cache: new InMemoryCache(),
// });


function App() {
    return (
        // <ApolloProvider client={client}>
        <Router>
            <Navbar />
        </Router>
        // </ApolloProvider>
    );
}

export default App;