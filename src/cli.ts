const checkArgumentsFromCli = (args: string[], features: string[]): string => {
  const givenArgument = args.slice(2)[0]
  if (!givenArgument) {
    throw new Error('No feature given')
  }

  const isAnExistingFeature = features.find((feature: string) => givenArgument.startsWith(feature))
  if (!isAnExistingFeature) {
    throw new Error('Available features: --filter=<your search> and --count')
  }
  return givenArgument
}

export { 
  checkArgumentsFromCli 
}