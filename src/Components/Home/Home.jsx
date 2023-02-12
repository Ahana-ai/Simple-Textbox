import React from "react";
import { Link } from "react-router-dom";
import Carousel1 from "../../Images/1.jpg";
import Carousel2 from "../../Images/2.jpg";
import Carousel3 from "../../Images/3.jpg";

export default function Home() {
  return (
    <div>
      {/* Carousel */}
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={Carousel1}
              className="d-block w-100"
              id="image"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src={Carousel2}
              className="d-block w-100"
              id="image"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src={Carousel3}
              className="d-block w-100"
              id="image"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-target="#carouselExampleIndicators"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-target="#carouselExampleIndicators"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </button>
      </div>

      {/* Heading */}
      <h1>Lorem </h1>

      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam fugiat,
        aperiam suscipit quis nostrum nesciunt perferendis illo corrupti
        eligendi illum nobis quaerat sunt maiores labore ducimus cumque
        provident facere odit? Lorem ipsum dolor, sit amet consectetur
        adipisicing elit. Quis voluptatibus doloremque quos quasi ea quae natus?
        Temporibus molestiae error suscipit quisquam. Amet, enim architecto.
        Ullam voluptatum fugiat perferendis, voluptate soluta consequatur rerum.
        <br />
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
        laudantium officia aliquid cum optio quae perspiciatis deserunt modi
        debitis cumque! Maxime aliquam officia consequatur earum exercitationem.
        Perspiciatis sint excepturi nesciunt pariatur, accusamus esse quidem.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus
        quis culpa perferendis unde, mollitia sit error incidunt corporis
        nostrum consequatur obcaecati, rerum aut fugit. Mollitia praesentium,
        libero voluptate rerum iure ex exercitationem facere, odio cumque
        inventore reiciendis consectetur corrupti atque. Hic, eveniet rerum.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus
        labore praesentium alias saepe libero! Beatae enim vitae ipsam qui ad
        quibusdam architecto consectetur magni cumque natus alias sit culpa
        dolores voluptas ipsa exercitationem consequatur laboriosam saepe
        dolore, unde, error in quasi amet! Provident aut praesentium voluptates
        perferendis optio! Dolorum eius quaerat eligendi. Possimus, eos.
      </div>

      {/* Cards */}
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                  ab tempore a perferendis itaque placeat natus, expedita esse
                  animi? Ad consequuntur repudiandae fugit ipsa at quas quasi
                  eligendi accusantium quam quo, totam fuga laboriosam.
                </p>
                <Link className="card-link">Card link</Link>
                <Link className="card-link">Another link</Link>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                  ab tempore a perferendis itaque placeat natus, expedita esse
                  animi? Ad consequuntur repudiandae fugit ipsa at quas quasi
                  eligendi accusantium quam quo, totam fuga laboriosam.
                </p>
                <Link className="card-link">Card link</Link>
                <Link className="card-link">Another link</Link>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                  ab tempore a perferendis itaque placeat natus, expedita esse
                  animi? Ad consequuntur repudiandae fugit ipsa at quas quasi
                  eligendi accusantium quam quo, totam fuga laboriosam.
                </p>
                <Link className="card-link">Card link</Link>
                <Link className="card-link">Another link</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
