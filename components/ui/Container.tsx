import React from "react"

interface IContainer {
    children: React.ReactNode;
}

const Container = ({ children }:IContainer) => {
  return (
    <div className='mx-auto max-w-7xl'>{children}</div>
  )
}

export default Container