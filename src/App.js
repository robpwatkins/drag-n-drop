import { useEffect, useState, useCallback } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import './App.css';

function App() {
  const [pups, setPups] = useState([]);

  const fetchPups = useCallback(async () => {
    let response = await fetch('https://puppyapi.com/pups');
    let json = await response.json();
    setPups(json);
  })
  
  useEffect(() => {
    fetchPups();
  }, [])
  
  console.log(pups);
  return (
    <div className="App">
      <DragDropContext>
        <Droppable droppableId="pups">
          {(provided) => (
            <ul className="pups" {...provided.droppableProps} ref={provided.innerRef}>
              {pups.map((pup, index) => {
                return (
                  <Draggable key={pup.pups_id.toString()} draggableId={pup.pups_id.toString()} index={index}>
                    {(provided) => (
                      <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                        <div className="pup-thumb">
                          <img src={pup.img_url} alt=""/>
                        </div>
                        <p>{pup.name}</p>
                      </li>
                    )}
                  </Draggable>
                )
              })}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}

export default App;
