import React from "react";

function ListCard() {
  return (
    <div className=" ">
      <div className="customGrid py-2">
        <div>
          <h2 className="text-lg leading-5 font-semibold">
            In conclusion, catfish is a nutrient-dense and delicious seafood.
          </h2>
        </div>
        <div className=" bg-slate-700   w-[116px] h-[100px] ">
          <img
            className="w-full h-full bg-slate-400"
            src="https://images.unsplash.com/photo-1693418161641-99928097b5ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80"
            alt="Shoes"
          />
        </div>
      </div>
    </div>
  );
}

export default ListCard;
