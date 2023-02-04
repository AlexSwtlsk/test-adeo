const filterMode = (filterValueFromCli: string, countries: Country[]) => {
  const filterValue = filterValueFromCli.slice('--filter='.length)
  if (!filterValue) {
    throw new Error('Usage: --filter=<your criteria>')
  }

  return countries
    .map(country => ({
      name: country.name,
      people: country.people.map((person) => ({ 
        name: person.name, 
        animals: filterAnimalsFromCriteria(person.animals, filterValue)
      }))
        .filter((person) => person.animals.length)
    }))
    .filter((country) => country.people.length)
}

const filterAnimalsFromCriteria = (animals: Animal[], str: string) => {
  return animals.filter(
    (animal => animal.name.toLocaleLowerCase().includes(str.toLocaleLowerCase())))
}

export {
  filterMode,
  filterAnimalsFromCriteria,
}