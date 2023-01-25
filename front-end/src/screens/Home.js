import React from "react";
import styled from "styled-components";
import Jumbotron from "../components/Jumbotron";
import HowWeWork from "../components/HowWeWork";
import Advantages from "../components/Advantages";
import Stories from "../components/Stories";
import CommentSlider from "../components/CommentSlider";
import DownloadApp from "../components/DownloadApp";
import HowItWorks from "../components/HowItWorks";
import FAQ from "../components/FAQ";

const Styles = styled.div`
  
`;

function Home() {    
    return (
  <Styles>
    <Jumbotron/>
    <HowItWorks/>
    <HowWeWork/>
    <Advantages/>
    <DownloadApp/>
    <CommentSlider/> 
    <Stories/>
    <FAQ/>
    {/* 
    */}
      {/* 
      
      <DoubleCart/>
      <Properties/>
      
      <SimpleCommentContainer/>
      <Brands/>
       */}
  </Styles>
);
}

export default Home;
