import { formatDuration, intervalToDuration } from "date-fns";

export function DateFromNow(date: string){
  const duration = intervalToDuration({
    start: new Date(),
    end: new Date(date),
  });
  
  formatDuration(duration, {
    delimiter: ", ",
  });

  return duration;
}
