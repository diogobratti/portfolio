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
        <div className="flex flex-col grow items-center">
            <form
                onSubmit={handleSubmit}
                className=""
                action="https://public.herotofu.com/v1/d8155a60-7439-11ee-8bcd-4fcc9e7e7286"
                method="POST"
            >
                <h3 className="text-green-400 mb-4 font-medium text-2xl italic text-justify">
                    Send a message
                </h3>
                <p className="text-white font-medium text-base text-justify">
                    E-mail: <a href="mailto:dbratti@gmail.com" className="no-underline decoration-inherit">dbratti@gmail.com</a>
                </p>
                <p className="text-white font-medium text-base text-justify">
                    Phone: <a href="tel:+5548999518667" className="no-underline decoration-inherit">+55 48 99951 8667</a>
                </p>

                <div className="flex flex-row items-center justify-center">
                    <label
                        htmlFor="fullname"
                        className="text-white"
                    >
                        Full name<span className="text-neutral-500">*</span>
                    </label>
                    <input
                        type="text"
                        value={fullname}
                        size={inputSize}
                        onChange={(e) => {
                            setFullname(e.target.value);
                        }}
                        name="fullname"
                        className="ml-8"
                    />
                    {errors?.fullname && (
                        <p className="text-neutral-500 ml-8">Fullname cannot be empty.</p>
                    )}
                </div>
                <div className="flex flex-row items-center justify-center">
                    <label
                        htmlFor="email"
                        className="text-white"
                    >
                        E-mail<span className="text-neutral-500">*</span>
                    </label>
                    <input
                        type="email"
                        name="email"
                        value={email}
                        size={inputSize}
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                        className="ml-8"
                    />
                    {errors?.email && (
                        <p className="text-neutral-500 ml-8">Email cannot be empty.</p>
                    )}
                </div>
                <div className="flex flex-row items-center justify-center">

                    <label
                        htmlFor="subject"
                        className="text-white"
                    >
                        Subject<span className="text-neutral-500">*</span>
                    </label>
                    <input
                        type="text"
                        name="subject"
                        value={subject}
                        size={inputSize}
                        onChange={(e) => {
                            setSubject(e.target.value);
                        }}
                        className="ml-8"
                    />
                    {errors?.subject && (
                        <p className="text-neutral-500 ml-8">Subject cannot be empty.</p>
                    )}
                </div>
                <div className="flex flex-row items-center justify-center">
                    <label
                        htmlFor="message"
                        className="text-white"
                    >
                        Message<span className="text-neutral-500">*</span>
                    </label>
                    <textarea
                        name="message"
                        value={message}
                        cols={inputSize + 7}
                        rows={10}
                        onChange={(e) => {
                            setMessage(e.target.value);
                        }}
                        className="ml-8"
                    ></textarea>
                    {errors?.message && (
                        <p className="text-neutral-500 ml-8 font-medium text-base text-justify">Message body cannot be empty.</p>
                    )}
                </div>
                <div className="flex flex-row items-center justify-start">
                    <button
                        type="submit"
                        className="flex flex-row border-0 rounded-sm py-2 px-4 bg-green-400 text-zinc-800 cursor-pointer font-semibold text-sm"
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
                        <p className="text-green-400 font-medium text-base text-justify">
                            Thank you! Your Message has been delivered.
                        </p>
                    )}
                    {showFailureMessage && (
                        <p className="text-green-400 font-medium text-base text-justify">
                            Oops! Something went wrong, please try again.
                        </p>
                    )}
                </div>
            </form>
        </div>
    );
}
