import React from "react";
import useBackgroundEffect from "../../../hooks/useBackgroundEffect";
import "../styles.scss";
import MarkdownRenderer from "../../MarkdownRenderer";

const SubpageHerzen = () => {
  useBackgroundEffect("page-background-herzen");
  return (
    <div className="subpage-container">
      <MarkdownRenderer file="/text/Herzen.md" />
    </div>
  );
};

export default SubpageHerzen;
