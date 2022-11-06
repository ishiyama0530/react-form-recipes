import { ErrorsMap } from "../../../../components/TextField"
import { UserForm } from "./useUserForm"

export const useUserForm = (): UserForm => {
  const errors: ErrorsMap<any> = {}

  const handleSubmit = (onValid: any) => () => {
    onValid()
    return Promise.resolve()
  }

  return {
    handleSubmit,
    errors,
    fieldValues: {
      name: { ...mockFieldValue, name: "name" },
      email: { ...mockFieldValue, name: "email" },
    },
  }
}

const mockFieldValue = {
  name: "mock",
  onChange: () => Promise.resolve(),
  onBlur: () => Promise.resolve(),
  inputRef: () => {},
}
