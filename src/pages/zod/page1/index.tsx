import { useState } from "react"
import { z, ZodError } from "zod"
import { TextField } from "../../../components/TextField"

const schema = z.object({
  name: z
    .string()
    .min(5)
    .regex(/^[a-z]+$/, "a ~ z"),
  email: z.string().email(),
})
type FormData = z.infer<typeof schema>
const defaultFormData: FormData = { name: "", email: "" } as const

const Page = () => {
  const [formData, setFormData] = useState(defaultFormData)
  const [zodError, setZodError] = useState<ZodError<FormData> | null>(null)
  const errors = zodError?.flatten().fieldErrors

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (validation(formData)) {
      alert("OK")
    } else {
      alert("INVALID")
    }
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newFormData = { ...formData, [event.target.id]: event.target.value }
    validation(newFormData)
    setFormData(newFormData)
  }

  const validation = (data: FormData) => {
    const result = schema.safeParse(data)
    if (result.success) {
      setZodError(null)
    } else {
      setZodError(result.error)
    }
    return result.success
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div>名前:</div>
      <TextField
        id="name"
        value={formData.name}
        errors={errors}
        onChange={handleChange}
      />
      <div>メール:</div>
      <TextField
        id="email"
        value={formData.email}
        errors={errors}
        onChange={handleChange}
      />
      <button>SUBMIT</button>
    </form>
  )
}

export default Page
