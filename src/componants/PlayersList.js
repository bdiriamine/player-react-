import React from 'react';
import Player from './Player';
import players from '../services/players';

export default function PlayersList() {
    return (
        <div className="d-flex flex-wrap justify-content-around">
          {players.map((player, index) => (
            <Player key={index} {...player} />
          ))}
        </div>
      );
    };

