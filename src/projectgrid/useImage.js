
import { useState, useEffect } from "react"

const useImage = (url) => {
  const [image, setImage] = useState(null)
  const [status, setStatus] = useState("loading")

  useEffect(() => {
    if (!url) return

    const img = new Image()
    img.crossOrigin = "anonymous"

    img.onload = () => {
      setImage(img)
      setStatus("loaded")
    }

    img.onerror = () => {
      setStatus("error")
    }

    img.src = url

    return () => {
      img.onload = null
      img.onerror = null
    }
  }, [url])

  return [image, status]
}

export default useImage
