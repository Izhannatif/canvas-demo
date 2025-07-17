import { useState, useEffect } from "react"

const useFontFamily = () => {
  const [fontFamily, setFontFamily] = useState("Arial, sans-serif")

  useEffect(() => {
    // Get the computed font family from the body element
    const bodyStyles = window.getComputedStyle(document.body)
    const bodyFontFamily = bodyStyles.fontFamily

    if (bodyFontFamily && bodyFontFamily !== "Arial, sans-serif") {
      setFontFamily(bodyFontFamily)
    }
  }, [])

  return fontFamily
}


export default useFontFamily
