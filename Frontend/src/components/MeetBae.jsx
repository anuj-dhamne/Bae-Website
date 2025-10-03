import React from "react";
import modelGif from "../assets/model.gif"; // replace with your GIF/image

export default function MeetBae() {
    return (
        <div className=" flex flex-col overflow-hidden">
            {/* Top pink bar */}
            <div className="h-[78px] w-full bg-[#FFD3DC]" />

            {/* Middle Section */}
            <div className="flex flex-1 w-full">
                {/* Left side */}
                <div className="w-1/2 bg-white flex flex-col">
                    {/* Title */}
                    <div className="p-8 ml-10">
                        <h1
                            className="italic text-[#961B1E] text-[60px] font-normal leading-tight"
                            style={{ fontFamily: "Instrument Serif, serif" }}
                        >
                            Meet BAE- Your AI powered <br /> fashion matchmaker
                        </h1>
                    </div>

                    {/* Yellow Content Box */}
                    {/* Yellow Content Box */}
                    <div className="bg-[#FFFFE2] p-8 flex flex-col gap-7 mb-12">
                        {/* Item 1 */}
                        <div className="flex flex-col gap-4">
                            <div className="flex gap-6 items-start ml-7">
                                <h2
                                    className="italic text-[70px] text-[#CC99D8] shrink-0"
                                    style={{ fontFamily: "Judson, serif" }}
                                >
                                    01
                                </h2>
                                <div>
                                    <h3 className="text-[28px] font-semibold text-[#65493B]">
                                        Handpicked Brands, All in One
                                    </h3>
                                    <p className="text-[24px] font-light text-[#65493B]">
                                        Find unique, curated brands you won’t see in the same old scroll.
                                    </p>
                                </div>
                            </div>
                            <hr className="border-t border-[#65493B] w-full ml-7" />
                        </div>

                        {/* Item 2 */}
                        <div className="flex flex-col gap-4">
                            <div className="flex gap-6 items-start ml-7">
                                <h2
                                    className="italic text-[70px] text-[#E96983] shrink-0"
                                    style={{ fontFamily: "Judson, serif" }}
                                >
                                    02
                                </h2>
                                <div>
                                    <h3 className="text-[28px] font-semibold text-[#65493B]">
                                        Swipe to Curate your feed
                                    </h3>
                                    <p className="text-[24px] font-light text-[#65493B]">
                                        Swipe right to like, left to dislike and build a style feed that
                                        feels 100% you
                                    </p>
                                </div>
                            </div>
                            <hr className="border-t border-[#65493B] w-full ml-7" />
                        </div>

                        {/* Item 3 */}
                        <div className="flex flex-col gap-4">
                            <div className="flex gap-6 items-start ml-7">
                                <h2
                                    className="italic text-[70px] text-[#BB9683] shrink-0"
                                    style={{ fontFamily: "Judson, serif" }}
                                >
                                    03
                                </h2>
                                <div>
                                    <h3 className="text-[28px] font-semibold text-[#65493B]">
                                        Personalized fashion
                                    </h3>
                                    <p className="text-[24px] font-light text-[#65493B]">
                                        Outfits tailored to your vibe, occasion and body type.
                                    </p>
                                </div>
                            </div>
                            <hr className="border-t border-[#65493B] w-full ml-7" />
                        </div>

                        {/* Item 4 */}
                        <div className="flex flex-col gap-4">
                            <div className="flex gap-6 items-start ml-7">
                                <h2
                                    className="italic text-[70px] text-[#BD797A] shrink-0"
                                    style={{ fontFamily: "Judson, serif" }}
                                >
                                    04
                                </h2>
                                <div>
                                    <h3 className="text-[28px] font-semibold text-[#65493B]">
                                        Ask me Anything Chatbot
                                    </h3>
                                    <p className="text-[24px] font-light text-[#65493B]">
                                        Like that one friend who always knows what suits you from outfits
                                        to brands you’ll love.
                                    </p>
                                </div>
                            </div>
                            {/* No line after last item (optional) */}
                        </div>
                    </div>

                </div>

                {/* Right side */}
                <div className="w-1/2 bg-[#FFE4EB] flex items-center justify-center">
                    <img
                        src={modelGif}
                        alt="Fashion Model"
                        className="max-h-[800px] object-contain"
                    />
                </div>
            </div>

            {/* Bottom pink bar */}
            <div className="h-[78px] w-full bg-[#FFD3DC]" />
        </div>
    );
}
