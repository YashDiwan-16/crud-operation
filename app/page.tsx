import { TodoList } from "@/components/todo-list";
import React from "react";
export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-blue-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <TodoList />
    </div>
  );
}
