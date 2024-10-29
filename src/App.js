import './App.css';
import { SortableContext, arrayMove } from '@dnd-kit/sortable';
import { DndContext } from '@dnd-kit/core';
import { useState } from 'react';
import { SortableItem } from './components/sortableItem.tsx';


const INITIAL_ITEMS = [
  { id: crypto.randomUUID(), name: "ソータブルアイテム A" },
  { id: crypto.randomUUID(), name: "ソータブルアイテム B" },
  { id: crypto.randomUUID(), name: "ソータブルアイテム C" },
  { id: crypto.randomUUID(), name: "ソータブルアイテム D" },
  { id: crypto.randomUUID(), name: "ソータブルアイテム E" },
];

function App() {
  const [items, setItems] = useState(INITIAL_ITEMS);

  return (
    <div className="App">
      <div className="p-2">
        <div className="p-2 border border-black">
          <DndContext 
            onDragEnd={(event) => { // 並び替えの処理
              // active(ドラッグされたアイテム), over(ドラッグしていたアイテムがドロップされた先のアイテム)
              const { active, over } = event; 
              if ( over == null) {
                return;
              }
              if (active.id !== over.id) {
                setItems((items) => {
                  const oldIndex = items.findIndex(
                    (item) => item.id === active.id
                  );
                  const newIndex = items.findIndex(
                    (item) => item.id === over.id
                  );
                  return arrayMove(items, oldIndex, newIndex);
                });
              }
            }}
            
          >
            <SortableContext items={items}>
              <div className='space-y-2'>
                {items.map((item) => (
                  <SortableItem id={item.id} name={item.name} key={item.id} />
                ))}
              </div>
            </SortableContext>
          </DndContext>
        </div>
      </div>
    </div>
  );
}

export default App;
