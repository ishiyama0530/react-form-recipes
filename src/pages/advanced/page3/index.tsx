import { InputField } from "../../../components/InputField"
import {
  SubmitErrorHandler,
  SubmitHandler,
  UserForm,
} from "./hooks/useUserForm"
import { useUserForm } from "./hooks/useUserFormMock"

const Page = () => {
  const { handleSubmit, errors, fieldValues }: UserForm = useUserForm()

  const handleValid: SubmitHandler = (data, event) => alert("OK")
  const handleInvalid: SubmitErrorHandler = (errors, event) => alert("INVALID")

  return (
    <form onSubmit={handleSubmit(handleValid, handleInvalid)} noValidate>
      <div>名前:</div>
      <InputField {...fieldValues.name} id="name" errors={errors.name} />
      <div>メール:</div>
      <InputField {...fieldValues.email} id="email" errors={errors.email} />
      <button>submit</button>
    </form>
  )
}

export default Page
