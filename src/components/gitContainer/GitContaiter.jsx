import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import useDebounce from "../../hooks/useDebounce";
import { getGitRepos } from "../../store/action-creators/gitAction";

const GitContaiter = () => {
  const [search, setSearch] = useState("");
  const [filterBy, setFilterBy] = useState("");
  const { gitRepos, isLoading } = useSelector((state) => state.git);
  const debouncedSearch = useDebounce(search, 500);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGitRepos(debouncedSearch, filterBy));
  }, [debouncedSearch, filterBy]);

  return (
    <div>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div style={{ margin: "15px 0" }}>
        filter by:&nbsp;
        <select onChange={(e) => setFilterBy(e.target.value)}>
          <option value="">best match</option>
          <option value="stars">stars</option>
          <option value="updated">updated</option>
        </select>
      </div>
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
                  <span>updated at: {repo.updated_at}</span>
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
