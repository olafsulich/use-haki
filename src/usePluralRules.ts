const usePluralRules = (num: number) => {
  const pr = new Intl.PluralRules('en-US', { type: 'ordinal' });

  const ordinals = {
    one: 'st',
    two: 'nd',
    few: 'rd',
    many: 'th',
    zer: 'th',
    other: 'th',
  };

  return `${num}${ordinals[pr.select(num)]}`;
};

export default usePluralRules;
