import React from "react";
// Props  

const Card = ({userName, btnText="Visit Me"}) => { // or you can do in cons Card =(props.userName), btnText is default value for visit me 
    console.log(userName);
  return (
    <div className="flex flex-col rounded-xl  p-4"
        style={{
          border: '0.88px solid',
  
          backdropFilter: 'saturate(180%) blur(14px)',
          background: ' #ffffff0d',
        }}
      >
        <div>
          <img
            src="https://res.cloudinary.com/ddcg0rzlo/image/upload/v1652470298/9StaF0UBJfih_df0248.gif"
            alt="nft-gif"
            width="400"
            height="400"
            className="rounded-xl"
          />
        </div>
        <div className="flex flex-col  rounded-b-xl py-4 ">
          <div className="flex justify-between">
            <h1 className="font-RubikBold ">{userName}</h1>
            <h1 className="font-bold font-RubikBold">Rupees</h1>
          </div>
          <div className="flex  justify-between font-mono">
            <p>#345</p>
            <p>0.01</p>
            <button className="bg-blue-500 text-white p-2 rounded-md">{btnText}</button>
          </div>
        </div>
      </div>
  )
};

export default Card;