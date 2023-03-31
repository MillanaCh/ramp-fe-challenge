import { FunctionComponent } from "react"

type InputCheckboxProps = {
  id: string
  checked?: boolean
  onChange: (newValue: boolean) => void
  disabled?: boolean
}

export type InputCheckboxComponent = FunctionComponent<InputCheckboxProps>
