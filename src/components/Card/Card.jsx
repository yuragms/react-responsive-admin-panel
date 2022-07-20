import { AnimateSharedLayout } from "framer-motion";
import React, { useState } from "react";

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
    <div className="CompactCard">
      <div className="radialBar">Chart</div>
      <div className="detail">
        <Png />
        <span>${param.value}</span>
        <span>Last 24 hours</span>
      </div>
    </div>
  );
}

export default Card;
