import React from "react";
import useBackgroundEffect from '../../../hooks/useBackgroundEffect';
import '../styles.scss';
import MarkdownRenderer from "../../MarkdownRenderer";

const SubpageHetze = () => {
  useBackgroundEffect('page-background-hetze');

  return (
    <div className="subpage-container">
      <MarkdownRenderer file="/text/Hetze.md" />
    </div>
  );
};


export default SubpageHetze;
