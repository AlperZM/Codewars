function companyBotStrategy(trainingData) {
  trainingData = trainingData.filter(f => f[1] === 1);
  return trainingData.reduce((a, b) => a + b[0], 0) / trainingData.length || 0
}
