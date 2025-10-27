import React, { useState, useRef } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { HiOutlineUpload } from "react-icons/hi";
import brandImg from "../assets/Partner.png"; // replace with your image path
import phone from '../assets/phone.png'
import mail from '../assets/mail.png'

export default function ContactUs() {
  const [price, setPrice] = useState(2500);
  const fileInputRef = useRef(null);

  // Handle click on upload box
  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  return (
    <div className="relative w-full min-h-screen flex items-center justify-center bg-white font-['DM_Sans'] overflow-hidden">
      {/* Left pink background strip */}
      <div className="absolute right-0 top-0 h-full w-[30%] bg-[#FFE4EB] z-0" />

      {/* Main container */}
      <div className="relative z-10 flex flex-col lg:flex-row w-[90%] lg:w-[85%] justify-between items-center py-12 lg:py-16 gap-10">
        {/* Left Form Section */}
        <div className="w-full lg:w-[55%] flex flex-col">
          {/* Title */}
          <h1 className="text-[46px] font-semibold text-[#EF9CAD] leading-none">
            Register your <span className="text-[#961B1E]">Brand</span>
          </h1>
          <p className="text-[#3A3A3A] text-[14px] mt-2">
            Be part of the next wave of fashion brands making an impact.
          </p>

          {/* Form */}
          <form className="flex flex-col gap-6 mt-8 w-full max-w-[520px]">
            {/* Input Fields */}
            <input
              type="text"
              placeholder="Brand name"
              className="w-full border-b border-[#8E8E8E] text-[14px] text-[#8E8E8E] pb-2 focus:outline-none"
            />
            <input
              type="text"
              placeholder="Founder’s name or email ID"
              className="w-full border-b border-[#8E8E8E] text-[14px] text-[#8E8E8E] pb-2 focus:outline-none"
            />
            <div className="flex gap-3">
              <input
                type="text"
                placeholder="Website link/ Instagram link"
                className="w-full border-b border-[#8E8E8E] text-[14px] text-[#8E8E8E] pb-2 focus:outline-none"
              />
              <select className="border-b border-[#8E8E8E] text-[14px] text-[#8E8E8E] bg-transparent pb-2 focus:outline-none w-[40%]">
                <option value="">Product type</option>
                <option value="clothing">Clothing</option>
                <option value="accessories">Accessories</option>
                <option value="footwear">Footwear</option>

                                              {/* ✨ Soft Girl
                              💼 Old Money
                              🔥 Baddie
                              👟 Streetwear
                              🖤 Minimalist
                              💿 Y2K
                              🌸 Coquette
                              🤍 Othe */}
              </select>
            </div>
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

            {/* Range Selector */}
            <div className="flex flex-col mt-2">
              <label className="text-[14px] text-[#8E8E8E] mb-1">
                Select Price range
              </label>
              <input
                type="range"
                min="2500"
                max="5000"
                value={price}
                onChange={handlePriceChange}
                className="w-full h-[4px] appearance-none rounded-lg outline-none accent-[#A02020]"
                style={{
                  background: `linear-gradient(to right, #A02020 ${(price - 2500) / 25}%, #E8E8E8 ${(price - 2500) / 25}%)`,
                }}
              />
              <div className="flex justify-between text-[13px] text-[#8E8E8E] mt-1">
                <span>2500</span>
                <span>{price}</span>
                <span>5000</span>
              </div>
            </div>

            {/* Upload Box */}
            <div
              onClick={handleUploadClick}
              className="border border-dashed border-[#8E8E8E] rounded-lg h-[110px] flex flex-col justify-center items-center cursor-pointer hover:bg-[#fff8fa] transition"
            >
              <HiOutlineUpload className="text-[#8E8E8E] text-2xl mb-2" />
              <p className="text-[#8E8E8E] text-[14px]">Upload Catalog</p>
              <input
                ref={fileInputRef}
                type="file"
                className="hidden"
                accept=".pdf,.jpg,.png,.docx"
              />
            </div>
            <p className="text-[#8E8E8E] text-[13px] -mt-3">
              Attach file. File size of your documents should not exceed 10MB
            </p>

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

        {/* Right Image Section */}
        <div className="w-full lg:w-[45%] flex justify-center">
          <img
            src={brandImg}
            alt="Brand Registration"
            className="rounded-2xl w-[460px] lg:w-[520px] object-cover "
          />
        </div>
      </div>
    </div>
  );
}
