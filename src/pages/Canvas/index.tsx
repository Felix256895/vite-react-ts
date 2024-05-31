import { useRef, useState } from "react"
import { Button, ColorPicker } from "antd"
import {
  IconEraser,
  IconPencil,
  IconRestore,
  IconCloudDownload,
} from "@tabler/icons-react"
import { ReactSketchCanvas, type ReactSketchCanvasRef } from "@/components/SketchCanvas"
import styles from "./style.module.scss"

const Canvas = () => {
  const [eraser, setEraser] = useState(false)
  const canvas = useRef<ReactSketchCanvasRef>(null)
  const [strokeColor, setStrokeColor] = useState<string>("#1677ff")

  const handleReset = () => {
    if (canvas.current) {
      canvas.current.resetCanvas()
    }
  }

  const handleDownload = () => {
    if (canvas.current) {
      canvas.current
        .exportImage("png")
        .then((data: string) => {
          console.log(data)
        })
        .catch((e: any) => {
          console.log(e)
        })
    }
  }

  const handlePencilClick = () => {
    setEraser(false)
    if (canvas.current) {
      canvas.current.eraseMode(false)
    }
  }

  const handleEraserClick = () => {
    setEraser(true)
    if (canvas.current) {
      canvas.current.eraseMode(true)
    }
  }

  return (
    <div className={styles.canvas}>
      <ReactSketchCanvas
        style={{ border: "0.0625rem solid #9c9c9c", borderRadius: "0.25rem" }}
        ref={canvas}
        height="400px"
        strokeWidth={5}
        strokeColor={strokeColor}
      />
      <div className={styles.canvas_btn}>
        <ColorPicker
          value={strokeColor}
          onChange={(val) => setStrokeColor(val.toHexString())}
        />
        <Button
          type="primary"
          shape="circle"
          icon={<IconPencil />}
          onClick={handlePencilClick}
        />
        <Button
          type="primary"
          shape="circle"
          icon={<IconEraser />}
          onClick={handleEraserClick}
        />
        <Button
          type="primary"
          shape="circle"
          icon={<IconCloudDownload />}
          onClick={handleDownload}
        />
        <Button
          onClick={handleReset}
          type="primary"
          shape="circle"
          icon={<IconRestore />}
        />
      </div>
    </div>
  )
}

export default Canvas
