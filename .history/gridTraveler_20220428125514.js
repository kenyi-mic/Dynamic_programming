const gridTraveler = (m, n) => {
  if (m === 1 && n === 1) return 1;
  if (m === 0 && n === 0) return 0;
  return getGridTravel(m - 1, n) + getGridTravel(m, n - 1);
};

console.log(gridTraveler(1, 4));
console.log(gridTraveler(5, 5));
console.log(gridTraveler(20, 20));
