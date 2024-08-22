function calculateNumber(type, a, b) {
  const aRound = Math.round(a);
  const bRound = Math.round(b);
  let c = 0;
  /* using the switch case */
  switch (type) {
    case 'SUM':
      c = aRound + bRound;
      break;
    case 'SUBTRACT':
      c = aRound - bRound;
      break;
    case 'DIVIDE':
      if (bRound === 0) {
        c = "Error";
      } else {
        c = aRound / bRound;
      }
      break;
   }
   return c;
}

module.exports = calculateNumber;
