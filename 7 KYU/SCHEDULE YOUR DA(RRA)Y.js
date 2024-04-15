const dayPlan = (hours, tasks, duration) => {
  const taskMins = tasks * duration;
  if (taskMins > hours * 60) return "You're not sleeping tonight!";
  const breakMins = Math.round((hours * 60 - taskMins) / (tasks - 1));
  return Array.from({ length: tasks + tasks - 1 }, (_, i) => !(i % 2) ? duration : breakMins);
}
