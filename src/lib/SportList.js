import React, { useState, useEffect } from 'react'
import { ContentRepository } from './ContentRespository'
import { Droppable, Draggable, DragDropContext } from 'react-beautiful-dnd'
import './SportList.css'

const SportList = () => {
  const [sports, setSports] = useState([])

  useEffect(() => {
    const data = localStorage.getItem('sports')
    if (data) {
      setSports(JSON.parse(data))
    } else {
      refreshSports()
    }
  }, [])

  const saveSportsOrder = () => {
    try {
      localStorage.setItem('sports', JSON.stringify(sports))
      window.alert('Sports order saved successfully!')
    } catch (error) {
      window.alert('Error saving sports order. Please try again.')
    }
  }

  const onDragEnd = (result) => {
    if (!result.destination) return
    const newList = Array.from(sports)
    const [reorderedSports] = newList.splice(result.source.index, 1)
    newList.splice(result.destination.index, 0, reorderedSports)

    setSports(newList)
  }

  const refreshSports = async () => {
    try {
      const contentRepository = new ContentRepository()
      const allSports = await contentRepository.getFeaturedSports()

      const randomSports = []
      while (randomSports.length < 3) {
        const randomSport =
          allSports[Math.floor(Math.random() * allSports.length)]
        if (!randomSports.some((sport) => sport.name === randomSport.name)) {
          randomSports.push(randomSport)
        }
      }

      setSports(randomSports)
    } catch (error) {
      console.error('Error refreshing sports:', error)
    }
  }

  return (
    <>
      <div className="button-position">
        <button className="button" onClick={refreshSports}>
          Refresh Sports List
        </button>
      </div>
      {}
      <div>
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="droppable">
            {(provided, snapshot) => (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                {sports.map((sport, index) => (
                  <Draggable
                    key={sport.name}
                    draggableId={sport.name}
                    index={index}
                    className="Sport-card"
                  >
                    {(provided, snapshot) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className="Sport-card-container"
                      >
                        <h2 className="Sport-card-container-name">
                          {sport.name}
                        </h2>
                        <p>{sport.description}</p>
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>

      <div className="button-position">
        <button className="button" onClick={saveSportsOrder}>
          Save
        </button>
      </div>
    </>
  )
}

export default SportList
