import React from "react";

const SectionTitle = (props: any) => {
  return (
    <div data-aos="fade-up-left" data-aos-delay="100">
      <h5 className="text-[#F1554C] text-lg font-semibold">{props.headsm}</h5>
      <h1 className="text-[#10131F] text-5xl font-semibold pt-5 pb-8">
        {props.headbig}
      </h1>
    </div>
  );
};

export default SectionTitle;
