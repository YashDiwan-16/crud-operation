import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Trash2, Edit2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

interface TodoItemProps {
  todo: {
    id: number;
    text: string;
    completed: boolean;
  };
  onToggle: () => void;
  onDelete: () => void;
  onEdit: (newText: string) => void;
}

export function TodoItem({ todo, onToggle, onDelete, onEdit }: TodoItemProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: todo.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const handleEdit = () => {
    onEdit(editText);
    setIsEditing(false);
  };

  return (
    <motion.div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.2 }}
      className="flex items-center justify-between bg-gray-100 dark:bg-gray-700 p-4 rounded-lg mb-2 cursor-move"
    >
      <div className="flex items-center flex-grow mr-4">
        <Button
          variant="outline"
          size="icon"
          className={`mr-2 ${todo.completed ? "bg-green-500 text-white" : ""}`}
          onClick={onToggle}
        >
          <Check
            className={`h-4 w-4 ${
              todo.completed ? "opacity-100" : "opacity-0"
            }`}
          />
        </Button>
        {isEditing ? (
          <Input
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            onBlur={handleEdit}
            onKeyPress={(e) => e.key === "Enter" && handleEdit()}
            className="flex-grow"
            autoFocus
          />
        ) : (
          <span
            className={`text-lg ${
              todo.completed
                ? "line-through text-gray-500 dark:text-gray-400"
                : "text-gray-800 dark:text-white"
            }`}
          >
            {todo.text}
          </span>
        )}
      </div>
      <div className="flex items-center">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsEditing(!isEditing)}
        >
          <Edit2 className="h-4 w-4 text-blue-500" />
        </Button>
        <Button variant="ghost" size="icon" onClick={onDelete}>
          <Trash2 className="h-4 w-4 text-red-500" />
        </Button>
      </div>
    </motion.div>
  );
}
