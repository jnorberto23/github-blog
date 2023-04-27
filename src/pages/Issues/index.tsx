import { useParams } from "react-router-dom";
import { IssueHeader } from "./components/IssueHeader";
import { Fragment, useCallback, useEffect, useState } from "react";
import { IssueBody } from "./components/IssueBody";
import { api } from "../../lib/axios";

type TypeIssue = {
  id: string;
  number: string;
  title: string;
  body: string;
  comments: string;
  created_at: string;
  html_url: string;
  user: {
    login: string;
  }
};


export function Issues() {
  const { id } = useParams();
  const [issue, setIssue] = useState<TypeIssue>();

  const fetchIssue = useCallback(async (id: string | undefined) => {
    const query = `repos/Rocketseat/adonis-bull/issues/${id}`;

    await api.get(query).then((response) => {
      setIssue(response.data);
    });
  }, []);

  useEffect(() => {
    fetchIssue(id)
  }, [fetchIssue, id])

  return (
    <Fragment>
      {issue && <IssueHeader issue={issue}/>} 
      {issue && <IssueBody body={issue.body}/>}
    </Fragment>
  );
}
