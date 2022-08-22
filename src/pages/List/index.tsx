import React, { useCallback, useEffect, useState } from 'react'

import Loading from '../../components/Loading'
import ImageModal from '../../components/ImageModal'
import { useTab } from '../../hooks/tab'
import { Container, Content, TabsContainer } from './styles'
import { api } from '../../services/api'
import { toast } from 'react-toastify'

interface IResponse {
  breed: string
  list: string[]
}

const List: React.FC = () => {
  const [animals, setAnimals] = useState<IResponse>({} as IResponse)
  const [loading, setLoading] = useState(true)
  const [showImageModal, setShowImageModal] = useState('')

  const { getSelectedTab, setTab } = useTab()

  useEffect(() => {
    setTab([
      {
        name: 'Chihuahua',
        selected: true
      },
      {
        name: 'Husky',
        selected: false
      },
      {
        name: 'Labrador',
        selected: false
      },
      {
        name: 'Pug',
        selected: false
      }
    ])
  }, [])

  useEffect(() => {
    (async () => {
      setLoading(true)
      const selectedTab = getSelectedTab()

      if (selectedTab == null || selectedTab.name === animals?.breed) return

      try {
        const { data } = await api.get<IResponse>('/list', {
          params: {
            breed: selectedTab.name.toLowerCase()
          }
        })
        setAnimals(data)
        setLoading(false)
      } catch (err) {
        toast.error('Aconteceu algum erro. Tente novamente mais tarde')
      }
    })()
  }, [getSelectedTab()?.name])

  const handleShowImageModal = useCallback((link: string) => {
    setShowImageModal(link)
  }, [showImageModal])

  const handleClose = useCallback(() => {
    setShowImageModal('')
  }, [showImageModal])

  return (
    <Container>
      <TabsContainer />
      <Content loading={`${loading}`}>
        {loading && (<Loading width={40} />)}
        {(Object.keys(animals).length > 0 && !loading) &&
          animals.list.map((link) => (
            <button key={link} onClick={() => handleShowImageModal(link)}>
              <img src={link} />
            </button>
          ))}

        {
          !loading && Object.keys(animals).length === 0 && (
            (<div>Não há nenhum dado para ser mostrado</div>)
          )
        }
      </Content>
      {
        showImageModal.length > 0 && (
          <ImageModal handleClose={handleClose}>
            <img src={showImageModal} />
          </ImageModal>
        )
      }
    </Container>
  )
}

export default List
