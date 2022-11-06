import { zodResolver } from "@hookform/resolvers/zod"
import {
  SubmitErrorHandler,
  SubmitHandler,
  useForm,
  UseFormRegisterReturn,
} from "react-hook-form"
import { z } from "zod"
import { ErrorsMap, TextField } from "../../../components/TextField"

const schema = z.object({
  name: z
    .string()
    .min(5)
    .regex(/^[a-z]+$/, "a ~ z"),
  email: z.string().email(),
})
type FormData = z.infer<typeof schema>
const defaultValues: FormData = { name: "", email: "" } as const

const Page = () => {
  const {
    register,
    handleSubmit,
    formState: { errors: rawErrors },
  } = useForm({
    mode: "onChange",
    resolver: zodResolver(schema),
    defaultValues,
  })

  const errors: ErrorsMap<keyof FormData> = {
    name: rawErrors.name?.message ? [rawErrors.name?.message] : undefined,
    email: rawErrors.email?.message ? [rawErrors.email?.message] : undefined,
  }

  const handleValid: SubmitHandler<FormData> = (data, event) => alert("OK")
  const handleInvalid: SubmitErrorHandler<FormData> = (errors, event) =>
    alert("INVALID")

  return (
    <form onSubmit={handleSubmit(handleValid, handleInvalid)} noValidate>
      <div>名前:</div>
      <TextField {...convert(register("name"))} id="name" errors={errors} />
      <div>メール:</div>
      <TextField {...convert(register("email"))} id="email" errors={errors} />
      <button>submit</button>
    </form>
  )
}

function convert(original: UseFormRegisterReturn) {
  return { inputRef: original.ref, ...original }
}

export default Page
