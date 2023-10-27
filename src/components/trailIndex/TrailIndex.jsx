import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import moment from "moment";
import "./trailIndex.css";

export default class TrailIndex extends Component {
  static defaultProps = {
    trails: []
  };

  render() {
    const { trails } = this.props;
    return (
      <section className="userCreatedSection">
        <div className="userCreatedTitle">
          <h3>User Created Trails!</h3>
          <p>Select One Of The Many Hikes and Trails our users have posted below:</p>
        </div>
        {Array.isArray(trails) && trails.map((trail, trailindex) => {
          return (
            <div className="userCreatedTrails" key={trailindex}>
              <ul>
                <li>
                  <Link to={`/trails/${trail._id}`}>
                    <img src={trail.picture} alt={trail.name} />
                    <p>{trail.name}</p>
                    <p>{trail.location}</p>
                    <p>{trail.difficulty}</p>
                    <p>{trail.miles}</p>
                    <div className="time-stamps">
                      <p>{moment(trail.createdAt, "MM/DD/YY").format("MM/DD/YY")}</p>
                      <p>{moment(trail.createdAt, "h:mm a").format("h:mm a")}</p>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
          )
        })}
      </section>
    )
  }
}