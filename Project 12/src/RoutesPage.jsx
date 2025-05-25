import React from "react";
import { Routes, Route, Navigate } from "react-router";
import HomePage from "./HomePage";
import Contact from "./Contact";
import About from "./About";
import NotFound from "./NotFound";
import College from "./College";
import Department from "./Department";
import Faculty from "./Faculty";
import Student from "./Student";
import NavBar from "./NavBar";

export default function RoutesPage() {
  return (
    <>
      <Routes>

        <Route element={<NavBar />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
        </Route>

        <Route path="/" element={<HomePage />} />
        <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
        <Route path="/College" element={<College />}>
          <Route path="Department" element={<Department />} />
          <Route path="Faculty" element={<Faculty />} />
          <Route path="Student" element={<Student />} />
        </Route>
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />

        {/* Wrong Route Sollution 1 */}
        <Route path="/*" element={<NotFound />} />
        {/* Wrong Route Sollution 2 */}
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}
