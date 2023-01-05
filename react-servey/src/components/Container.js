import React, { Component } from 'react';
import Details from './Details';
import Questions from './Questions';
import { v4 as uuidv4 } from 'uuid';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAMtdRRxwjByXhmmXn7AR-LmXY5mO7pyj4",
  authDomain: "react-servey-548f1.firebaseapp.com",
  databaseURL: "https://react-servey-548f1-default-rtdb.firebaseio.com",
  projectId: "react-servey-548f1",
  storageBucket: "react-servey-548f1.appspot.com",
  messagingSenderId: "589040060769",
  appId: "1:589040060769:web:e02198782ba4173f409d20"
};
if (initializeApp.apps.length < 0) {
  initializeApp(firebaseConfig);
}

class Container extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: uuidv4(),
      name: null,
      email: null,
      isSubmitted: false,
      questions: {
        q1: null,
        q2: null,
        q3: null,
        other: null
      }
    }
  }

  detailsSubmitHandler = (event) => {
    event.preventDefault();
    const name = event.target.name.value
    const email = event.target.email.value
    this.setState({ name, email })
  }

  questionsSubmitHandler = (event) => {
    event.preventDefault();
    const questions = {}
    questions.q1 = event.target.q1.value
    questions.q2 = event.target.q2.value
    questions.q3 = event.target.q3.value
    questions.other = event.target.other.value
    const isSubmitted =true;
    this.setState({ questions,isSubmitted});
    const database = initializeApp.database();
    database.ref("survey/" + this.state.id).set({
      name: this.state.name,
      email: this.state.email,
      questions: this.state.questions,
    });
  }
  render() {
    return (
      <>
        <div className='container-fluid'>
          <div className='container card mt-2'>
            <h1 className='text-center text-primary'>
              React tech Survey
            </h1>
          </div>
          {this.state.isSubmitted ? (
            <div className='card'>
              <h1>Thank you!</h1>
            </div>
          ):
            this.state.name === null && this.state.email === null ?
              <Details submit={this.detailsSubmitHandler} /> :
              <Questions submit={this.questionsSubmitHandler} />
          }
        </div>
      </>
    )
  }
}
export default Container;