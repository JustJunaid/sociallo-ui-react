import React from "react";
import ItemsCarousel from "react-items-carousel";
import range from "lodash/range";
import "./App.css";
import itemImage from "./assets/item.png";
import TopLeft from "./assets/top-left.png";
import TopRight from "./assets/top-right.png";
import { MDBIcon } from "mdbreact";
import { Card, Button } from "react-bootstrap";

export default class Test extends React.Component {
  componentWillMount() {
    this.setState({
      children: [],
      activeItemIndex: 0
    });

    setTimeout(() => {
      this.setState({
        children: this.createChildren(20)
      });
    }, 100);
  }

  createChildren = n =>
    range(n).map(i => (
      <div key={i} className="card-item">
        <Card style={{ width: "18rem" }}>
          <div className="card-top-icons">
            <div className="percent-tag">34%</div>
            <div className="star-icon">
              <MDBIcon far icon="star" size="2x" />
            </div>
          </div>
          <Card.Img variant="top" src={itemImage} height="200" />
          <Card.Body style={{ textAlign: "center", paddingTop: 0 }}>
            <Card.Title>LANIGE</Card.Title>
            <Card.Text>
              Cushion Duo Set 2 <br /> <strike>Rp. 3500</strike> <br />{" "}
              <b>Rp. 1.148.00</b>
            </Card.Text>
            <Button variant="info">See Review</Button>
          </Card.Body>
        </Card>
      </div>
    ));

  changeActiveItem = activeItemIndex => this.setState({ activeItemIndex });

  render() {
    const { activeItemIndex, children } = this.state;

    return (
      <div className="App">
        <div className="top-headings">
          <div style={{ paddingLeft: "7rem" }}>
            <img src={TopLeft} alt="" width="150" />
          </div>
          <div>
            <h1>Flash Sale</h1>
            <p>
              Will be end in &nbsp;
              <span> 06 </span> &nbsp; : &nbsp; <span> 36 </span> &nbsp; :
              &nbsp;
              <span> 20 </span>
            </p>
          </div>
          <div style={{ paddingRight: "10rem", transform: "rotateZ(-20deg)" }}>
            <img src={TopRight} alt="" width="150" />
          </div>
        </div>
        <div className="carousel-container">
          <ItemsCarousel
            // Placeholder configurations
            enablePlaceholder
            numberOfPlaceholderItems={4}
            minimumPlaceholderTime={1000}
            placeholderItem={
              <div style={{ height: 200, background: "#900" }}>Placeholder</div>
            }
            // Carousel configurations
            numberOfCards={4}
            gutter={20}
            showSlither={true}
            firstAndLastGutter={true}
            freeScrolling={false}
            // Active item configurations
            requestToChangeActive={this.changeActiveItem}
            activeItemIndex={activeItemIndex}
            activePosition={"center"}
            chevronWidth={24}
            rightChevron={<div>></div>}
            leftChevron={"<"}
            outsideChevron={false}
          >
            {children}
          </ItemsCarousel>
        </div>
        <div className="see-more-button">
          <button>SEE MORE</button>
        </div>
      </div>
    );
  }
}
