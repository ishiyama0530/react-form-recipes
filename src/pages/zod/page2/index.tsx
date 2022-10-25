import { useRef, useState } from "react"
import { z, ZodError } from "zod"
import { TextField } from "../../../components/TextField"

const scheme = z.object({
  name: z
    .string()
    .min(5)
    .regex(/^[a-z]+$/, "a ~ z"),
  email: z.string().email(),
})
type FormData = z.infer<typeof scheme>
const defaultFormData: FormData = { name: "", email: "" } as const

const Page2 = () => {
  const nameRef = useRef<HTMLInputElement>(null)
  const emailRef = useRef<HTMLInputElement>(null)
  const [zodError, setZodError] = useState<ZodError<FormData> | null>(null)
  const errors = zodError?.flatten().fieldErrors

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData: FormData = {
      name: nameRef.current?.value ?? "",
      email: emailRef.current?.value ?? "",
    }
    if (validation(formData)) {
      alert("OK")
    } else {
      alert("INVALID")
    }
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const formData: FormData = {
      name: nameRef.current?.value ?? "",
      email: emailRef.current?.value ?? "",
    }
    validation(formData)
  }

  const validation = (data: FormData) => {
    const result = scheme.safeParse(data)
    if (result.success) {
      setZodError(null)
    } else if (JSON.stringify(zodError) !== JSON.stringify(result.error)) {
      setZodError(result.error)
    }
    return result.success
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div>名前:</div>
      <TextField
        id="name"
        defaultValue={defaultFormData.name}
        errors={errors}
        inputRef={nameRef}
        onChange={handleChange}
      />
      <div>メール:</div>
      <TextField
        id="email"
        defaultValue={defaultFormData.email}
        errors={errors}
        inputRef={emailRef}
        onChange={handleChange}
      />
      <button>SUBMIT</button>
    </form>
  )
}

export default Page2
