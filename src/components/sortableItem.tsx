import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGripVertical } from "@fortawesome/free-solid-svg-icons";

type Props = {
  id: string;
  name: string;
}

export const SortableItem = ({ id, name }: Props) => {
  const {
    setNodeRef,
    attributes,
    listeners,
    transform,
    transition,
    isDragging,
    setActivatorNodeRef // ドラッグのつまみ部分を指定
  } = useSortable({
    id
  });

  return (
    <div
      ref={setNodeRef}
      style={{
        transform: CSS.Transform.toString(transform),
        transition
      }}
      className='py-1'
    >
      <div className="border border-gray-400 rounded-md flex items-center bg-white py-1"
      >
        {/* つまみ部分 */}
        <div
          ref={setActivatorNodeRef}
          {...attributes}
          {...listeners}
          className={`px-2 ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}>
          <FontAwesomeIcon icon={faGripVertical} /> {/* つまみのアイコン */}
        </div>
        {name}
      </div>
    </div>
  )
}
