import { useState } from "react"
import { HeavyComponent } from "../../../components/HeavyComponent"
import { Input } from "../../../components/Input"

const Page = () => {
  const [input1, setInput1] = useState("")
  const [input2, setInput2] = useState("")

  const handleChange1 = (e: React.ChangeEvent<HTMLInputElement>) =>
    setInput1(e.target.value)

  const handleChange2 = (e: React.ChangeEvent<HTMLInputElement>) =>
    setInput2(e.target.value)

  return (
    <div>
      <Input value={input1} onChange={handleChange1} />
      <Input value={input2} onChange={handleChange2} />
      <small>{JSON.stringify({ input1, input2 })}</small>
      <HeavyComponent />
    </div>
  )
}

export default Page
