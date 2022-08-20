import React from "react";
import fredImg from "../../assets/images/fredImg.JPG"

function About() {
    return (
        //header
        //then image
        <div class="container">
        <div> 
            <img src={fredImg} style={{ width: "100%", height: "50%" }} alt="Fred the Dog" />
        </div>

        <center>
            <h1>About</h1>
        </center>

        <div>
            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta unde quasi voluptate reiciendis sequi? Maxime aliquam expedita ullam aperiam nihil. Alias cumque omnis error dolorum! Animi suscipit inventore qui cum?
            </p>
        </div>

    </div>
    );
  }

export default About;