import { Button, Card, Image } from "react-bootstrap";

function Project() {
    return (
      <div className="Project">
       
       <Card className="text-center">
      <Card.Header></Card.Header>
      <Card.Body>
        <Card.Title>Project Title</Card.Title>
        <Image src="holder.js/100px250" fluid />
        <Card.Text>
          Description
        </Card.Text>
        <Button variant="primary">Live Link</Button>
      </Card.Body>
      <Card.Footer className="text-muted">Technologies used: </Card.Footer>
    </Card>

    <Card className="text-center">
      <Card.Header></Card.Header>
      <Card.Body>
        <Card.Title>Project Title</Card.Title>
        <Image src="holder.js/100px250" fluid />
        <Card.Text>
          Description
        </Card.Text>
        <Button variant="primary">Live Link</Button>
      </Card.Body>
      <Card.Footer className="text-muted">Technologies used: </Card.Footer>
    </Card>
       
    <Card className="text-center">
      <Card.Header></Card.Header>
      <Card.Body>
        <Card.Title>Project Title</Card.Title>
        <Image src="holder.js/100px250" fluid />
        <Card.Text>
          Description
        </Card.Text>
        <Button variant="primary">Live Link</Button>
      </Card.Body>
      <Card.Footer className="text-muted">Technologies used: </Card.Footer>
    </Card>
      </div>
    );
  }
  
  export default Project;
  