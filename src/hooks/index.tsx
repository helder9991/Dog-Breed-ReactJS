import React from 'react'

import { AuthProvider } from './auth'
import { TabProvider } from './tab'

interface IProps {
  children: React.ReactNode
}

const AppProvider: React.FC<IProps> = ({ children }) => (
  <TabProvider>
    <AuthProvider>
      {children}
    </AuthProvider >
  </TabProvider>
)

export default AppProvider
