import React from "react";

const SectionTitle = ({ subHeading, heading }) => {
  return (
    <div className="section-title-wrapper mb-4">
      <div className="section-wrapper-container w-[350px] m-auto">
        <div className="section-title-row  flex flex-col gap-3 justify-center items-center">
          <div className="section-subHeading-title">
            {subHeading ? subHeading : ""}
          </div>
          <div className="section-title-border border border-[#e8e8e8] w-full"></div>
          <div className="section-heading-title text-[40px] font-semibold">{heading ? heading : ""}</div>
          <div className="section-title-border border border-[#e8e8e8] w-full"></div>
        </div>
      </div>
    </div>
  );
};

export default SectionTitle;
