import React from 'react'
import ComponentWrapper from './ComponentWrapper'

const Youtube = ({ id, src }: any) => {
  return (
    <ComponentWrapper id={id}>
        <iframe className="rounded-[20px] w-full h-[250px]" src={src} />
    </ComponentWrapper>
  )
}

export default Youtube