import { useController, type PesonalInfoFormProps } from './useController'

export const PesonalInfoForm: React.FC<PesonalInfoFormProps> = (props) => {
  const controller = useController(props)
  return <div>{JSON.stringify(controller)}</div>
}
