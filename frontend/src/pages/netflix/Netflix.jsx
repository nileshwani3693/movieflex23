import React from 'react'
import ChatBot from "react-simple-chatbot";
import {Segment} from 'semantic-ui-react';
import Footer from "../../components/Footer/Footer"
import TabComponent from "../../components/Tabs"
import Header from "../../components/Header/Header"
import "./netflix.scss"



function Netflix () {
    const steps = [

    {

      id: "Greet",

      message: "Hello, Welcome to our App",

      trigger: "Done",

    },

    {

      id: "Done",

      message: "Please enter your name!",

      trigger: "waiting1",

    },

    {

      id: "waiting1",

      user: true,

      trigger: "Name",

    },

    {

      id: "Name",

      message: "Hi {previousValue}, What is your exact issue regarding?",

      trigger: "issues",

    },

    {

      id: "issues",

      options: [

        {

          value: "Plans",

          label: "Plans",

          trigger: "Plans",

        },

        { value: "App", label: "App", trigger: "App" },

      ],

    },

    {

      id: "Plans",

      message:

        "You need to check our available subscription plans, Thanks",

      end: true,

    },

    {

      id: "App",

      message:

        "Thanks for letting us know, Our team will resolve your issue ASAP",

      end: true,

    },

  ]; 


    return (
        <div className="netflix">
          <Header/>
          <TabComponent/>
          <Footer />  
          <Segment floated="right">
              <ChatBot steps= {steps}/>
          </Segment>
        </div>

    )
}

export default Netflix
