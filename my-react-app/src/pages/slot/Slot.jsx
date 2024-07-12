import React, { useState } from 'react'
import "./Slot.css"
import { Link } from 'react-router-dom';
import Button from '../../components/Button.jsx';
import { logo, audio, audio1, clinic, clinic1, videoimage, videoimage2, arrowright, arrowleft } from "./images.js";


export default function Slot({ handle, name, specialty, address, setSlot, slot }) {
  const [add, setAdd] = useState(-10);

  const display1 = {
    display: 'flex'
  };

  const display2 = {
    display: 'none'
  };

  const [selectedImage1, setSelectedImage1] = useState(clinic);
  const [selectedImage2, setSelectedImage2] = useState(audio1);
  const [selectedImage3, setSelectedImage3] = useState(videoimage2);
  const [slot1Style, setSlot1Style] = useState(display1);
  const [slot2Style, setSlot2Style] = useState(display2);

  const handleclick1 = () => {
    setSelectedImage1(clinic1);
    setSelectedImage2(audio1)
    setSelectedImage3(videoimage2);
  }
  const handleclick2 = () => {
    setSelectedImage1(clinic);
    setSelectedImage2(audio)
    setSelectedImage3(videoimage2);
  }
  const handleclick3 = () => {
    setSelectedImage1(clinic);
    setSelectedImage2(audio1)
    setSelectedImage3(videoimage);
  }

  const handleright = () => {
    setSlot1Style(display2);
    setSlot2Style(display1);
  };

  const handlerleft = () => {
    setSlot1Style({
      display: 'flex'
    });
    setSlot2Style({
      display: 'none'
    });
  };


  const currentDate = new Date();

  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const day1 = currentDate.toLocaleDateString(undefined, { weekday: 'long' });
  const date = currentDate.toLocaleDateString(undefined, { month: 'long', day: 'numeric' });


  const formatday = new Date(currentDate);
  formatday.setDate(currentDate.getDate() + 1);
  const nextDayFormatted = formatday.toLocaleDateString(undefined, { weekday: 'long', month: 'long', day: 'numeric' });
  formatday.setDate(currentDate.getDate() + 2);
  const dayafternextday = formatday.toLocaleDateString(undefined, { weekday: 'long', month: 'long', day: 'numeric' });
  formatday.setDate(currentDate.getDate() + 3);
  const day4 = formatday.toLocaleDateString(undefined, { weekday: 'long', month: 'long', day: 'numeric' });
  formatday.setDate(currentDate.getDate() + 4);
  const day5 = formatday.toLocaleDateString(undefined, { weekday: 'long', month: 'long', day: 'numeric' });
  formatday.setDate(currentDate.getDate() + 5);
  const day6 = formatday.toLocaleDateString(undefined, { weekday: 'long', month: 'long', day: 'numeric' });




  return (
    <div className="maincontainer">
      <div className='container'>
        <div className="profile">
          <div className="doctorimage">
            <img src={logo} alt="Doctor Image" />
          </div>
          <div className="doctordata">
            <h5 className='doctorname'>{name}</h5>
            <p className="specialty">{specialty}</p>
          </div>
        </div>
        <div className="appointment">
          <div className="appointdata">
            <h4 className='appointhead'>Book Appointment</h4>
            <p className='consult'>Select Your Consultation Type</p>
            <p className='fees'><b>Fees approx ₹ 500</b></p>
            <p className='feeatClinic'>(pay at clinic)</p>
          </div>
          <div className="appointpic">
            <img
              className='image1 '
              src={selectedImage1}
              alt="Appointment Pic 1"
              onClick={handleclick1}
            />
            <img
              className='image2'
              src={selectedImage2}
              alt="Appointment Pic 2"
              onClick={handleclick2}
            />
            <img
              className='image3'
              src={selectedImage3}
              alt="Appointment Pic 3"
              onClick={handleclick3}
            />
          </div>
        </div>
        <div className="clinic"><p className='clinichead'>Clinic Name</p>
          <div className="clinicAdress">
            <div className="point"></div>
            <p>{address}</p>
          </div>
        </div>
        <div className="slot">
          <img src={arrowleft} alt="Today" style={{ width: '30px', height: '30px' }} onClick={handlerleft} />
          <div className="slot1" style={slot1Style}>
            <div className="today">{day1},{date}

            </div>
            <div className="tommorrow">{nextDayFormatted}</div>
            <div className="aftertommorrow">{dayafternextday}</div>
          </div>
          <div className="slot2" style={slot2Style}>
            <div className="day4">{day4}</div>
            <div className="day5">{day5}</div>
            <div className="day6">{day6}</div>
          </div>
          <img src={arrowright} alt="After Tomorrow" style={{ width: '35px', height: '35px' }} onClick={handleright} />
        </div>
        <div className="showslot">
          <Button id={1} time={'10:00'} setSlot={setSlot} add={add} setAdd={setAdd} />
          <Button id={2} time={'10:15'} setSlot={setSlot} add={add} setAdd={setAdd} />
          <Button id={3} time={'10:30'} setSlot={setSlot} add={add} setAdd={setAdd} />
          <Button id={4} time={'10:45'} setSlot={setSlot} add={add} setAdd={setAdd} />
          <Button id={5} time={'11:00'} setSlot={setSlot} add={add} setAdd={setAdd} />
          <Button id={6} time={'11:15'} setSlot={setSlot} add={add} setAdd={setAdd} />
          <Button id={7} time={'11:30'} setSlot={setSlot} add={add} setAdd={setAdd} />
        </div>
        <div className="accept">
          <Link to={add === -10 ? "/slot_booking" : "/slotbookingform"}>
            <button
              style={{ backgroundColor: add !== -10 ? 'purple' : 'white' }}
            >Continue</button>
          </Link>
        </div>
      </div>
    </div>
  );
}



