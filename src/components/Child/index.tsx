import { useState, useImperativeHandle, Ref, forwardRef } from "react"
import { Button } from "antd"

interface RefFn {
  handle: () => void
}
const Child = (props: any, ref: Ref<RefFn>) => {
  const [counter, setCount] = useState(1)
  const handleClick = () => setCount((counter) => counter + 1)

  useImperativeHandle(
    ref,
    () => {
      return {
        handle: () => counter * 2,
      }
    },
    [counter],
  )
  return (
    <div>
      <p>counter: {counter}</p>
      <Button type="primary" onClick={handleClick}>
        Add
      </Button>
    </div>
  )
}

export default forwardRef(Child)
