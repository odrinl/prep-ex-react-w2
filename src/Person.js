import React from 'react';

const Person = ({ person }) => {
  if (!person) {
    return <p>Loading...</p>;
  }

  if (person.error) {
    return <p>Error: Unable to fetch data</p>;
  }

  return (
    <ul>
      <li>First name: {person.first_name}</li>
      <li>Last name: {person.last_name}</li>
      <li>Email: {person.email}</li>
    </ul>
  );
};

export default Person;
