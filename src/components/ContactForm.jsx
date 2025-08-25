import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function ContactForm() {

    const navigate = useNavigate();
    const [contact, setContact] = useState([]);

    // Change below function and URL when possible/if necessary. URL should match deployed website URL, not local host
    async function handleContact(e) {
        e.preventDefault();
        try{

            const response = await fetch (`http://localhost:3000/contactForm`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({
                    message: message,
                }),
            });

            if (!response.ok) {
                alert ("Could not complete submission. Please try again later!")
            }

            alert ("Submission received, thank you!");

        }
        catch (err) {
            console.error(err);
            alert("Could not complete submission. Please try again later!")
        }
    }


    return (
        <div className = "contactFormContainer">

            {token && (
                <form>
                    <h2>Contact Me!</h2>
                    <input 
                    // Do I need value and onChange?
                        type = "text"
                        placeholder = "Enter your message here"
                        value = {message}
                        onChange = {(e) => setMessage(e.target.value)} required
                    >
                    </input>
                    <button type="submit">Submit</button>
                </form>
            )};

        </div>
    )
}

export default ContactForm