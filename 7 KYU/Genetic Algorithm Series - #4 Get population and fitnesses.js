const mapPopulationFit = (population, fitness) => {
  return population.map(v => {
    return { chromosome: v, fitness: fitness(v) };
  });
};
