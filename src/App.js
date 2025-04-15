import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
// import {
//     ApolloClient,
//     InMemoryCache,
//     ApolloProvider,
//     // createHttpLink,
// } from "@apollo/client";
// import { setContext } from "@apollo/client/link/context";

// import classes from "./App.css";

import Navbar from "./components/Navbar";
import Board from "./components/Board";
import BoardMember from "./components/BoardMember";
import Footer from "./components/Footer";

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
            <Routes>
                <Route path="/about/board" element={<Board />} />
                <Route path="/about/board-member/:id" element={<BoardMember />} />
            </Routes>
            <Footer />
        </Router>
        // </ApolloProvider>
    );
}

export default App;