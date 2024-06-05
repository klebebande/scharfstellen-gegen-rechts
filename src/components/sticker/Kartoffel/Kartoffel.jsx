import React from "react";
import '../styles.scss';
import useBackgroundEffect from '../../../hooks/useBackgroundEffect';
import MarkdownRenderer from "../../MarkdownRenderer";


const SubpageKartoffel = () => {
  useBackgroundEffect('page-background-kartoffel');
  return (
    <div className="subpage-container">
      <MarkdownRenderer file="/text/Kartoffel.md" />
    </div>
  );
};


export default SubpageKartoffel;
