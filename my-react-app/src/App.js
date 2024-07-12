import Home from "./pages/home/Home.jsx";
import Navbar from "./components/Navbar.js";
import Profile from "./pages/profile/Profile.jsx";
import Treatements from "./pages/treatments/Treatements.js";
import { Routes, Route } from 'react-router-dom';
import { useState } from "react";
import Slot from "./pages/slot/Slot.jsx";
import Form from "./pages/form.js";
export default function App() {
  const [name, setName] = useState("");
  const [specialty, setSpeciality] = useState("");
  const [address, setAddress] = useState("");
  const [slot, setSlot] = useState("");


  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home setName={setName} setAddress={setAddress} setSpeciality={setSpeciality} />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/treatement" element={<Treatements />} />
        <Route path="/slot_booking" element={<Slot name={name} specialty={specialty} address={address} setSlot={setSlot} slot={slot} />} />
        <Route path="/slotbookingform" element={<Form slot={slot} />}></Route>
      </Routes>
    </>
  )
}