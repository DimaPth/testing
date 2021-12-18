import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import useDebounce from "../../hooks/useDebounce";
import { getGitRepos } from "../../store/action-creators/gitAction";

const GitContaiter = () => {
  const [search, setSearch] = useState("");
  const { gitRepos, isLoading } = useSelector((state) => state.git);
  const debouncedSearch = useDebounce(search, 500);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGitRepos(debouncedSearch));
  }, [debouncedSearch]);

  return (
    <div>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div>
        {isLoading ? (
          <h2>loading...</h2>
        ) : (
          gitRepos.map((repo) => {
            return (
              <NavLink key={repo.id} to={`/${repo.id}`}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    border: "1px solid teal",
                    marginTop: "5px",
                    padding: "5px",
                    cursor: "pointer",
                  }}
                >
                  <span>{repo.name}</span>
                  <span>id: {repo.id}</span>
                </div>
              </NavLink>
            );
          })
        )}
      </div>
    </div>
  );
};

export default GitContaiter;
