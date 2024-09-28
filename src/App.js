import './App.css';
import { routes, stations } from "./data/routes/europe.ts";
import { findShortestPaths, getRandomRoute } from './routefinder.ts';
import React, { useEffect, useState } from 'react';

function App() {
  const [selectedTicket, setSelectedTicket] = useState(null);

  const tickets = findShortestPaths(stations, routes);
  const ticketLength = tickets.length;
  useEffect(() => {

    setInterval(() => {

    //useEffect(() => {
      const randomTicket1 = tickets[getRandomRoute(ticketLength)];
      const randomTicket2 = tickets[getRandomRoute(ticketLength)];
      const randomTicket3 = tickets[getRandomRoute(ticketLength)];
      setSelectedTicket([...randomTicket1, ...randomTicket2, ...randomTicket3]);
    }, 250);
  }, []);

  return (
    <div className="App">

      {selectedTicket &&
        <>
          <div className="row">
            <i className="markericon"></i>
            <span>{selectedTicket[0]} - {selectedTicket[1]}</span>
            <span>{selectedTicket[2]}</span>
          </div>
          <div className="row">
            <i className="markericon"></i>
            <span>{selectedTicket[3]} - {selectedTicket[4]}</span>
            <span>{selectedTicket[5]}</span>
          </div>
          <div className="row">
            <i className="markericon"></i>
            <span>{selectedTicket[6]} - {selectedTicket[7]}</span>
            <span>{selectedTicket[8]}</span>
          </div>
          <div className="row map">
            <div className="mapconainer">
              <i className='marker' data-start={selectedTicket[0]} data-end={selectedTicket[1]}></i>
              <i className='marker' data-start={selectedTicket[3]} data-end={selectedTicket[4]}></i>
              <i className='marker' data-start={selectedTicket[6]} data-end={selectedTicket[7]}></i>
              <img src="./europe.png" alt="train" />
            </div>
          </div>
        </>
      }
    </div>
  );
}


export default App;
