const { Component } = require("react");
const { Container } = require("react-bootstrap");

class createProfile extends Component {
  state = {
      name: "",
      avatar: "",
  };

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <h2>Create an Author Profile</h2>
          </Col>
        </Row>

        <Row>
          <Col>
            <Form.Group controlId="blog-form" className="mt-3">
              <Form.Label>Author Name</Form.Label>
              <Form.Control
                size="lg"
                placeholder="Add the author's name here..."
                value={this.state.author.name}
                onChange={(e) => this.handleAuthor(e.currentTarget.value)}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
            <Col>
            <Form>
          <Form.Group className="mb-3" controlId="#1">
            <Form.Control
              type="file"
              onChange={(e) => this.target(e)}
              rows={3}
              placeholder="What do you want to talk about?"
              rows="4"
              cols="81"
            />
          </Form.Group>
        </Form>
            </Col>
        </Row>
      </Container>
    );
  }
}
