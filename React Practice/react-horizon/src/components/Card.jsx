import React from "react";

const Card = () => {
  return (
    <div>
      <h1 className="text-center margin- [2rem] font-xl">PLANS</h1>

      <div className="flex justify-evenly mx-2">
        <div className="h-[25rem] w-[16rem] rounded-lg border border-slate-400 p-1">
          <img className="object-cover" src="src/assets/images/card 1.jpg" alt=""></img>
          <div className=" text-center mt-4">
            <h2>VIRTUAL OFFICES</h2>
            <p>
              Our virtual offices allow your businessto get to get our location
              addreses, phone services and also you become a member of our
              community with benefits such as access to our meeting rooms.{" "}
            </p>
          </div>
        </div>
        <div className="h-[25rem] w-[16rem] rounded-lg border border-slate-400 p-1">
          <img className="object-cover" src="src/assets/images/card 2.jpg" alt=""></img>
          <div className=" text-center mt-4">
            <h2>VIRTUAL OFFICES</h2>
            <p>
              Our virtual offices allow your businessto get to get our location
              addreses, phone services and also you become a member of our
              community with benefits such as access to our meeting rooms.{" "}
            </p>
          </div>
        </div>
        <div className="h-[25rem] w-[16rem] rounded-lg border border-slate-400 p-1">
          <img className="object-cover" src="src/assets/images/card 3.jpg" alt=""></img>
          <div className=" text-center mt-4">
            <h2>VIRTUAL OFFICES</h2>
            <p>
              Our virtual offices allow your businessto get to get our location
              addreses, phone services and also you become a member of our
              community with benefits such as access to our meeting rooms.{" "}
            </p>
          </div>
        </div>
        <div className="h-[25rem] w-[16rem] rounded-lg border border-slate-400 p-1">
          <img className="object-cover" src="src/assets/images/card 3.jpg" alt=""></img>
          <div className=" text-center mt-4">
            <h2>VIRTUAL OFFICES</h2>
            <p>
              Our virtual offices allow your businessto get to get our location
              addreses, phone services and also you become a member of our
              community with benefits such as access to our meeting rooms.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
