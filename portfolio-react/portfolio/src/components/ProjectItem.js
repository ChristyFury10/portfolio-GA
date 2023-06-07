import { Button, Card, Image } from "react-bootstrap";
import "./ProjectItem.css"

function Project() {
    return (
      <div className="Project">
       
       <Card className="text-center project-card">
      <Card.Header></Card.Header>
      <Card.Body>
        <Card.Title>Echo</Card.Title>
        <Image src="https://i.imgur.com/jLQ2Q2i.png" style={{width: "600px"}} fluid />
        <Card.Text>
          A library for users to store youtube video links and categorize them for later re-watching. 
        </Card.Text>
        <a href="https://teampro3-front.onrender.com/" target="_">
        <Button variant="primary">Live Link</Button>
        </a>
      </Card.Body>
      <Card.Footer className="text-muted">Technologies used: MERN stack, bootstrap, </Card.Footer>
    </Card>

    <Card className="text-center project-card">
      <Card.Header></Card.Header>
      <Card.Body>
        <Card.Title>Training With Fury</Card.Title>
        <Image src="https://i.imgur.com/mYzij9X.png" style={{width: "600px", margin: "12px"}} fluid />
        <Image src="https://i.imgur.com/OhA01TC.png" style={{width: "600px"}} fluid />
        <Card.Text>
          A web application to create, store, and track exercises and workouts. 
        </Card.Text>
        <a href="https://training-with-fury.onrender.com/" target="_">
        <Button variant="primary">Live Link</Button>
        </a>
      </Card.Body>
      <Card.Footer className="text-muted">Technologies used: Mongo, Mongoose, Node.js, JavaScript, HTML, EJS, CSS</Card.Footer>
    </Card>
       
    <Card className="text-center project-card">
      <Card.Header></Card.Header>
      <Card.Body>
        <Card.Title>Escape</Card.Title>
        <Image src="https://camo.githubusercontent.com/0d42b6cc3f1a3976d7909942b2f0107e82284376f7046aa6839449cfb64f1ae8/68747470733a2f2f692e696d6775722e636f6d2f576e43464979522e706e67" style={{width: "600px"}} fluid />
        <Card.Text>
          A click based web application game in the style of an escape room. Demonstrates DOM manipulation, javascript, CSS and HTML proficiency. 
        </Card.Text>
        <a href="https://christyfury10.github.io/escape-game-repo/" target="_">
        <Button variant="primary">Live Link</Button>
        </a>
      </Card.Body>
      <Card.Footer className="text-muted">Technologies used: JavaScript, HTML, CSS, Jquery</Card.Footer>
    </Card>
      </div>
    );
  }
  
  export default Project;
  