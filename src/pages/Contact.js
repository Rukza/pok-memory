import React from 'react';
import Navigation from '../components/Navigation';
import '../styles/Contact.css';


const Contact = () => {
    return (
    <div>
        <Navigation></Navigation>
        <div className='container'>
            <h1>Contact us</h1>

            <form className="form">

                <div className="name">

                    <label for="firstName">First name</label>
                    <input
                        type="text"
                        name="firstName"
                        className="firstName"
                        tabIndex="1"
                    />
                    <label for="lastName">Last name</label>
                    <input
                        type="text"
                        name="lastName"
                        className="lastName"
                        tabIndex="2"
                    />
                </div>
                <label for="email">Email</label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    className="email"
                    placeholder="example@corp.com"
                    tabIndex="3"
                />
                <label for="message">Message</label>

                <textarea
                    placeholder="Start typing..."
                    className="message"
                    name="message"
                />
                <button type="submit" className="send">Send</button>
            </form>
        </div>
    </div>
    );
};

export default Contact;