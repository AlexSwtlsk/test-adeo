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
        animals: person.animals.filter(
          (animal => animal.name.toLocaleLowerCase().includes(filterValue.toLocaleLowerCase())))
      }))
        .filter((person) => person.animals.length)
    }))
    .filter((country) => country.people.length)
}

export {
  filterMode,
  // getMatchingAnimalsFromPeople,
  // getCountriesWithPeopleWhoHaveAnimalsFromCritera
}