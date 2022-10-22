import React from "react"

export type ErrorsMap<T extends string = string> = { [K in T]?: string[] }
type PropsBase = Omit<JSX.IntrinsicElements["input"], "type" | "id">
export type Props<T extends string = string> = PropsBase & {
  id: T
  errors?: ErrorsMap<T>
  inputRef?: React.Ref<HTMLInputElement>
}

export const TextField = <T extends string>(props: Props<T>) => {
  const { errors, style, inputRef, ...others } = props
  const error = errors?.[others.id]
  return (
    <div>
      <input
        type="text"
        style={{ borderColor: error ? "red" : "inherit", ...style }}
        {...others}
        ref={inputRef}
      />
      {error?.map((x) => (
        <p style={{ color: "red" }}>{x}</p>
      ))}
    </div>
  )
}
