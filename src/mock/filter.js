const filterNames = [
  `everything`, `future`, `past`
];

export const generateFilters = () => {
  return filterNames.map((it) => {
    return {name: it};
  });
};

