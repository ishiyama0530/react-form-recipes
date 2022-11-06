import { zodResolver } from "@hookform/resolvers/zod"
import {
  SubmitErrorHandler as SubmitErrorHandlerOriginal,
  SubmitHandler as SubmitHandlerOrigin,
  useForm,
  UseFormRegisterReturn,
} from "react-hook-form"
import { z } from "zod"
import { ErrorsMap } from "../../../../components/TextField"

const schema = z.object({
  name: z
    .string()
    .min(5)
    .regex(/^[a-z]+$/, "a ~ z"),
  email: z.string().email(),
})
type FormValues = z.infer<typeof schema>
const defaultValues: FormValues = { name: "", email: "" } as const

export type SubmitHandler = SubmitHandlerOrigin<FormValues>
export type SubmitErrorHandler = SubmitErrorHandlerOriginal<FormValues>

export function useUserForm() {
  const {
    register,
    handleSubmit: handleSubmitOriginal,
    formState: { errors: rawErrors },
  } = useForm({
    mode: "onChange",
    resolver: zodResolver(schema),
    defaultValues,
  })

  const errors: ErrorsMap<keyof FormValues> = {
    name: convertError(rawErrors.name?.message),
    email: convertError(rawErrors.email?.message),
  }

  const handleSubmit = (
    onValid: SubmitHandler,
    onInvalid: SubmitErrorHandler
  ) => handleSubmitOriginal(onValid, onInvalid)

  return {
    handleSubmit,
    errors,
    fieldValues: {
      name: convertFieldValues(register("name")),
      email: convertFieldValues(register("email")),
    },
  }
}

function convertError(error: string | undefined) {
  return error ? [error] : undefined
}

function convertFieldValues(original: UseFormRegisterReturn) {
  return { inputRef: original.ref, ...original }
}
