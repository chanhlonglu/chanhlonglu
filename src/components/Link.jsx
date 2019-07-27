import React from "react";

export default function Link(props) {
  const content = props.content;
  return (
    <a
      href={content.url}
      target="_blank"
      rel="noopener noreferrer"
      className={content.imgSrc ? "" : "external-site"}
    >
      {content.imgSrc ? (
        <img
          src={content.imgSrc}
          alt={content.imgAlt}
          className="project-img"
        />
      ) : (
        content.text
      )}
    </a>
  );
}
