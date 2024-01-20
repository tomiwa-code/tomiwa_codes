import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Loading = () => {
  return (
    <div className="w-full flex flex-wrap justify-center items-center gap-6 md:gap-x-10 lg:gap-16 pb-20">
      {[0, 1].map((items, index) => (
        <div key={index}>
          <Skeleton
            className="rounded-lg py-5"
            style={{ width: "500px", height: "370px", borderRadius: "12px" }}
          />
        </div>
      ))}
    </div>
  );
};

export default Loading;
