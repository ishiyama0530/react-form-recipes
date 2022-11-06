import { InputField } from "../../../components/InputField"
import {
  SubmitErrorHandler,
  SubmitHandler,
  UserForm,
  useUserForm,
} from "./hooks/useUserForm"

const Page = () => {
  const { handleSubmit, errors, fieldValues }: UserForm = useUserForm()

  const handleValid: SubmitHandler = (data, event) => alert("OK")
  const handleInvalid: SubmitErrorHandler = (errors, event) => alert("INVALID")

  return (
    <form onSubmit={handleSubmit(handleValid, handleInvalid)} noValidate>
      <div>名前:</div>
      <InputField {...fieldValues.name} errors={errors.name} />
      <div>メール:</div>
      <InputField {...fieldValues.email} errors={errors.email} />
      <button>submit</button>
    </form>
  )
}

export default Page
