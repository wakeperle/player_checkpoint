import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Player = (props) => {
return (
    <Card style={{ width: "18rem"}} >
                <img src={props.player.image} alt="" />

      <Card.Body>

        <Card.Title>{props.player.name}</Card.Title>
        <Card.Text>
          {props.player.team}
          
        
        </Card.Text>
        <Card.Text>
          
          {props.player.jersey_number}
        
        </Card.Text>
        
        <Card.Text>
          {props.player.natonality}
        </Card.Text>
        <Button variant="primary">{props.player.age}</Button>
      </Card.Body>
    </Card>
  );
};

export default Player;