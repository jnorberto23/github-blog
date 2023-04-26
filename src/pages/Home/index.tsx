import { Fragment, useCallback, useEffect, useMemo, useState } from "react";
import { Profile } from "./components/Profile";
import { IssueList } from "./styles";
import { Issue } from "./components/Issue";
import { api } from "../../lib/axios";
import { IssueSearch } from "./components/IssueSearch";

type TypeIssue = {
  id: string;
  title: string;
  body: string;
  comments: string;
  created_at: string;
};

export function Home() {
  const [issues, setIssues] = useState<TypeIssue[]>([]);
  const [searchValue, setSearchValue] = useState("");

  const fetchIssues = useCallback(async () => {
    const urlParams = [searchValue, "is:issue", "is:open", "repo:Rocketseat/adonis-bull"]
    const query = `/search/issues?q=${urlParams.join("%20")}`;

    await api.get(query).then((response) => {
      setIssues(response.data.items);
    });

  }, [searchValue]);

  function handleSubmitInput(e: React.KeyboardEvent<HTMLInputElement>): void {
    if (e.key === 'Enter') {
      setSearchValue(e.currentTarget.value);
    }
  }

  useEffect(() => {
    fetchIssues();
  }, [fetchIssues, searchValue]);

  return (
    <Fragment>
      <Profile />
      <IssueSearch onKeyDown={handleSubmitInput}/>
      <IssueList>
        {issues &&
          issues.map((issue) => {
            return <Issue key={issue.id} issue={issue} />;
          })}
      </IssueList>
    </Fragment>
  );
}
