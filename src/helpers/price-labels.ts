import { parseISODuration, PeriodUnit } from "./duration-helper";

export const priceLabels: Record<string, string> = {
  P3M: "quarterly",
  P1M: "monthly",
  P1Y: "yearly",
  P2W: "2 weeks",
  P1D: "daily",
  PT1H: "hourly",
  P1W: "weekly",
};

export const formatPrice = (priceInCents: number, currency: string): string => {
  const price = priceInCents / 100;
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
  });

  return formatter.format(price);
};

export const getRenewsLabel = (duration: string): string => {
  const period = parseISODuration(duration);
  if (!period) {
    return "unknown";
  }

  const numberPeriods = period.number;
  if (numberPeriods === 1) {
    switch (period.unit) {
      case PeriodUnit.Year:
        return "1年";
      case PeriodUnit.Month:
        return "1ヶ月";
      case PeriodUnit.Week:
        return "1週間";
      case PeriodUnit.Day:
        return "1日";
    }
  } else {
    return `every ${numberPeriods} ${period.unit}s`;
  }
};
