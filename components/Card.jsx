import React from "react";

const Card = ({ title, content }) => {
  return (
    <div className="relative h-1/2 text-justify m-4 bg-white p-2 rounded-lg shadow-lg">
      <h1 className="text-xl text-telekom-magenta text-center">{title}</h1>
      <p>
          {content}
      </p>
      <button className="absolute bottom-0 right-0 bg-telekom-magenta p-4 rounded-xl m-4 hover:bg-telekom-magenta transition duration-200 hover:translate-y-5">
        Klick mich
      </button>
    </div>
  );
};

export default Card;
