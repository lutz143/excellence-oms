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
import Home from "./components/Home"
import About from "./components/About";
import MissionStatement from "./components/MissionStatement";
import Board from "./components/Board";
import BoardMember from "./components/BoardMember";
import Involvement from "./components/Involvement";
import Grants from "./components/Grants"
import Apply from "./components/Apply"
import Donors from "./components/Donors"
import Profile from "./components/Profile"
import Footer from "./components/Footer";


// const client = new ApolloClient({
//     uri: '/graphql',
//     cache: new InMemoryCache(),
// });

// `${process.env.PUBLIC_URL}/images/us.svg`

function App() {
    return (
        // <ApolloProvider client={client}>
        <Router basename={process.env.PUBLIC_URL}>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/about/mission-statement" element={<MissionStatement />} />
                <Route path="/about/board" element={<Board />} />
                <Route path="/about/board-member/:id" element={<BoardMember />} />
                <Route path="/about/involvement" element={<Involvement />} />
                <Route path="/grants" element={<Grants />} />
                <Route path="/grants/application-process" element={<Apply />} />
                <Route path="/grants/donors" element={<Donors />} />
                <Route path="/login" element={<Profile />} />
            </Routes>
            <Footer />
        </Router>

        // </ApolloProvider>
    );
}

export default App;