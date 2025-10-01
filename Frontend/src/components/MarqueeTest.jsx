import "./marquee.css"; // import css file

export default function MarqueeTest() {
  return (
    <div className="w-full h-[100px] bg-[#FFD3DC] flex items-center overflow-hidden relative">
      <div className="animate-marquee flex whitespace-nowrap">
        <span className="mx-8 text-[#961B1E] text-[24px] font-bold">
          DOES THIS SOUND LIKE YOU? ☺
        </span>
        <span className="mx-8 text-[#961B1E] text-[24px] font-bold">
          DOES THIS SOUND LIKE YOU? ☺
        </span>
        <span className="mx-8 text-[#961B1E] text-[24px] font-bold">
          DOES THIS SOUND LIKE YOU? ☺
        </span>
        <span className="mx-8 text-[#961B1E] text-[24px] font-bold">
          DOES THIS SOUND LIKE YOU? ☺
        </span>
      </div>
    </div>
  );
}
