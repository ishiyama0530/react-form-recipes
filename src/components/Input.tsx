// export type InputProps = JSX.IntrinsicElements["input"]

// export const Input = (props: InputProps) => {
//   return (
//     <div style={{ margin: 10 }}>
//       <input {...props} />
//     </div>
//   )
// }

export type InputProps = Omit<JSX.IntrinsicElements["input"], "ref"> & {
  inputRef?: React.Ref<HTMLInputElement>
}

export const Input = ({ inputRef, ...props }: InputProps) => {
  return (
    <div style={{ margin: 10 }}>
      <input {...props} ref={inputRef} />
    </div>
  )
}
