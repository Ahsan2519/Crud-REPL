const repl = require("repl");

const replServer = repl.start("> ");

// Random quotes array
const quotes = [
  "The only way to do great work is to love what you do. - Steve Jobs",
  "Stay hungry, stay foolish. - Steve Jobs",
  "Innovation distinguishes between a leader and a follower. - Steve Jobs",
  "Life is what happens when you're busy making other plans. - John Lennon",
  "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel. - Maya Angelou",
  "Strive not to be a success, but rather to be of value. - Albert Einstein",
  "The only thing necessary for the triumph of evil is for good men to do nothing. - Edmund Burke",
];

let isLoggedIn = false;
const userName = "tashaUser";
const password = "user@1234";
let interval;

// Function to to logged in
const login = (user, pass) => {
  if ((user === userName) & (pass === password)) {
    isLoggedIn = true;
    console.log(`Welcome, ${user} You are now logged in.`);
    randomQoutes();
  } else {
    console.log(`Please enter a valid username and password`);
  }
};

// Function to generate rndom qoutes
const randomQoutes = () => {
  if (isLoggedIn) {
    interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      console.log(`Random Quotes: ${quotes[randomIndex]}`);
    }, 5000);
  }
};

// Function to simulate user logout
const logout = () => {
  clearInterval(interval);
  console.log(`Goodbye, ${userName} You have been logged out.`);
  isLoggedIn = null;
};

replServer.context.login = login;
replServer.context.logout = logout;
