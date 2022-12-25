import React from "react";
import TeamCard from "./TeamCard";
import SectionTitle from "../SectionTitle/index";
import TeamImg1 from "../../assets/Team/team-1.jpg";
import TeamImg2 from "../../assets/Team/team-2.jpg";
import TeamImg3 from "../../assets/Team/team-3.jpg";
import TeamImg4 from "../../assets/Team/team-4.jpg";
// slider imports
import ReactSlider from "react-slick";
import "slick-carousel/slick/slick.css";

const Team = () => {
  const title1 = "Creative Leaders";
  const title2 = "Our Professional Members";
  // slider
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    centerMode: false,
    responsive: [
      {
        breakpoint: 1066,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 766,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="py-28">
      <div className="mx-auto max-w-7xl">
        <div className="flex justify-center Slider-titles pb-10">
          <SectionTitle headsm={title1} headbig={title2} />
        </div>
        {/* team slider */}
        <ReactSlider {...settings}>
          <div data-aos="slide-left" data-aos-delay="100">
            <TeamCard
              profession="UI/UX Desinger"
              Name="Stipenson Robert"
              teamImg={TeamImg1}
            />
          </div>
          <div data-aos="slide-left" data-aos-delay="200">
            <TeamCard
              profession="UI/UX Desinger"
              Name="Daniel Stiven"
              teamImg={TeamImg2}
            />
          </div>
          <div data-aos="slide-left" data-aos-delay="300">
            <TeamCard
              profession="UI/UX Desinger"
              Name="Rubila Leova"
              teamImg={TeamImg3}
            />
          </div>
          <div data-aos="slide-left" data-aos-delay="400">
            <TeamCard
              profession="UI/UX Desinger"
              Name="Hele Josef"
              teamImg={TeamImg4}
            />
          </div>
          <TeamCard
            profession="UI/UX Desinger"
            Name="Stipenson Robert"
            teamImg={TeamImg1}
          />
          <TeamCard
            profession="UI/UX Desinger"
            Name="Daniel Stiven"
            teamImg={TeamImg2}
          />
          <TeamCard
            profession="UI/UX Desinger"
            Name="Rubila Leova"
            teamImg={TeamImg3}
          />
          <TeamCard
            profession="UI/UX Desinger"
            Name="Hele Josef"
            teamImg={TeamImg4}
          />
        </ReactSlider>
      </div>
    </section>
  );
};

export default Team;
