import React from "react";
import phone from "../assets/phone.png";
import mail from "../assets/mail.png";
import waitlistGif from "../assets/model.gif"; // replace with your GIF path

export default function Waitlist() {
  return (
    <div className="relative w-full min-h-screen flex items-center justify-center bg-white font-['DM_Sans'] overflow-hidden">
      {/* Right pink background */}
      <div className="absolute right-0 top-0 h-full w-[35%] bg-[#FFE4EB] z-0 " />

      {/* Main Container */}
      <div className="relative z-10 flex flex-col lg:flex-row w-[90%] lg:w-[85%] justify-between items-center py-12 lg:py-16 gap-10">
        {/* Left Form Section */}
        <div className="w-full lg:w-[55%] flex flex-col">
          {/* Title */}
          <h1 className="text-[46px] font-semibold text-[#EF9CAD] leading-none">
            Join the <span className="text-[#961B1E]">Waitlist</span>
          </h1>
          <p className="text-[#3A3A3A] text-[14px] mt-2">
            Sign up to get early updates, drops, and special surprises.
          </p>

          {/* Form */}
          <form className="flex flex-col gap-6 mt-8 w-full max-w-[520px]">
            <input
              type="text"
              placeholder="Your name"
              className="w-full border-b border-[#8E8E8E] text-[14px] text-[#8E8E8E] pb-2 focus:outline-none"
            />
            <input
              type="text"
              placeholder="Contact Phone"
              className="w-full border-b border-[#8E8E8E] text-[14px] text-[#8E8E8E] pb-2 focus:outline-none"
            />
            <input
              type="email"
              placeholder="Contact E-mail"
              className="w-full border-b border-[#8E8E8E] text-[14px] text-[#8E8E8E] pb-2 focus:outline-none"
            />

            <div className="flex gap-4">
              <select className="w-1/2 border-b border-[#8E8E8E] text-[14px] text-[#8E8E8E] bg-transparent pb-2 focus:outline-none">
                <option value="">City</option>
                <option value="pune">Pune</option>
                <option value="mumbai">Mumbai</option>
                <option value="delhi">Delhi</option>
              </select>
              <select className="w-1/2 border-b border-[#8E8E8E] text-[14px] text-[#8E8E8E] bg-transparent pb-2 focus:outline-none">
                <option value="">Vibe</option>
                <option value="casual">Old Money</option>
                <option value="formal">Soft girl/Coquette</option>
                <option value="party">Clean Girl</option>
                <option value="party">Baddie</option>
                <option value="party">Street Style</option>
                <option value="party">Basic Girl</option>
              </select>
            </div>



            {/* Submit Button */}
            <button
              type="submit"
              className="bg-[#961B1E] text-white text-[14px] py-3 rounded-full mt-2 hover:bg-[#7e1719] transition"
            >
              SUBMIT
            </button>

            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row justify-between items-start mt-10 w-full max-w-[520px] gap-6">
              {/* Phone */}
              {/* <div className="flex items-start gap-3">
                <img src={phone} alt="phone" className="w-5 h-5 mt-[2px]" />
                <div className="flex flex-col leading-tight">
                  <span className="text-[14px] font-semibold text-black">
                    Phone
                  </span>
                  <a
                    href="tel:9833030322"
                    className="text-[#77191B] text-[13px]"
                  >
                    9833030322
                  </a>
                </div>
              </div> */}

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
