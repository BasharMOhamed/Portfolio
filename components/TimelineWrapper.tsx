// components/TimelineWrapper.tsx
"use client";

import { StarIcon } from "lucide-react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
// import { FaBriefcase } from "react-icons/fa";

export default function TimelineWrapper() {
  return (
    <VerticalTimeline lineColor="#000">
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="Aug 2024 – Sep 2024"
        iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
        // icon={<WorkIcon />}
      >
        <h2 className="vertical-timeline-element-title">Cyberus</h2>
        <h4 className="vertical-timeline-element-subtitle">
          Web Security Summer Training
        </h4>
        <p>
          Built a secure, full-stack web application using Flask with CRUD,
          auth, and responsive UI.
        </p>
        <p>
          Gained hands-on experience managing SQL databases and reinforcing
          backend security.
        </p>
        <p>
          Developed debugging and API integration skills relevant to scalable
          application development.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="August 2024 - September 2024"
        iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
        // icon={<WorkIcon />}
      >
        <h2 className="vertical-timeline-element-title">
          Information Technology Institute
        </h2>
        <h4 className="vertical-timeline-element-subtitle">
          MEAN Stack Summer Training
        </h4>
        <p>
          Built and deployed a fully functional MEAN stack web app with user
          auth and responsive design.
        </p>
        <p>
          Gained strong hands-on experience working with MongoDB, Node.js, and
          Angular for RESTful API services.
        </p>
        <p>
          Collaborated in a remote Agile team environment and worked on
          debugging, troubleshooting, and performance optimization.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="November 2023 - March 2024"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        // icon={<WorkIcon />}
      >
        <h2 className="vertical-timeline-element-title">Connect-X</h2>
        <h4 className="vertical-timeline-element-subtitle">
          Front End Student Activity
        </h4>
        <p>Selected to be a Master in front end development.</p>
        <p>
          Gained exposure to scalable frontend architecture and implemented
          responsive user interfaces with modern libraries
        </p>
        <p>
          Collaborated with teammates in building frontend components using Git
          and Agile methodology.
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
        icon={<StarIcon />}
      />
    </VerticalTimeline>
  );
}
