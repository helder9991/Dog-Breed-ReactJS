import React, { createContext, useState, useCallback, useContext } from 'react'
import { ITab } from '../components/Tabs'

interface IUseTab {
  tab: ITab[]
  setTab: (tab: ITab[]) => void
  handleChangeTab: (tabName: string) => void
  getSelectedTab: () => ITab | undefined
}

interface ITabProps {
  children: React.ReactNode
}

const TabContext = createContext<IUseTab>({} as IUseTab)

export const TabProvider: React.FC<ITabProps> = ({ children }) => {
  const [data, setData] = useState<ITab[]>([])

  const setTab = useCallback((tab: ITab[]) => {
    setData(tab)
  }, [data])

  const getSelectedTab = useCallback((): ITab | undefined => {
    return data.find(tab => tab.selected)
  }, [data])

  const handleChangeTab = (tabName: string): void => {
    const newTabs = data.map((tab) => {
      let selected = false
      if (tab.name === tabName) selected = true

      return {
        ...tab,
        selected
      }
    })

    setTab(newTabs)
  }

  return (
    <TabContext.Provider value={{ tab: data, setTab, handleChangeTab, getSelectedTab }}>
      {children}
    </TabContext.Provider>
  )
}

export function useTab(): IUseTab {
  const context = useContext(TabContext)

  if (Object.keys(context).length === 0) throw new Error('useTab must be used within an TabProvider')

  return context
}
