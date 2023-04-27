import ReactMarkdown from "react-markdown";
import { IssueBodyWrapper } from "./styles";
import gfm from "remark-gfm";
import rhj from "remark-highlight.js"
interface IIssueBody {
  body: string;
}

export function IssueBody({ body }: IIssueBody) {
  return (
    <IssueBodyWrapper>
      <ReactMarkdown remarkPlugins={[gfm, rhj]} children={body}/>
    </IssueBodyWrapper>
  );
}
