import { Fragment } from "react";
import {
  IssueDescription,
  IssueTitle,
  IssueTitleSpan,
  IssueTitleWrapper,
  IssueWrapper,
} from "./styles";
import Skeleton from "react-loading-skeleton";

interface IIssueCard {
  issues: number;
}

export function SkeletonIssue({ issues }: IIssueCard) {
  return (
    <Fragment>
      {Array(issues)
        .fill(0)
        .map(() => {
          return (
            <IssueWrapper>
              <IssueTitleWrapper>
                <IssueTitle>
                  {<Skeleton style={{ height: "1.2rem", width: "5rem" }} />}
                </IssueTitle>
                <IssueTitleSpan>
                {<Skeleton style={{ height: "1.2rem", width: "5rem" }} />}
                </IssueTitleSpan>
              </IssueTitleWrapper>
              <IssueDescription>
                <Skeleton count={4} />
              </IssueDescription>
            </IssueWrapper>
          );
        })}
    </Fragment>
  );
}
