import React from 'react'
import { useTab } from '../../hooks/tab'
import { Container, Tab } from './styles'

export interface ITab {
  name: string
  selected: boolean
}

interface IProps {
  className?: string
}

const Tabs: React.FC<IProps> = ({ className }) => {
  const { tab, handleChangeTab } = useTab()

  return (
    <Container className={className}>
      {
        tab.map((tab) => (
          <Tab
            key={tab.name}
            selected={tab.selected}
            onClick={(() => handleChangeTab(tab.name))}
          >
            {tab.name}
          </Tab>
        ))
      }
    </Container>
  )
}

export default Tabs
