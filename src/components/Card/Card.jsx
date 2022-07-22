import { AnimateSharedLayout } from "framer-motion";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import React, { useState } from "react";
import "./Card.css";

function Card(props) {
  const [expanded, setexpanded] = useState(false);
  // const expanded = false;
  return (
    <AnimateSharedLayout>
      {expanded ? "Expanded" : <CompactCard param={props} />}
    </AnimateSharedLayout>
  );
}

// CompactCard
function CompactCard({ param }) {
  const Png = param.png;
  return (
    <div
      className="CompactCard"
      style={{
        background: param.color.background,
        boxShadow: param.color.boxShadow,
      }}
    >
      <div className="radialBar">
        <CircularProgressbar
          value={param.barValue}
          text={`${param.barValue}%`}
        />
        <span>{param.title}</span>
      </div>
      <div className="detail">
        <Png />
        <span>${param.value}</span>
        <span>Last 24 hours</span>
      </div>
    </div>
  );
}

export default Card;
