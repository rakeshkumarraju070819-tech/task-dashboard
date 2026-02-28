import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import TaskCard from "../components/TaskCard";

export default function Tasks() {
  // State for tasks
  const [tasks, setTasks] = useState([]);

  // State for loading
  const [loading, setLoading] = useState(true);

  // Fetch tasks when component mounts
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then((res) => res.json())
      .then((data) => {
        setTasks(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching tasks:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Your Tasks
      </h1>

      {loading ? (
        <p className="text-gray-500">Loading tasks...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {tasks.map((task) => (
            <Link
              to={`/tasks/${task.id}`}
              key={task.id}
            >
              <TaskCard task={task} />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}