import React from "react";
import '../styles.scss';
import useBackgroundEffect from '../../../hooks/useBackgroundEffect';
import MarkdownRenderer from "../../MarkdownRenderer";


const SubpageTaeter = () => {
  useBackgroundEffect('page-background-taeter');
  return (
    <div className="subpage-container">
      <MarkdownRenderer file="/text/Taeter.md" />
    </div>
  );
};

export default SubpageTaeter;
