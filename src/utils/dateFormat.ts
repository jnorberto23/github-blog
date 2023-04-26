import { formatDuration, intervalToDuration } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

export function DateFromNow(date: string) {
  const duration = intervalToDuration({
    start: new Date(),
    end: new Date(date),
  });

  const durations = formatDuration(duration, {
    delimiter: ", ",
    locale: ptBR,
  });

  return durations;
}
