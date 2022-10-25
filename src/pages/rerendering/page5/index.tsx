import { memo, useState } from "react"
import { SubmitHandler, useForm, UseFormRegisterReturn } from "react-hook-form"
import { HeavyComponent } from "../../../components/HeavyComponent"
import { Input, InputProps } from "../../../components/Input"

const InputMemo = memo((props: InputProps) => <Input {...props} />)
const HeavyComponentMemo = memo(() => <HeavyComponent />)

type FormValues = {
  input1: string
  input2: string
}

const Page = () => {
  const { register, handleSubmit } = useForm<FormValues>()

  const [state, setState] = useState({ input1: "", input2: "" })

  const submit: SubmitHandler<FormValues> = (data) => setState(data)

  return (
    <form onSubmit={handleSubmit(submit)}>
      <InputMemo {...convert(register("input1"))} />
      <InputMemo {...convert(register("input2"))} />
      <small>{JSON.stringify(state)}</small>
      <HeavyComponentMemo />
      <button>submit</button>
    </form>
  )
}

function convert(original: UseFormRegisterReturn) {
  return { inputRef: original.ref, ...original }
}

export default Page
