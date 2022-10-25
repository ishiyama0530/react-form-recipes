import { memo, useRef, useState } from "react"
import { HeavyComponent } from "../../../components/HeavyComponent"
import { Input, InputProps } from "../../../components/Input"

const InputMemo = memo((props: InputProps) => <Input {...props} />)
const HeavyComponentMemo = memo(() => <HeavyComponent />)

const Page = () => {
  const input1Ref = useRef<HTMLInputElement>(null)
  const input2Ref = useRef<HTMLInputElement>(null)

  const [values, setValues] = useState({ input1: "", input2: "" })

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setValues({
      input1: input1Ref.current?.value ?? "",
      input2: input2Ref.current?.value ?? "",
    })
  }

  return (
    <form onSubmit={submit}>
      <InputMemo inputRef={input1Ref} />
      <InputMemo inputRef={input2Ref} />
      <small>{JSON.stringify(values)}</small>
      <HeavyComponentMemo />
      <button>submit</button>
    </form>
  )
}

export default Page
