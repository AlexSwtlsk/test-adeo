const filterMode = (filterValueFromCli: string, countries: Country[]) => {
  const filterValue = filterValueFromCli.slice('--filter='.length)
  if (!filterValue) {
    throw new Error('Usage: --filter=<your criteria>')
  }

  return getCountriesWithAnimalsFromCritera(countries, filterValue)
}

const getCountriesWithAnimalsFromCritera = (countries: Country[], filterValue: string): Country[] => {
  return countries
}

const getMatchingAnimalsFromPeople = (people: Person) => {
  //
}

export {
  filterMode,
  getCountriesWithAnimalsFromCritera
}