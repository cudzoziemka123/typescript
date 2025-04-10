export const dateStringToDate = (datestring: string): Date => {
  const dateParts = datestring
    .split('/')
    .map((value: string): number => parseInt(value));
  return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
};
