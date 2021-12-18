import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const GitRepo = () => {
  const { gitRepos } = useSelector((state) => state.git);
  const { id } = useParams();
  const filteredRepo = gitRepos.find((item) => item.id === +id);
  return (
    <div>
      <h3>{filteredRepo.name}</h3>
      <div>id: {filteredRepo.id}</div>
      <div>created at: {filteredRepo.created_at}</div>
      <div>language: {filteredRepo.language}</div>
      <div>watchers: {filteredRepo.watchers}</div>
    </div>
  );
};

export default GitRepo;
