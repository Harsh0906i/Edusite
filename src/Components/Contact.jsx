import './Contact.css'
import React from "react";
import './Title.css'
import msg from '../assets/msg-icon.png'
export default function Contact() {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "3f18b1e8-3252-4c99-b6c8-4ef7db60b5aa");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };
    return (
        <>
            <div className='title'>
                <p>Contact us</p>
                <h2>Get in Touch</h2>
            </div>
            <div className='contact' >
                <div className="col">
                    <h3>Send us a message <img src={msg} alt="" /> </h3>
                    <p>Feel free to reach out through contach form or find our contach information below. Your feedback, questions and suggestion are important to us, we strive to provide exceptional service to uor university community</p>
                    <ul>
                        <li> harshitsingharya24@gmail.com</li>
                    </ul>
                </div>
                <div className="col">
                    <form onSubmit={onSubmit}>
                        <label>Name</label>
                        <input type="text" name='name' required />
                        <label>Write a message</label>
                        <textarea name="message" rows="6" required></textarea>
                        <button type='submit' className='btn dark '>Submit</button>
                    </form>
                    <span>{result}</span>
                </div>
            </div>
        </>
    )
}
