import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

export default function TaskDetail() {
  // Get id from URL
  const { id } = useParams();

  // State for task
  const [task, setTask] = useState(null);

  // State for loading
  const [loading, setLoading] = useState(true);

  // Fetch single task
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setTask(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching task:", error);
        setLoading(false);
      });
  }, [id]);

  // Loading check
  if (loading) {
    return (
      <p className="p-8 text-gray-500">
        Loading task details...
      </p>
    );
  }

  // Null check
  if (!task) {
    return (
      <p className="p-8 text-red-500">
        Task not found!
      </p>
    );
  }

  return (
    <div className="container mx-auto p-8">
      
      {/* Back Button */}
      <Link
        to="/tasks"
        className="text-blue-600 hover:underline mb-4 inline-block"
      >
        ← Back to Tasks
      </Link>

      <div className="bg-white rounded-lg shadow-md p-6 max-w-2xl">
        
        {/* Title */}
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          {task.title}
        </h1>

        <div className="space-y-3">
          
          {/* Task ID */}
          <p className="text-gray-600">
            <strong>Task ID:</strong> {task.id}
          </p>

          {/* User ID */}
          <p className="text-gray-600">
            <strong>User ID:</strong> {task.userId}
          </p>

          {/* Status */}
          <p className="text-gray-600">
            <strong>Status:</strong>{" "}
            <span
              className={
                task.completed
                  ? "text-green-600 font-semibold"
                  : "text-orange-600 font-semibold"
              }
            >
              {task.completed ? "Completed ✓" : "Pending"}
            </span>
          </p>

        </div>
      </div>
    </div>
  );
}