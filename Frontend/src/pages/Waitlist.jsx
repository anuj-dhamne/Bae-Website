import React, { useState } from "react";
import phone from "../assets/phone.png";
import mail from "../assets/mail.png";
import waitlistGif from "../assets/model.gif"; // replace with your GIF path

export default function Waitlist() {
  // ---------------------------
  // Step 1: Manage form state
  // ---------------------------
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    vibe: "",
    customVibe: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState("");

  // ---------------------------
  // Step 2: Handle input changes
  // ---------------------------
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // ---------------------------
  // Step 3: Submit data
  // ---------------------------
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("");

    console.log(" Form Data : ",formData);

    try {
      // ✅ If vibe is "Other", use the customVibe field
      const finalVibe =
        formData.vibe === "Other" ? formData.customVibe : formData.vibe;

      const dataToSend = {
        ...formData,
        vibe: finalVibe,
        timestamp: new Date().toLocaleString(),
      };

      console.log("Data to send:", dataToSend);

      // ✅ Google Apps Script Web App URL
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbxpbNtVV5X7L5atQAqwcNKtiVnfgFof_CyCzX2kMoOxn3P0WpnpWx0-XiTLNwzcplRY/exec",
        {
          method: "POST",
          mode: "no-cors", // required for Google Sheets API
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(dataToSend),
        }
      );

      console.log("response:", response);
      setStatus("✅ Thank you! You’ve joined the waitlist.");

      setFormData({
        name: "",
        phone: "",
        email: "",
        city: "",
        vibe: "",
        customVibe: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus("❌ Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // ---------------------------
  // Step 4: UI
  // ---------------------------
  return (
    <div className="relative w-full min-h-screen flex items-center justify-center bg-white font-['DM_Sans'] overflow-hidden">
      {/* Right pink background */}
      <div className="absolute right-0 top-0 h-full w-[35%] bg-[#FFE4EB] z-0" />

      {/* Main Container */}
      <div className="relative z-10 flex flex-col lg:flex-row w-[90%] lg:w-[85%] justify-between items-center py-12 lg:py-16 gap-10">
        {/* Left Form Section */}
        <div className="w-full lg:w-[55%] flex flex-col">
          <h1 className="text-[46px] font-semibold text-[#EF9CAD] leading-none">
            Join the <span className="text-[#961B1E]">Waitlist</span>
          </h1>
          <p className="text-[#3A3A3A] text-[14px] mt-2">
            Sign up to get early updates, drops, and special surprises.
          </p>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-6 mt-8 w-full max-w-[520px]"
          >
            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border-b border-[#8E8E8E] text-[14px] text-[#8E8E8E] pb-2 focus:outline-none"
              required
            />

            <input
              type="text"
              name="phone"
              placeholder="Contact Phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border-b border-[#8E8E8E] text-[14px] text-[#8E8E8E] pb-2 focus:outline-none"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Contact E-mail"
              value={formData.email}
              onChange={handleChange}
              className="w-full border-b border-[#8E8E8E] text-[14px] text-[#8E8E8E] pb-2 focus:outline-none"
              required
            />

            {/* City + Vibe */}
            <div className="flex gap-4">
              {/* City dropdown */}
              <select
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="w-1/2 border-b border-[#8E8E8E] text-[14px] text-[#8E8E8E] bg-transparent pb-2 focus:outline-none"
                required
              >
                <option value="">City</option>
                <option value="Pune">Pune</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Delhi">Delhi</option>
                <option value="Bangalore">Bangalore</option>
                <option value="Hyderabad">Hyderabad</option>
                <option value="Chennai">Chennai</option>
                <option value="Kolkata">Kolkata</option>
                <option value="Ahmedabad">Ahmedabad</option>
                <option value="Nagpur">Nagpur</option>
                <option value="Indore">Indore</option>
                <option value="Jaipur">Jaipur</option>
                <option value="Lucknow">Lucknow</option>
                <option value="Surat">Surat</option>
                <option value="Bhopal">Bhopal</option>
                <option value="Others">Others</option>
              </select>

              {/* Vibe dropdown */}
              <div className="w-1/2">
                <select
                  name="vibe"
                  value={formData.vibe}
                  onChange={handleChange}
                  className="w-full border-b border-[#8E8E8E] text-[14px] text-[#8E8E8E] bg-transparent pb-2 focus:outline-none"
                  required
                >
                  <option value="">Vibe</option>
                  <option value="Old Money">Old Money</option>
                  <option value="Soft girl/Coquette">
                    Soft girl/Coquette
                  </option>
                  <option value="Clean Girl">Clean Girl</option>
                  <option value="Baddie">Baddie</option>
                  <option value="Street Style">Street Style</option>
                  <option value="Basic Girl">Basic Girl</option>
                  <option value="Other">Other</option>
                </select>

                {/* ✅ Custom input appears when 'Other' selected */}
                {formData.vibe === "Other" && (
                  <input
                    type="text"
                    name="customVibe"
                    value={formData.customVibe}
                    onChange={handleChange}
                    placeholder="Enter your vibe"
                    className="w-full mt-2 border-b border-[#8E8E8E] text-[14px] text-[#8E8E8E] pb-2 focus:outline-none"
                    autoFocus
                    required
                  />
                )}
              </div>
            </div>

            {/* Submit button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-[#961B1E] text-white text-[14px] py-3 rounded-full mt-2 hover:bg-[#7e1719] transition"
            >
              {isSubmitting ? "Submitting..." : "SUBMIT"}
            </button>

            {status && (
              <p className="text-[#961B1E] text-[13px] mt-2">{status}</p>
            )}

            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row justify-between items-start mt-10 w-full max-w-[520px] gap-6">
              {/* Email */}
              <div className="flex items-start gap-3">
                <img src={mail} alt="mail" className="w-5 h-5 mt-[2px]" />
                <div className="flex flex-col leading-tight">
                  <span className="text-[14px] font-semibold text-black">
                    E-MAIL
                  </span>
                  <a
                    href="mailto:asshna@shopwithbae.com"
                    className="text-[#77191B] text-[13px]"
                  >
                    asshna@shopwithbae.com
                  </a>
                </div>
              </div>

              {/* Helpdesk */}
              <div className="flex items-start gap-3">
                <img src={mail} alt="helpdesk" className="w-5 h-5 mt-[2px]" />
                <div className="flex flex-col leading-tight">
                  <span className="text-[14px] font-semibold text-black">
                    HELPDESK
                  </span>
                  <a
                    href="mailto:inquiries@shopwithbae.com"
                    className="text-[#77191B] text-[13px]"
                  >
                    inquiries@shopwithbae.com
                  </a>
                </div>
              </div>
            </div>
          </form>
        </div>

        {/* Right GIF Section */}
        <div className="w-full lg:w-[45%] flex justify-center">
          <img
            src={waitlistGif}
            alt="Waitlist Animation"
            className="rounded-full w-[650px] lg:w-[650px] object-cover"
          />
        </div>
      </div>
    </div>
  );
}
