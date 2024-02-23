import { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";
import { Header } from "./components/Header";
import Products from "./components/Products";
import Events from "./components/Events";

import events from "./events.json";

import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const NavigationBar = React.lazy(() => import("./components/NavBar"));
  const Events = React.lazy(() => import("./components/Events"));
  const NotFound = React.lazy(() => import("./components/NotFound"));
  const EventDetails = React.lazy(() => import("./components/EventDetails"));

  let name = "Amina";
  let person = {
    name: "Amina",
    age: 26,
  };

  let x = true;

  const style1 = {
    color: "blue",
    fontSize: "38px",
  };

  let students = [
    { name: "s1", age: 22 },
    { name: "s2", age: 30 },
    { name: "s3", age: 25 },
  ];

  function test() {
    console.log("i am here");
  }

  function getPerson(person1) {
    return person1;
  }

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<NavigationBar />} />
          <Route path="/events" element={<Events />} />
          <Route path="/events/:name" element={<EventDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>

      {/* {<Header name={name} age="30" />
      <Counter PropName={name} />
      <button onClick={() => setShow(!show)}>Update Show </button>
      {show && <Products PropName={name}></Products>}}
      {/* <Header name={name} age="30" /> */}
      {/* <h1>Hello, {name}</h1>
      <h2>Hey, {getPerson("User")}</h2>
      {x ? (
        <p style={style1}>{person.name}</p>
      ) : (
        <p className="age">{person.age}</p>
      )}
      {x && <p>true</p>}
      {students.map((s, i) => {
        return (
          <ul key={i}>
            <li>{s.name}</li>
            <li>{s.age}</li>
          </ul>
        );
      })}
      <button onClick={test}>Click Me</button> */}
    </>
  );
}

export default App;
