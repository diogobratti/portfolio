import React, { useState } from "react";

export default function Contact() {
    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const inputSize = 50;

    //   Form validation
    const [errors, setErrors] = useState({ fullname: false, email: false, subject: false, message: false });

    //   Setting button text
    const [buttonText, setButtonText] = useState("Send");

    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [showFailureMessage, setShowFailureMessage] = useState(false);

    const handleValidation = () => {
        let tempErrors = { fullname: false, email: false, subject: false, message: false };
        let isValid = true;

        if (fullname.length <= 0) {
            tempErrors["fullname"] = true;
            isValid = false;
        }
        if (email.length <= 0) {
            tempErrors["email"] = true;
            isValid = false;
        }
        if (subject.length <= 0) {
            tempErrors["subject"] = true;
            isValid = false;
        }
        if (message.length <= 0) {
            tempErrors["message"] = true;
            isValid = false;
        }

        setErrors({ ...tempErrors });
        console.log("errors", errors);
        return isValid;
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {

        if (!handleValidation()) {
            e.preventDefault();
            return false;
        }

        setButtonText("Sending");
        setShowSuccessMessage(true);
        setShowFailureMessage(false);
        setButtonText("Send");
        // Reset form fields
        setFullname("");
        setEmail("");
        setMessage("");
        setSubject("");
        // console.log(fullname, email, subject, message);
    };
    return (
        <div className="dark-bg flex-column about-text">
            <form
                onSubmit={handleSubmit}
                className=""
                action="https://public.herotofu.com/v1/d8155a60-7439-11ee-8bcd-4fcc9e7e7286"
                method="POST"
            >
                <h3 className="green flex3">
                    Send a message
                </h3>

                <div className="flex-row contact-field justify-center">
                    <label
                        htmlFor="fullname"
                        className="white"
                    >
                        Full name<span className="gray">*</span>
                    </label>
                    <input
                        type="text"
                        value={fullname}
                        size={inputSize}
                        onChange={(e) => {
                            setFullname(e.target.value);
                        }}
                        name="fullname"
                        className=""
                    />
                    {errors?.fullname && (
                        <p className="gray">Fullname cannot be empty.</p>
                    )}
                </div>
                <div className="flex-row contact-field justify-center">
                    <label
                        htmlFor="email"
                        className="white"
                    >
                        E-mail<span className="gray">*</span>
                    </label>
                    <input
                        type="email"
                        name="email"
                        value={email}
                        size={inputSize}
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                        className=""
                    />
                    {errors?.email && (
                        <p className="gray">Email cannot be empty.</p>
                    )}
                </div>
                <div className="flex-row contact-field justify-center">

                    <label
                        htmlFor="subject"
                        className="white"
                    >
                        Subject<span className="gray">*</span>
                    </label>
                    <input
                        type="text"
                        name="subject"
                        value={subject}
                        size={inputSize}
                        onChange={(e) => {
                            setSubject(e.target.value);
                        }}
                        className=""
                    />
                    {errors?.subject && (
                        <p className="gray">Subject cannot be empty.</p>
                    )}
                </div>
                <div className="flex-row contact-field justify-center">
                    <label
                        htmlFor="message"
                        className="white"
                    >
                        Message<span className="gray">*</span>
                    </label>
                    <textarea
                        name="message"
                        value={message}
                        cols={inputSize+7}
                        rows={10}
                        onChange={(e) => {
                            setMessage(e.target.value);
                        }}
                        className=""
                    ></textarea>
                    {errors?.message && (
                        <p className="gray">Message body cannot be empty.</p>
                    )}
                </div>
                <div className="flex flex-row justify-start">
                    <button
                        type="submit"
                        className="flex flex-row"
                    >
                        {buttonText}
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            className="text-cyan-500 ml-2"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M9.00967 5.12761H11.0097C12.1142 5.12761 13.468 5.89682 14.0335 6.8457L16.5089 11H21.0097C21.562 11 22.0097 11.4477 22.0097 12C22.0097 12.5523 21.562 13 21.0097 13H16.4138L13.9383 17.1543C13.3729 18.1032 12.0191 18.8724 10.9145 18.8724H8.91454L12.4138 13H5.42485L3.99036 15.4529H1.99036L4.00967 12L4.00967 11.967L2.00967 8.54712H4.00967L5.44417 11H12.5089L9.00967 5.12761Z"
                                fill="currentColor"
                            />
                        </svg>
                    </button>
                </div>
                <div className="text-left">
                    {showSuccessMessage && (
                        <p className="green">
                            Thank you! Your Message has been delivered.
                        </p>
                    )}
                    {showFailureMessage && (
                        <p className="green">
                            Oops! Something went wrong, please try again.
                        </p>
                    )}
                </div>
            </form>
        </div>
    );
}
