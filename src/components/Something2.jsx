import React from 'react'
import { Popover } from 'antd'
import 'antd/es/popover/style/index.css'

export const Something2 = ({ title, children }) => {
  return (
    <Popover placement="bottom" title={title} trigger="hover">
      {children}
    </Popover>
  )
}
