import { CursorTarget } from "@izhann/react-cursor-fx";
import React, { useRef, useState } from "react";

const ContactForm = () => {
  const formRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitted(false);
    setError(false);

    const formData = new FormData(formRef.current);

    try {
      const res = await fetch("https://formsubmit.co/hckrman101@gmail.com", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      if (res.ok) {
        setSubmitted(true);
        formRef.current.reset(); // Clear form
      } else {
        throw new Error("Submission failed");
      }
    } catch (err) {
      console.error(err);
      setError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="w-full md:w-1/2">
      <div className="flex flex-col gap-10 pt-10 text-white outfit">
        <div className="flex gap-5 w-full">
          <input
            name="name"
            className="placeholder:text-stone-400 py-3 border-b border-white w-full outline-0"
            type="text"
            placeholder="Name"
            required
          />
          <input
            name="email"
            className="placeholder:text-stone-400 py-3 border-b border-white w-full outline-0"
            type="email"
            placeholder="Email"
            required
          />
        </div>
        <input
          name="interest"
          className="placeholder:text-stone-400 py-3 border-b border-white w-full outline-0"
          type="text"
          placeholder="I'm interested in ..."
        />
        <textarea
          name="message"
          className="placeholder:text-stone-400 py-3 border-b border-white w-full outline-0"
          placeholder="About your project"
          rows={5}
          required
        />
        <div className="w-max">
          <CursorTarget variant="submitText">
          <button
            type="submit"
            className="w-max h-max text-lg bg-white text-black px-5 py-1 rounded-sm rounded-br-3xl hover:drop-shadow-[3px_3px_0px_black] transition-all duration-300 border-2 border-white hover:border-black"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "submit."}
          </button>
          </CursorTarget>
        </div>
        {submitted && (
          <div className="text-green-400 text-sm pt-2">✅ Message sent successfully!</div>
        )}
        {error && (
          <div className="text-red-400 text-sm pt-2">❌ There was a problem sending the message.</div>
        )}
      </div>
    </form>
  );
};

export default ContactForm;
