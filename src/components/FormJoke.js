import React from "react";
import "../css/formjoke.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Formik, Field, Form,  } from "formik";



class FormJoke extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      language: [],
      isLoaded: false,
    };
  }

  componentDidMount() {
    fetch("https://v2.jokeapi.dev/info")
      .then((res) => res.json())
      .then((result) => {
        this.setState({
          isLoaded: true,
          items: result,
        });
      });
    fetch("https://v2.jokeapi.dev/languages")
      .then((res) => res.json())
      .then((result) => {
        this.setState({
          isLoaded: true,
          language: result,
        });
      });
  }

  render() {
    console.log(this.state.items);

    return (
      <div className="formbody">
        <h1 className="text-center">Joke Teller App</h1>
        <Container className="border">

        <Formik
        initialValues={{
          any:false,
          custom:false,
          categories: this.state.items.jokes && [...this.state.items.jokes.categories],
          language: "",
          flags: [],
          response: "",
          jokeType: "",
          searchText: "",
          rangeTO: 0,
          rangeFrom: "",
          amountOfJokes: 1,
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >

          {()=>(
            <Form>
            <Row className=" mt-2 mb-2 mr-1  ">
              <Col xs={2}>
                <h5>Select category / categories:</h5>
              </Col>
              <Col xs={8} className="border">
                <Row>
                  <div class="form-check">
                    <Field
                      class="form-check-input"
                      type="radio"
                      name="any"
                      id="flexCheckDefault"
                    />
                    <label class="form-check-label" for="flexCheckDefault">
                      Any
                    </label>
                  </div>
                </Row>
                <Row>
                  <div className=" d-flex   ">
                    <div class="form-check">
                      <Field
                        class="form-check-input"
                        type="radio"
                        name="custom"
                        id="flexCheckDefault"
                      />
                      <label class="form-check-label" for="flexCheckDefault">
                        Custom:
                      </label>
                    </div>
                    {this.state.items.jokes &&
                      this.state.items.jokes.categories.map((prev, index) => {
                        if (index === 0) {
                          return;
                        }
                        return (
                          <div class="form-check">
                            <Field
                              class="form-check-input"
                              type="checkbox"
                              id="flexCheckDefault"
                              name={prev}
                            />
                            <label
                              class="form-check-label"
                              for="flexCheckDefault"
                            >
                              {prev}
                            </label>
                          </div>
                        );
                      })}
                  </div>
                </Row>
              </Col>
            </Row>

            <Row className=" mt-2 mb-2 mr-1  ">
              <Col xs={2}>
                <h5>Language:</h5>
              </Col>
              <Col xs={8} className="border">
                <Form.Select style={{ width: "150px" }} className="mb-1 mt-1">
                  {this.state.language.jokeLanguages &&
                    this.state.language.jokeLanguages.map((prev) => {
                      if (prev == this.state.language.defaultLanguage) {
                        return (
                          <option value={prev} selected>
                            {prev}
                          </option>
                        );
                      } else {
                        return <option value={prev}>{prev}</option>;
                      }
                    })}
                </Form.Select>
              </Col>
            </Row>

            <Row className=" mt-2 mb-2 mr-1  ">
              <Col xs={2}>
                <h5>Select Flags and Blacklist :</h5>
              </Col>
              <Col xs={8} className="border">
                <Row>
                  <div className=" d-flex   ">
                    <p>(Optional)</p>
                    {this.state.items.jokes &&
                      this.state.items.jokes.flags.map((prev) => {
                        return (
                          <div class="form-check">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              value=""
                              id="flexCheckDefault"
                            />
                            <label
                              class="form-check-label"
                              for="flexCheckDefault"
                            >
                              {prev}
                            </label>
                          </div>
                        );
                      })}
                  </div>
                </Row>
              </Col>
            </Row>

            <Row className=" mt-2 mb-2 mr-1  ">
              <Col xs={2}>
                <h5>Select response Format</h5>&nbsp;
              </Col>
              <Col xs={8} className="border">
                <Row>
                  <div className=" d-flex   ">
                    {this.state.items.jokes &&
                      this.state.items.formats.map((prev) => {
                        return (
                          <div class="form-check">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              value=""
                              id="flexCheckDefault"
                            />
                            <label
                              class="form-check-label"
                              for="flexCheckDefault"
                            >
                              {prev}
                            </label>
                          </div>
                        );
                      })}
                  </div>
                </Row>
              </Col>
            </Row>
            <Row className=" mt-2 mb-2 mr-1  ">
              <Col xs={2}>
                <h5>Select at least one joke type</h5>&nbsp;
              </Col>
              <Col xs={8} className="border">
                <Row>
                  <div className=" d-flex   ">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label class="form-check-label" for="flexCheckDefault">
                        single
                      </label>
                    </div>

                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label class="form-check-label" for="flexCheckDefault">
                        twopart
                      </label>
                    </div>
                  </div>
                </Row>
              </Col>
            </Row>
            <Row className=" mt-2 mb-2 mr-1  ">
              <Col xs={2}>
                <h5>Search for a joke that contains this search string:</h5>
              </Col>
              <Col xs={8} className="border">
                <input
                  type="text"
                  class="form-control mt-2"
                  placeholder="(optional)"
                />
              </Col>
            </Row>
            <Row className=" mt-2 mb-2 mr-1  ">
              <Col xs={2}>
                <h5>Search for a joke in this ID range:</h5>
              </Col>
              <Col xs={8} className="border d-flex">
                <p>(optional)</p>
                <label for="inputNumber">From:</label>
                <input
                  type="number"
                  xs={2}
                  defaultValue={0}
                  id="inputNumber"
                  class="form-control "
                  placeholder="(optional)"
                />
                <label for="inputNumberTo">To:</label>

                <input
                  type="number"
                  xs={2}
                  defaultValue={
                    this.state.items.jokes && this.state.items.jokes.totalCount
                  }
                  class="form-control mt-2"
                  id="inputNumberTo"
                  placeholder="(optional)"
                />
              </Col>
            </Row>
            <Row className=" mt-2 mb-2 mr-1  ">
              <Col xs={2}>
                <h5>Amount of Jokes:</h5>
              </Col>
              <Col xs={8} className="border d-flex">
                <p>0</p>
              </Col>
            </Row>
            <Row className=" mt-2 mb-2 mr-1  ">
              <Row>
                <p>URL:</p>
              </Row>
              <Row>
                <div className="d-flex ">
                  <Button className="ml-10">Reset Form</Button>&nbsp;
                  <Button>Send Request</Button>
                </div>
              </Row>
            </Row>
            <Row className=" mt-2 mb-2 mr-1  border ">
              <h4>Result:</h4>
              <hr></hr>
              <h6>joke</h6>
            </Row>
          </Form>)}
          </Formik>

        </Container>
      </div>
    );
  }
}

export default FormJoke;
