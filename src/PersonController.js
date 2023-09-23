import React, { useState, useEffect } from 'react';
import Person from './Person';

const PersonController = () => {
  const [person, setPerson] = useState(null);

  const getPerson = async () => {
    try {
      const response = await fetch('https://www.randomuser.me/api?results=1');
      const data = await response.json();
  
      if (Array.isArray(data.results) && data.results.length > 0) {
        const formattedPerson = {
          first_name: data.results[0].name.first,
          last_name: data.results[0].name.last,
          email: data.results[0].email,
        };
        setPerson(formattedPerson);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    getPerson();
  }, []);

  return <Person person={person} />;
};

export default PersonController;
