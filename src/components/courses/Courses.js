import React, { useState } from "react";
import { coursesData } from "./coursesData.js";

import "./courses.css";
import CourseCard from "./CourseCard.js";
import { Col, Container, Row } from "react-bootstrap";
export const Courses = () => {
  const [data, setdata] = useState([coursesData]);
  return (
    <div id="Courses">
      <Container>
        <Row>
          <Col lg="12" className="mb-3 mt-5">
            <div className="course__top d-flex justify-content-between align-items-center">
              <div className="course__top__left w-50">
                <h2>Our Popular Courses</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                  consequatur libero quod voluptatibus ullam quia quas, vitae
                  voluptatem recusandae reprehenderit!
                </p>
              </div>

              <div className="w-50 text-end">
                <button className="btn">See All</button>
              </div>
            </div>
          </Col>
          {coursesData.map((item) => {
            return (
              <Col lg="4" md="6">
                <CourseCard data={item} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};
