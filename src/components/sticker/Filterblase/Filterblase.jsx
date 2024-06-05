import React from "react";
import useBackgroundEffect from '../../../hooks/useBackgroundEffect';
import '../styles.scss';
import MarkdownRenderer from "../../MarkdownRenderer";

const SubpageFilterblase = () => {
  useBackgroundEffect('page-background-filterblase');
  return (
    <div className="subpage-container">
      <MarkdownRenderer file="/text/Filterblase.md" />
    </div>
  );
};

export default SubpageFilterblase;
