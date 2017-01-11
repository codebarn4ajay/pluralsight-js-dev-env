import numeral from 'numeral';

const coursValue=numeral(1000).format('$0,0.00');
/* eslint-disable no-console  */
console.log(`I would pay ${coursValue} for this awesome course`);