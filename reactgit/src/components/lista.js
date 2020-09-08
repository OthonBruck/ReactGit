import React from "react";
import Repository from "./repositorios";

const List = (props) => {
  const { repositories, removeRepository, updateRepository } = props;

  return (
    <ul className="repo-list">
      {repositories.map((repo, index) => (
        <Repository
          key={index}
          repo={repo}
          removeRepository={removeRepository}
          updateRepository={updateRepository}
        />
      ))}
    </ul>
  );
};

export default List;
