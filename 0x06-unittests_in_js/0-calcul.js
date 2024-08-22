
function calculateNumber (a, b) {
  const aRound = Math.round(a);
  const bRound = Math.round(b);
  const c = aRound + bRound;
  return c;
}

module.exports = calculateNumber;
