import React from "react";
import Image from "next/image";
import CountImg1 from "../../assets/counter/count-icon-1.png";
import CountImg2 from "../../assets/counter/count-icon-2.png";
import CountImg3 from "../../assets/counter/count-icon-3.png";
import CountImg4 from "../../assets/counter/count-icon-4.png";

class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      count1: 0,
      count2: 0,
      count3: 0,
      count4: 0,
      titles: {
        tOne: "Project Completed",
        tTwo: "Years Of Experience",
        tThree: "Satisfied Customers",
        tFour: "Winning Award",
      },
    };
  }
  counter1 = (minimum, maximum) => {
    for (let count1 = minimum; count1 <= maximum; count1++) {
      setTimeout(() => {
        this.setState({ count1 });
      }, 10);
    }
  };
  counter2 = (minimum, maximum) => {
    for (let count2 = minimum; count2 <= maximum; count2++) {
      setTimeout(() => {
        this.setState({ count2 });
      }, 10);
    }
  };
  counter3 = (minimum, maximum) => {
    for (let count3 = minimum; count3 <= maximum; count3++) {
      setTimeout(() => {
        this.setState({ count3 });
      }, 10);
    }
  };
  counter4 = (minimum, maximum) => {
    for (let count4 = minimum; count4 <= maximum; count4++) {
      setTimeout(() => {
        this.setState({ count4 });
      }, 10);
    }
  };

  componentDidMount() {
    this.counter1(0, 1627);
    this.counter2(0, 1500);
    this.counter3(0, 1627);
    this.counter4(0, 2004);
  }

  render() {
    return (
      <section className="pt-28 px-4 lg:pb-0 md:pb-0 pb-28">
        <div className="max-w-7xl mx-auto lg:grid-rows-1 lg:grid-cols-4 md:grid-rows-2 md:grid-cols-2 grid-rows-4 grid-cols-1 grid">
          <div data-aos="slide-up" data-aos-delay="100">
            <Boxes
              counts={this.state.count1}
              countImages={CountImg1}
              title={this.state.titles.tOne}
            />
          </div>
          <div data-aos="slide-up" data-aos-delay="200" className="second">
            <Boxes
              counts={this.state.count2}
              countImages={CountImg2}
              title={this.state.titles.tTwo}
            />
          </div>
          <div data-aos="slide-up" data-aos-delay="300">
            <Boxes
              counts={this.state.count3}
              countImages={CountImg3}
              title={this.state.titles.tThree}
            />
          </div>
          <div data-aos="slide-up" data-aos-delay="400" className="fourth">
            <Boxes
              counts={this.state.count4}
              countImages={CountImg4}
              title={this.state.titles.tFour}
            />
          </div>
        </div>
      </section>
    );
  }
}

const Boxes = ({ counts, countImages, title }) => {
  return (
    <div className="count-box flex justify-center items-center lg:my-0 my-7">
      <div className="text-center">
        <Image
          src={countImages}
          alt="Images"
          layout="fixed"
          objectFit="contain"
          className="w-6 h-6"
        />
        <h1 className="text-[#10131F] text-5xl font-semibold py-5">
          <span>{counts}</span>+
        </h1>
        <h1 className=" text-lg font-medium text-[#6E6E78]">{title}</h1>
      </div>
    </div>
  );
};

export default Counter;
