const parseFilters = (filters) => filters.stops.reduce((acc, checkbox) => checkbox.checked ? [...acc, checkbox.value] : acc, []);

export default parseFilters;