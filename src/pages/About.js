import './about.css';

import React from 'react';

const About = () => {
  return (
    <React.Fragment> 
      <div className="container">
        <p>
          Простой Todo list без Redux, Context API.
        </p>

        <p>Простое todo приложение с целью изучить/вспомнить основы React.</p>

        <h4>Библиотеки и прочее в проекте: </h4>
        <ul className="collection">
          <li className="collection-item">
            <a href="https://reactjs.org/" rel="noopener noreferrer" target="_blank">React, React router</a>
          </li>
          <li className="collection-item">
            <a href="https://materializecss.com/" rel="noopener noreferrer" target="_blank">Materialize css</a>
          </li>
          <li className="collection-item">
            <a href="https://www.npmjs.com/package/uuid" rel="noopener noreferrer" target="_blank">uuid</a>
          </li>
          <li className="collection-item"><a href="https://jsonplaceholder.typicode.com/" rel="noopener noreferrer" target="_blank">jsonplaceholder API</a></li>
          <li className="collection-item">ES7 Async/Await</li>
          <li className="collection-item">И немного flexbox ❤</li>
        </ul>

      </div>
    </React.Fragment>
  )
}

export default About;