import React from "react";
import Project from "../Components/Containers/Project";
const Projects = () => {
  return (
    <div>
      <Project
        title="React Phone E-commerse"
        date="10-09-19 to 15-09-19"
        link="https://react-phone-ecom.netlify.com"
        description="This is a demo e-commerse project, this project consist of products,
        product details and add to cart. These are all built using React as the name of the
        pp suggest I have make it simple so that anyone can understand it very easily. This
        was just a demo project that shows how e-commerse would work if react would used."
      />
      <Project
        title="Interior Design demo"
        date="13-06-19 to 16-06-19"
        link="http://interiordesign.is-best.net"
        description="This is a demo app build using jQuery. I developed this app for practical 
        practice of my jQuery, after learning jQuery I wanted to build something that uses jQuery and also I got the idea how jQuery works and how to deal with it."
      />
      <Project
        title="Captcha as a Graphical Password"
        date="15-04-19 to 30-04-19"
        description="This is my Academic Mini Project which generates captcha as a graphical password.
        While registering into the application a user has to choose one of the three images displayed on the screen.
        After registration, whenever a user logged into the application he must have to enter the correct captcha image text with his password. That make the system more secure by generating captcha as a graphical password."
      />
      <Project
        title="Emotion Recognition on Twitter"
        date="15-03-19 to 15-04-19"
        description="This is my academic Major Project in which we can recognise the emotion of the user posting the tweet either the user is happy,sad,excited and exhusted etc., by analysing the tweets user posts.
        This app has the complete fuctionalities like a social media app have, for exmaple a user can send a friend request to anyone and the other can accept the friend request and many more. Admin can keep an eye on the users post and the emotion in which the user posted the tweet."
      />

      <Project
        title="Secured Railway Reservation App"
        date="15-02-19 to 15-03-19"
        link="http://booktrain.000webhostapp.com"
        description="This is an online train ticket booking app in which user can search for trains,
         reserve the seats, check PNR and can cancel their reservation. It is a simple and secured app developed 
         when my Head of the Department asked me to build a real app as a mini project. "
      />
      <Project
        title="Student Management System"
        date="20-12-18 to 20-01-19"
        link="http://arkay.is-great.net"
        description="Once my college principal called me and ask to build a website in which he will be able to check all the student's details by entering his/her hall ticket number.
        I have worked on it and submitted to the principal and he patches my back and appriciated me.
        In this application students can see their results of each and every semester and the admin can see the performance of the student by hall ticket number."
      />
    </div>
  );
};

export default Projects;
