import { FC, ReactNode } from 'react'

import "./ChildStructure.scss"

interface ChildStructureProps {
  children: ReactNode
}

const ChildStructure: FC<ChildStructureProps> = ({ children }) => {
  return (
    <div className="child-structure">
      <div className="contenido">
        {children}
      </div>
    </div>
  )
}

export default ChildStructure
