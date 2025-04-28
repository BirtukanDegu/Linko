import React from "react";

const Home = () => {
  return (
    <div className="w-1/2">
      <div className="flex flex-col gap-8">
        <div className="flex items-center border border-brand-light-purple rounded-xl p-5 gap-5 cursor-pointer transition-all duration-500 hover:bg-white/80 hover:opacity-80">
          <img
            className="rounded-xl w-[50px] h-[50px]"
            src="/images/sample/3.jpeg"
            alt="avatar"
          />
          <span className="text-sm font-medium border border-brand-light-purple bg-brand-pink/10 text-light-text p-4 w-full rounded-lg">
            What's new Lana?
          </span>
        </div>

        <div className="flex flex-col gap-8">
          {[1, 2].map((_, i) => (
            <div
              key={i}
              className="flex flex-col border border-brand-light-purple rounded-xl p-5 gap-5 cursor-pointer transition-all duration-500"
            >
              <div className="flex items-center gap-3">
                <img
                  className="rounded-xl w-[50px] h-[50px]"
                  src="/images/sample/3.jpeg"
                  alt="avatar"
                />
                <div>
                  <h4 className="text-[#1d3a5f]">Lana Del Rey</h4>
                  <span className="text-xs font-normal text-light-text">
                    12 hours ago
                  </span>
                </div>
              </div>
              <div className="text-[#1d3a5f] font-normal">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo
                quibusdam assumenda id exercitationem aliquam pariatur, rerum
                facilis sed adipisci tempora.
              </div>
              <div className="flex justify-center items-center rounded-xl bg-brand-pink/15">
                <img
                  className="rounded-xl w-full aspect-[3/2] object-contain"
                  src={
                    i === 0 ? "/images/sample/2.jpeg" : "/images/sample/1.jpeg"
                  }
                  alt="post"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
