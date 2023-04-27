import { Fragment, useCallback, useEffect, useMemo, useState } from "react";
import { Profile } from "./components/Profile";
import { IssueList } from "./styles";
import { Issue } from "./components/Issue";
import { api } from "../../lib/axios";
import { IssueSearch } from "./components/IssueSearch";
import { SkeletonIssue } from "./components/Issue/Skeleton";

type TypeIssue = {
  id: string;
  number: string;
  title: string;
  body: string;
  comments: string;
  created_at: string;
};

export function Home() {
  const [issues, setIssues] = useState<TypeIssue[]>([]);
  const [totalIssues, setTotalIssues] = useState(0);
  const [searchValue, setSearchValue] = useState("");

  const fetchIssues = useCallback(async () => {
    const urlParams = [
      searchValue,
      "is:issue",
      "is:open",
      "repo:Rocketseat/adonis-bull",
    ];
    const query = `/search/issues?q=${urlParams.join("%20")}`;

    await api.get(query).then((response) => {
      setIssues(response.data.items);
      setTotalIssues(response.data.total_count);
    });
  }, [searchValue]);

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>): void {
    if (e.key === "Enter") {
      setSearchValue(e.currentTarget.value);
      fetchIssues();
    }
  }

  useEffect(() => {
    fetchIssues();
  }, [fetchIssues]);

  return (
    <Fragment>
      <Profile />
      <IssueSearch onKeyDown={handleKeyDown} totalIssues={totalIssues} />

      <IssueList>
        {issues &&
          issues.map((issue) => {
            return <Issue key={issue.id} issue={issue} />;
          })}
        {issues.length === 0 && <SkeletonIssue issues={6} />}
      </IssueList>
    </Fragment>
  );
}
