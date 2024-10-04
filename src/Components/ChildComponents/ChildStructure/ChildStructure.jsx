import "./ChildStructure.scss"

const ChildStructure = ({ children }) => {
  return (
    <div className="child-structure">
      <div className="contenido">
        {children}
      </div>
    </div>
  )
}

export default ChildStructure