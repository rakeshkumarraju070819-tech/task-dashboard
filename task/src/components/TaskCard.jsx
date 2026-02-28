export default function TaskCard({ task }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow cursor-pointer">
      <div className="flex items-start gap-3">
        
        {/* Checkbox */}
        <input
          type="checkbox"
          checked={task.completed}
          readOnly
          className="mt-1"
        />

        <div className="flex-1">
          
          {/* Task Title */}
          <h3 className="font-semibold text-gray-800">
            {task.title}
          </h3>

          {/* Status */}
          <p
            className={`text-sm mt-1 ${
              task.completed ? "text-green-600" : "text-orange-600"
            }`}
          >
            {task.completed ? "Completed ✓" : "Pending"}
          </p>

        </div>
      </div>
    </div>
  );
}