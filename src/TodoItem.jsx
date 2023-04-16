export function TodoItem({ completed, id, title, toggleTodo, deleteTodo }) {
    return (
        <div className="item">
            <input
                type="checkbox"
                checked={completed}
                onChange={e => toggleTodo(id, e.target.checked)}
            />
            <label htmlFor="checkbox">{title}</label>
            <button onClick={() => deleteTodo(id)}>Delete</button>
        </div>
    );
}