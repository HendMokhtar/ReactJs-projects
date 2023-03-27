import React from 'react'
import rgbToHex from '../utilies'

export default function SingleColor(props) {
 const hexText = rgbToHex(...props.item.rgb)
 const [alert, setAlert] = React.useState(false)
 React.useEffect(() => {
  const timeOut = setTimeout(() => {
   setAlert(false)
  }, 2000)
  return () => clearTimeout(timeOut)
 },[alert])
 return (
  <article className={props.index > 10 ? "color color-light" : "color"}
   style={{ backgroundColor: `rgb(${props.item.rgb})` }}
   onClick={() => {
    setAlert(true)
    navigator.clipboard.writeText(hexText)
   }}
  >
   <h3 className='percent-value'>{props.item.weight}%</h3>
   <p className='color-value'>{hexText}</p>
   {alert && <p className='alert'>copied to clipboard</p>}
  </article>
 )
}