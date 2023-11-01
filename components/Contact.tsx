import React, { useState } from "react";
import Image from "next/image";

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
        <section id="contact" className="flex flex-col grow items-center px-4 mt-12 mb-8">
            <div className="flex flex-col grow items-center">
                    <h3 className="text-green-500 mb-4 font-medium text-2xl italic text-justify">
                        Send a message
                    </h3>
                    <p className="text-white font-medium text-base text-justify">
                        E-mail: <a href="mailto:dbratti@gmail.com" className="no-underline decoration-inherit">dbratti@gmail.com</a>
                    </p>
                    <p className="text-white font-medium text-base text-justify mt-2">
                        Phone: <a href="tel:+5548999518667" className="no-underline decoration-inherit">+55 48 99951 8667 </a><a href="https://web.whatsapp.com/send?phone=5548999518667"><Image src="/icons/whatsapp.svg" width={24} height={24} alt="whatsapp-icon" /></a>
                    </p>
                <form
                    onSubmit={handleSubmit}
                    className="mt-4 flex flex-col items-center w-full max-w-xs"
                    action="https://public.herotofu.com/v1/d8155a60-7439-11ee-8bcd-4fcc9e7e7286"
                    method="POST"
                >

                    <div className="flex flex-col md:flex-row items-center justify-center">
                        <label
                            htmlFor="fullname"
                            className="text-white after:content-['*'] after:ml-0.5 after:text-red-500"
                        >
                            Full name
                        </label>
                        <input
                            type="text"
                            value={fullname}
                            size={inputSize}
                            onChange={(e) => {
                                setFullname(e.target.value);
                            }}
                            name="fullname"
                            className="md:ml-8 w-11/12"
                        />
                        {errors?.fullname && (
                            <p className="text-neutral-500 md:ml-8">Fullname cannot be empty.</p>
                        )}
                    </div>
                    <div className="flex flex-col md:flex-row items-center justify-center mt-2">
                        <label
                            htmlFor="email"
                            className="text-white after:content-['*'] after:ml-0.5 after:text-red-500"
                        >
                            E-mail
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={email}
                            size={inputSize}
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}
                            className="md:ml-8 w-11/12"
                        />
                        {errors?.email && (
                            <p className="text-neutral-500 md:ml-8">Email cannot be empty.</p>
                        )}
                    </div>
                    <div className="flex flex-col md:flex-row items-center justify-center mt-2">

                        <label
                            htmlFor="subject"
                            className="text-white after:content-['*'] after:ml-0.5 after:text-red-500"
                        >
                            Subject
                        </label>
                        <input
                            type="text"
                            name="subject"
                            value={subject}
                            size={inputSize}
                            onChange={(e) => {
                                setSubject(e.target.value);
                            }}
                            className="md:ml-8 w-11/12"
                        />
                        {errors?.subject && (
                            <p className="text-neutral-500 md:ml-8">Subject cannot be empty.</p>
                        )}
                    </div>
                    <div className="flex flex-col md:flex-row items-center justify-center mt-2">
                        <label
                            htmlFor="message"
                            className="text-white after:content-['*'] after:ml-0.5 after:text-red-500"
                        >
                            Message
                        </label>
                        <textarea
                            name="message"
                            value={message}
                            cols={inputSize + 7}
                            rows={10}
                            onChange={(e) => {
                                setMessage(e.target.value);
                            }}
                            className="md:ml-8 w-11/12"
                        ></textarea>
                        {errors?.message && (
                            <p className="text-neutral-500 md:ml-8 font-medium text-base text-justify">Message body cannot be empty.</p>
                        )}
                    </div>
                    <div className="flex flex-row items-center justify-start mt-4">
                        <button
                            type="submit"
                            className="flex flex-row border-0 rounded-sm py-2 px-4 bg-green-500 text-zinc-800 cursor-pointer font-semibold text-sm"
                        >
                            {buttonText}
                            <Image src="/icons/airplane.svg" width={24} height={24} alt="send-icon" />
                        </button>
                    </div>
                    <div className="text-left">
                        {showSuccessMessage && (
                            <p className="text-green-500 font-medium text-base text-justify">
                                Thank you! Your Message has been delivered.
                            </p>
                        )}
                        {showFailureMessage && (
                            <p className="text-green-500 font-medium text-base text-justify">
                                Oops! Something went wrong, please try again.
                            </p>
                        )}
                    </div>
                </form>
            </div>
        </section>
    );
}
