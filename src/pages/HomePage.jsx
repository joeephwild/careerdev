import React from "react";
import { show, image2, image } from "../assets";
import { Services } from "../components";
import Hero from "../components/Hero";
import Jobs from "../components/Jobs";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <Services
        image={show}
        title="Host Video interview"
        text="Host video meeting straight from the dapp all thanks to our amazing partner at huddleo1, Start a meeting in just few clicks, schedule a token-gated meeting via our dashboard, or leverage the Huddle01 infrastructure to build real-time audio/video apps."
      />
      <Services
        image={image2}
        title="Apply for Jobs"
        style="md:order-last"
        text="Host video meeting straight from the dapp all thanks to our amazing partner at huddleo1, Start a meeting in just few clicks, schedule a token-gated meeting via our dashboard, or leverage the Huddle01 infrastructure to build real-time audio/video apps."
      />
      <Services
        image={image}
        title="Add jobs"
        text="Host video meeting straight from the dapp all thanks to our amazing partner at huddleo1, Start a meeting in just few clicks, schedule a token-gated meeting via our dashboard, or leverage the Huddle01 infrastructure to build real-time audio/video apps."
      />
      <Jobs />
    </div>
  );
};

export default HomePage;
