import { useRef } from "react"
import { NavLink } from "react-router-dom"
import Child from "@/components/Child"
import { Button } from "antd"
import useStore from "@/store"

interface RefFn {
  handle: () => void
}

const About: React.FC = () => {
  const myRef = useRef<RefFn>(null)
  const handleClick = () => {
    const c = myRef?.current?.handle()
    console.log(c)
  }

  const bears = useStore((state) => state.bears)
  return (
    <div>
      <Child ref={myRef} />
      <Button type="primary" onClick={handleClick}>
        click {bears}
      </Button>
      <div>
        <NavLink to="/">Home</NavLink>
      </div>
    </div>
  )
}

export default About
