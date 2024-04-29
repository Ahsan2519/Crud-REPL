const repl = require("repl");

const replServer = repl.start("> ");

const people = [];

const createPeople = (name, age, role) => {
  const person = {
    name,
    age,
    role,
  };
  people.push(person);
};

const getPeople = () => {
  console.log("people:", people);
};

const getPersonByNameAndRole = (name, role) => {
  return people.filter((data) => data.name === name && data.role === role);
};

const UpdatePerson = (name, newRole) => {
  const res = people.find((data) => data.name === name);
  if (res) {
    res.role = newRole;
    return res;
  } else {
    console.log(`Sorry ${name} not found in our data.`);
  }
};

const deletePerson = (name) => {
  const index = people.findIndex((person) => person.name === name);
  if (index !== -1) {
    people.splice(index, 1);
    console.log(`Deleted ${name} successfully.`);
    return people;
  } else {
    console.log(`Sorry, ${name} not found in our record.`);
  }
};

replServer.context.createPeople = createPeople;
replServer.context.getPeople = getPeople;
replServer.context.getPersonByNameAndRole = getPersonByNameAndRole;
replServer.context.updatePerson = UpdatePerson;
replServer.context.deletePerson = deletePerson;
