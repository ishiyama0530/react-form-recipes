import { memo, useState } from "react"
import { SubmitHandler, useForm, UseFormRegisterReturn } from "react-hook-form"
import { HeavyComponent } from "../../../components/HeavyComponent"
import { Input } from "../../../components/Input"

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
      <Input {...convert(register("input1"))} />
      <Input {...convert(register("input2"))} />
      <small>{JSON.stringify(state)}</small>
      <HeavyComponentMemo />
      <button>submit</button>
    </form>
  )
}

// Input.tsxではrefの代わりにinputRefを定義しているので、ref->inputRefにセットし直します。
function convert({ ref, ...others }: UseFormRegisterReturn) {
  return { inputRef: ref, ...others }
}

export default Page
