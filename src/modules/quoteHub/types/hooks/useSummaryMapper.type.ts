// Define the hook return type here
export type UseSummaryMapperReturn = {
  quoteSummary: {
    personalInformationSummary: { label: string; value: string | number | string[] }[]
    coverageSummary: { label: string; value: string | number | string[] }[]
  }
}
