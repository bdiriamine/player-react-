import React from 'react';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Player({ name, team, nationality, jerseyNumber, age, imageUrl }) {
    return (
        <Card style={{ width: '18rem', marginBottom: '1rem' }}>
          <Card.Img variant="top" src={imageUrl} className="imgpl" />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
              <strong>Team:</strong> {team}<br />
              <strong>Nationality:</strong> {nationality}<br />
              <strong>Jersey Number:</strong> {jerseyNumber}<br />
              <strong>Age:</strong> {age}
            </Card.Text>
          </Card.Body>
        </Card>
      );
    };
    Player.defaultProps = {
        name: "Unknown",
        team: "Unknown",
        nationality: "Unknown",
        jerseyNumber: "Unknown",
        age: "Unknown",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/694px-Unknown_person.jpg"
      };
      
