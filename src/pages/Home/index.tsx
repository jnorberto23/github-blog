import { Fragment, useCallback, useEffect, useState } from "react";
import { Profile } from "./components/Profile";
import { PostList } from "./styles";
import { Issue } from "./components/Issue";
import { api } from "../../lib/axios";

type TypeIssue = {
  id: string;
  title: string;
  body: string;
  comments: string;
  created_at: string;
};

export function Home() {
  const [issues, setIssues] = useState<TypeIssue[]>([])
  const fetchIssues = useCallback(async(query: string | null) => {
    const url = `/search/issues?q=${query}%20is:issue%20is:open%20repo:Rocketseat/adonis-bull/`
    await api.get(url).then((response) => {
    const issuesList: TypeIssue[]  = response.data.items;
    setIssues(issuesList);
    });
  }, [])
   
  useEffect(() => {
    fetchIssues('');
  }, [fetchIssues]);
  
  console.log('issues', issues)
  return (
    <Fragment>
      <Profile />
      <PostList>
        {issues && issues.map((issue) => {
          return <Issue key={issue.id} issue={issue}/>;
        })}
      </PostList>
    </Fragment>
  );
}
