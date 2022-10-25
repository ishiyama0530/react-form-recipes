import { memo, useCallback, useState } from "react"
import { HeavyComponent } from "../../../components/HeavyComponent"
import { Input, InputProps } from "../../../components/Input"

const InputMemo = memo((props: InputProps) => <Input {...props} />)
const HeavyComponentMemo = memo(() => <HeavyComponent />)

const Page = () => {
  const [input1, setInput1] = useState("")
  const [input2, setInput2] = useState("")

  const handleChange1 = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => setInput1(e.target.value),
    []
  )

  const handleChange2 = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => setInput2(e.target.value),
    []
  )

  return (
    <div>
      <InputMemo value={input1} onChange={handleChange1} />
      <InputMemo value={input2} onChange={handleChange2} />
      <small>{JSON.stringify({ input1, input2 })}</small>
      <HeavyComponentMemo />
    </div>
  )
}

export default Page
