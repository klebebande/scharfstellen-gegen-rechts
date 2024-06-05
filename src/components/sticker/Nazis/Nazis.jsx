import React from "react";
import useBackgroundEffect from "../../../hooks/useBackgroundEffect";
import "../styles.scss";
import MarkdownRenderer from "../../MarkdownRenderer";

const SubpageHerzen = () => {
  useBackgroundEffect("page-background-nazis");
  return (
    <div className="subpage-container">
      <MarkdownRenderer file="/text/Nazis.md" />
    </div>
  );
};

export default SubpageHerzen;
