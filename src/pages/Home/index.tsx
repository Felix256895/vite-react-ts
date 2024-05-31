import { useState, useEffect, useRef } from "react"
import { useNavigate, NavLink } from "react-router-dom"
import { Button, Row, Col } from "antd"
import { useAuth } from "@/provider/authProvider"
import useStore from "@/store"
import styles from "./style.module.scss"

const Home: React.FC = () => {
  const { setToken } = useAuth()
  const navigate = useNavigate()
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)
  const ref = useRef(0)

  ref.current = count2

  const handleClick = () => {
    setToken("")
    navigate("/login", { replace: true })
  }

  useEffect(() => {
    setTimeout(() => {
      console.log(count1, "count1")
      console.log(ref, "count2")
    }, 5000)
  }, [count1])

  const handleCount1 = () => {
    setCount1(count1 + 1)
  }

  const handleCount2 = () => {
    setCount2(count2 + 1)
  }

  const bears = useStore((state) => state.bears)
  const handleAdd = useStore((state) => state.add)
  const handleSubtract = useStore((state) => state.subtract)
  const handleReset = useStore((state) => state.reset)
  return (
    <>
      <div className={styles.container}>
        <span>Home</span>
        <Button type="primary" onClick={handleClick}>
          Logout
        </Button>
      </div>
      <div className={styles.container}>
        <Button type="primary" onClick={handleCount1}>
          Count1 {count1}
        </Button>
        <Button type="primary" onClick={handleCount2}>
          Count2 {count2}
        </Button>
      </div>
      <div>
        <h2>zustand {bears}</h2>
        <Button type="primary" onClick={handleAdd}>
          Add
        </Button>
        <Button type="primary" onClick={handleSubtract}>
          Subtract
        </Button>
        <Button type="primary" onClick={handleReset}>
          Reset
        </Button>
      </div>
      <Row>
        <Col span={4}>
          <NavLink to="/about">About</NavLink>
        </Col>
        <Col span={4}>
          <NavLink to="/canvas">Canvas</NavLink>
        </Col>
      </Row>
    </>
  )
}

export default Home
