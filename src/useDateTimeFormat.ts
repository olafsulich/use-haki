const useDateTimeFormat = (locales: string | string[], options: Intl.DateTimeFormatOptions) => {
  const now = new Date();
  const dateFormat = Intl.DateTimeFormat(locales, options).format(now);
  return dateFormat;
};

export default useDateTimeFormat;
