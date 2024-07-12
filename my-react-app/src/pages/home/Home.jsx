import "./Home.css";
import { useNavigate } from "react-router-dom";
import { verify, slotimg, calender, docto, banner } from "./images";
import doctInfos from '../../data/doctorInfo';
import testimonials from "../../data/testimonials";


const Why = ({ img, heading, paragraph }) => (
    <div id="why1">
        <img src={img} alt={heading}></img>
        <h3>{heading}</h3>
        <p>{paragraph}</p>
    </div>
)


export default function Home({ setName, setSpeciality, setAddress }) {
    const navigate = useNavigate()
    function handleClick(id) {
        const backendUrl = 'http://localhost:8080';
        const apiUrl = `${backendUrl}/api/doctors/${id}`;
        async function fetchData(apiUrl) {
            try {
                const response = await fetch(apiUrl);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const doctorInfo = await response.json();
                console.log('Doctor Info:', doctorInfo.details.name);
                if ('name' in doctorInfo.details && 'address' in doctorInfo.details && 'speciality' in doctorInfo.details) {
                    setName(doctorInfo.details.name);
                    setAddress(doctorInfo.details.address);
                    setSpeciality(doctorInfo.details.speciality);
                    navigate('/slot_booking');
                }
            } catch (error) {
                console.error('Error fetching doctor information:', error);
            }
        }
        fetchData(apiUrl);
    }

    return (
        <div>
            <div className="banner">
                <img src={banner} alt="banner"></img>
            </div>
            <section className="why-choose">
                <Why img={calender} heading={"Convenient Booking:"} paragraph={"Easily book appointment online, saving you time and effort."} />
                <Why img={docto} heading={"Expert Doctors:"} paragraph={"Our team of experienced and highly qualified doctors ensures top-notch medical care."} />
                <Why img={slotimg} heading={"Flexible Slots:"} paragraph={"Choose from a variety of time slots to fit your schedule."} />
                <Why img={verify} heading={"Secure and Confidential:"} paragraph={"Your health information is treated with the utmost confidentiality and security."} />
            </section>
            <section id="section">
                <h2 id="meet">Meet Our Expert Doctors</h2>
                <div className="doctor">
                    {doctInfos.map((doctor, id) => (
                        <div className="bio" key={id}>
                            <img src={doctor.image} alt={doctor.name}></img>
                            <h3>{doctor.name}, {doctor.highestQualification}</h3>
                            <p><strong>Specialty:</strong>{doctor.speciality}</p>
                            <p><strong>Experience:</strong>{doctor.experience}</p>
                            <p><strong>Bio:</strong>{doctor.bio}</p>
                            <button onClick={() => handleClick(doctor.id)}>Book Slot</button>
                        </div>
                    ))}
                </div>
            </section>
            <section className="how-it-works">
                <h2>Get Started with 3 Easy Steps</h2>
                <div className="flow">
                    <div className="step"><span>01</span><div id="flow-id">Browse Doctors:</div><div id="flow-des">Explore our list of expert doctors and choose the one.</div></div>
                    <div className="step"><span>02</span><div id="flow-id">Select a Time Slot:</div><div id="flow-des"> Pick a convenient time slot for your medical checkup.</div></div>
                    <div className="step"><span>03</span><div id="flow-id">Book Your Appointment:</div><div id="flow-des">Confirm your booking, and you're all set!</div></div>
                </div>
            </section>
            <section className="testimonial">
                <h2>Testimonials</h2>
                <div className="card">
                    {testimonials.map((testimonial, id) => (
                        <div className="card1" key={id}>
                            <img src={testimonial.image} alt={testimonial.name}></img>
                            <p>{testimonial.statement}</p>
                            <span>- {testimonial.name}</span>
                        </div>
                    ))}
                </div>
            </section>
            <footer className="footer">
                <p>&copy; 2023 Your Website Name. All rights reserved.</p>
            </footer>
        </div>
    )
}