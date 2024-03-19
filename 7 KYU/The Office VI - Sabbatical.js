function sabb(s, val, happiness) {
  return (s.match(/[sabticl]/gi) || []).length + val + happiness > 22 ?
    "Sabbatical! Boom!" : 'Back to your desk, boy.'
}
