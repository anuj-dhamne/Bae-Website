import React, { useState, useRef } from "react";
import { HiOutlineUpload } from "react-icons/hi";
import brandImg from "../assets/Partner.png"; // replace with your image path

export default function ContactUs() {
  const [price, setPrice] = useState(2500);
  const fileInputRef = useRef(null);

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  return (
    <div className="w-full min-h-screen flex justify-center items-center bg-[#0C1E29] py-16 font-['DM_Sans']">
      {/* White + Pink Section */}
      <div className="relative w-[90%] max-w-[1050px] bg-white rounded-[30px] overflow-hidden shadow-xl flex flex-col lg:flex-row items-stretch">
        {/* Form Section */}
        <div className="flex-1 px-10 lg:px-14 py-10 flex flex-col justify-between">
          <div>
            {/* Heading */}
            <h1 className="text-[42px] font-semibold text-[#B12B2B]">
              Register your <span className="text-[#76191A]">Brand</span>
            </h1>
            <p className="text-[#333] text-[14px] mt-2">
              Be part of the next wave of fashion brands making an impact.
            </p>

            {/* Form */}
            <form className="flex flex-col gap-6 mt-10">
              <input
                type="text"
                placeholder="Brand name"
                className="border-b border-[#D0D0D0] text-[14px] text-[#555] pb-2 focus:outline-none"
              />
              <input
                type="text"
                placeholder="Founder’s name or email ID"
                className="border-b border-[#D0D0D0] text-[14px] text-[#555] pb-2 focus:outline-none"
              />
              <div className="flex gap-3">
                <input
                  type="text"
                  placeholder="Website link/ Instagram link"
                  className="w-full border-b border-[#D0D0D0] text-[14px] text-[#555] pb-2 focus:outline-none"
                />
                <select className="border-b border-[#D0D0D0] text-[14px] text-[#555] bg-transparent pb-2 focus:outline-none w-[45%]">
                  <option value="">Product type</option>
                  <option value="clothing">Clothing</option>
                  <option value="accessories">Accessories</option>
                  <option value="footwear">Footwear</option>
                </select>
              </div>
              <input
                type="text"
                placeholder="Contact Phone"
                className="border-b border-[#D0D0D0] text-[14px] text-[#555] pb-2 focus:outline-none"
              />
              <input
                type="email"
                placeholder="Contact E-mail"
                className="border-b border-[#D0D0D0] text-[14px] text-[#555] pb-2 focus:outline-none"
              />

              {/* Range Slider */}
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
                className="border border-dashed border-[#C0C0C0] rounded-lg h-[110px] flex flex-col justify-center items-center cursor-pointer hover:bg-[#FFF7F8] transition"
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
                className="bg-[#9C1E1E] text-white text-[14px] py-3 rounded-full mt-2 hover:bg-[#7e1719] transition"
              >
                SUBMIT
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="flex justify-between items-center text-[14px] text-[#3A3A3A] mt-8 flex-wrap gap-5">
            <div className="flex items-center gap-2 cursor-pointer">
              <img src="/icons/phone.png" alt="phone" className="w-4 h-4" />
              <a href="tel:9833030322" className="hover:text-[#9C1E1E]">
                98330 30322
              </a>
            </div>
            <div className="flex items-center gap-2 cursor-pointer">
              <img src="/icons/mail.png" alt="mail" className="w-4 h-4" />
              <a
                href="mailto:aashna@shopwithbae.com"
                className="hover:text-[#9C1E1E]"
              >
                aashna@shopwithbae.com
              </a>
            </div>
            <div className="flex items-center gap-2 cursor-pointer">
              <img src="/icons/help.png" alt="help" className="w-4 h-4" />
              <a
                href="mailto:inquiries@shopwithbae.com"
                className="hover:text-[#9C1E1E]"
              >
                inquiries@shopwithbae.com
              </a>
            </div>
          </div>
        </div>

        {/* Pink Background + Image Section */}
        <div className="relative w-full lg:w-[45%] bg-[#FFE4EB] flex justify-center items-center p-10">
          <img
            src={brandImg}
            alt="Brand"
            className="w-[420px] lg:w-[460px] rounded-3xl object-cover"
          />
        </div>
      </div>
    </div>
  );
}
