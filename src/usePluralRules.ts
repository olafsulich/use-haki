import { ordinals } from './helpers/ordinals';

const usePluralRules = (num: number) => {
  const pr = new Intl.PluralRules('en-US', { type: 'ordinal' });

  return `${num}${ordinals[pr.select(num)]}`;
};

export default usePluralRules;
