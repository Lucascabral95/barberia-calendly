import { FC, useEffect, useState } from 'react'
import { PopupWidget } from 'react-calendly'

import { CALENDLY_CONFIG } from '../../../infrasctruture/constants'
import './Calendly.scss'

const Calendly: FC = () => {
  const [rootElement, setRootElement] = useState<HTMLElement | null>(null)

  useEffect(() => {
    const root = document.getElementById('root')
    setRootElement(root)
  }, [])

  const { url, buttonText, textColor, backgroundColor } = CALENDLY_CONFIG

  if (!rootElement) {
    return null
  }

  return (
    <PopupWidget
      url={url}
      rootElement={rootElement}
      text={buttonText}
      textColor={textColor}
      color={backgroundColor}
    />
  )
}

export default Calendly
