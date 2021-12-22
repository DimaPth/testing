import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getOneGitRepo } from "../../store/action-creators/gitOneRepoAction";
import "./GitRepo.css";

const GitRepo = () => {
  const { owner, repo } = useParams();
  const { gitOneRepo, isLoading } = useSelector((state) => state.gitOneRepo);
  const disptach = useDispatch();
  useEffect(() => {
    disptach(getOneGitRepo(owner, repo));
  }, []);
  if (isLoading) return <h2>Loading...</h2>;
  return (
    <div>
      <img src={gitOneRepo?.owner?.avatar_url} alt="avatar" width="100px" />
      <h2>{gitOneRepo?.name}</h2>
      <p>"{gitOneRepo?.description}"</p>
      <div className="repo-info">
        <span>Language: </span>
        <span>{gitOneRepo?.language}</span>
      </div>
      <div className="repo-info">
        <span>Created at: </span>
        <span>{gitOneRepo?.created_at}</span>
      </div>
      <div className="repo-info">
        <span>Updated at: </span>
        <span>{gitOneRepo?.updated_at}</span>
      </div>
      <div className="repo-info">
        <span>Pushed at: </span>
        <span>{gitOneRepo?.pushed_at}</span>
      </div>
    </div>
  );
};

export default GitRepo;
