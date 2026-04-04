import { useController, type CoverageRadioGroupProps } from './useController'

export const CoverageRadioGroup: React.FC<CoverageRadioGroupProps> = (props) => {
  const controller = useController(props)
  return <div>{JSON.stringify(controller)}</div>
}
