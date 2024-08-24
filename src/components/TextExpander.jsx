import React, { useState } from "react";

const TextExpander = ({
  children,
  expandButtonText = "Show more",
  buttonColor = "blue",
  collapsedNumWords = 15,
  collapseButtonText = "Show Less",
  className = "",
  expanded = false,
}) => {
  const [expanding, setExpanding] = useState(expanded);

  return (
    <div className={`text-expander ${className}`}>
      <span className="text-expander-content">
        {!expanding
          ? children.split(" ").slice(0, collapsedNumWords).join(" ") + "..."
          : children}
      </span>
      <button
        className="text-expander-button"
        onClick={() => setExpanding((prev) => !prev)}
        style={{ color: buttonColor }}
      >
        {expanding ? collapseButtonText : expandButtonText}
      </button>
    </div>
  );
};

export default TextExpander;
