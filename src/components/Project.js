import React from "react";
import img1 from "../pics/img1.png";
import img2 from "../pics/img2.png";
import img3 from "../pics/img3.png";
import { FaLaptopCode } from "react-icons/fa";
import { RiLiveFill } from "react-icons/ri";

export default function Project() {
  return (
    <div>
      <div className="container" name="project">
        <div className="row">
          <h1 className="text-center fw-bold text-warning display-4 mt-5">
            {" "}
            Project{" "}
          </h1>
          {/* 1 */}
          <div className="col-lg-5 col-md-12 col-12 text-center mx-auto mt-5">
            <br />
            <h5 className="mt-3 text-start get ">
              Developed the front-end of the Book Store app using React JS, Node JS
              MongoDB and ensuring a responsive and interactive user interface
            </h5>
            <br />

            <div className="mt-3">
              <a
                target="_blank"
                href="https://dainty-taiyaki-f83fb9.netlify.app/"
                className="btn btn-info hand fw-bold mx-auto "
              >
                <h3>
                  <RiLiveFill /> DEMO{" "}
                </h3>
              </a>
              //{" "}
              <a
                target="_blank"
                href="https://github.com/ArunkumarVK4/Book-Store-Frontend-"
                className="btn btn-info  hand fw-bold mx-auto"
              >
                {" "}
                <h3>
                  <FaLaptopCode /> CODE
                </h3>
              </a>
            </div>
          </div>

          <div className="col-lg-5 col-md-12 col-12 text-center mt-1 mx-auto mb-1">
            <img
              className="img-fluid mt-5 rounded-3 mb-5 border border-5 hand"
              src={img1}
              alt=""
            />
          </div>

          {/* 2 */}

          <div className="col-lg-5 col-md-12 col-12 text-center mx-auto ">
            <br />
            <h5 className="mt-3 text-start get ">
              Developed a foundational MERN stack application with integrated
              authentication, showcasing proficiency in creating secure and
              responsive ToDo web applications.
            </h5>
            <br />

            <div className="mt-3">
              <a
                target="_blank"
                href="https://unique-tulumba-640d05.netlify.app/"
                className="btn btn-info hand fw-bold mx-auto "
              >
                <h3>
                  <RiLiveFill /> DEMO{" "}
                </h3>
              </a>
              //{" "}
              <a
                target="_blank"
                href="https://github.com/ArunkumarVK4/MERN-Auth-Frontend"
                className="btn btn-info  hand fw-bold mx-auto"
              >
                {" "}
                <h3>
                  <FaLaptopCode /> CODE
                </h3>
              </a>
            </div>
          </div>

          <div className="col-lg-5 col-md-12 col-12 text-center mt-1 mx-auto mb-1">
            <img
              className="img-fluid mt-5 rounded-3 mb-5 border border-5 hand"
              src={img2}
              alt=""
            />
          </div>

          {/* 3 */}
          <div className="col-lg-5 col-md-12 col-12 text-center mx-auto ">
            <br />
            <h5 className="mt-3 text-start get ">
              Created a Hulu website clone using React, integrated APIs to fetch
              and display content, and added categorized sections for an
              immersive user experience
            </h5>
            <br />

            <div className="mt-3">
              <a
                target="_blank"
                href="https://flourishing-sprite-2db1d6.netlify.app/"
                className="btn btn-info hand fw-bold mx-auto "
              >
                <h3>
                  <RiLiveFill /> DEMO{" "}
                </h3>
              </a>
              //{" "}
              <a
                target="_blank"
                href="https://github.com/ArunkumarVK4/hulu-clone"
                className="btn btn-info  hand fw-bold mx-auto"
              >
                {" "}
                <h3>
                  <FaLaptopCode /> CODE
                </h3>
              </a>
            </div>
          </div>

          <div className="col-lg-5 col-md-12 col-12 text-center mt-1 mx-auto mb-1">
            <img
              className="img-fluid mt-5 rounded-3 mb-5 border border-5 hand"
              src={img3}
              alt=""
            />
          </div>
        </div>
      </div>
      <br />
    </div>
  );
}