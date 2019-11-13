import React from 'react'
import { Popover } from 'antd'
import 'antd/es/popover/style/index.css'

export const Something1 = ({ title, children }) => {
  return (
    <Popover placement="top" title={title} trigger="hover">
      {children}
    </Popover>
  )
}
