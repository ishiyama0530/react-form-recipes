import { zodResolver } from "@hookform/resolvers/zod"
import {
  SubmitErrorHandler,
  SubmitHandler,
  useForm,
  UseFormRegisterReturn,
} from "react-hook-form"
import { z } from "zod"
import { InputField } from "../../../components/InputField"

const schema = z.object({
  name: z.string().min(5),
  email: z.string().email(),
})
type FormData = z.infer<typeof schema>
const defaultValues: FormData = { name: "", email: "" } as const

const Page = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: zodResolver(schema),
    defaultValues,
  })

  const handleValid: SubmitHandler<FormData> = (data, event) => alert("OK")
  const handleInvalid: SubmitErrorHandler<FormData> = (errors, event) =>
    alert("INVALID")

  return (
    <form onSubmit={handleSubmit(handleValid, handleInvalid)} noValidate>
      <div>名前:</div>
      <InputField
        {...convert(register("name"))}
        errors={resolve(errors.name)}
      />
      <div>メール:</div>
      <InputField
        {...convert(register("email"))}
        errors={resolve(errors.email)}
      />
      <button>submit</button>
    </form>
  )
}

// InputField.tsxはrefの代わりにinputRefを定義しているので、ref->inputRefにセットし直します。
function convert({ ref, ...others }: UseFormRegisterReturn) {
  return { inputRef: ref, ...others }
}

function resolve(field?: { message?: string }) {
  return field?.message ? [field?.message] : undefined
}

export default Page
