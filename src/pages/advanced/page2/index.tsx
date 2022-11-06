import { TextField } from "../../../components/TextField"
import {
  SubmitErrorHandler,
  SubmitHandler,
  useUserForm,
} from "./hooks/useUserForm"

const Page = () => {
  const { handleSubmit, errors, fieldValues } = useUserForm()

  const handleValid: SubmitHandler = (data, event) => alert("OK")
  const handleInvalid: SubmitErrorHandler = (errors, event) => alert("INVALID")

  return (
    <form onSubmit={handleSubmit(handleValid, handleInvalid)} noValidate>
      <div>名前:</div>
      <TextField {...fieldValues.name} id="name" errors={errors} />
      <div>メール:</div>
      <TextField {...fieldValues.email} id="email" errors={errors} />
      <button>submit</button>
    </form>
  )
}

export default Page
