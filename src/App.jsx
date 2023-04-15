import "./style.css";

export default function App() {
    return (
        <>
            <div className="todo">
                <div className="todo-text">
                    <label htmlFor="labelArea">New Item</label>
                    <input type="text" />
                    <button>ADD</button>
                </div>

                <div className="todo-list">
                    <h1>Todo List</h1>
                    <ul>
                        <li>da qm <button>Delete</button></li>
                        <li>da tormozq aleks <button>Delete</button></li>
                    </ul>
                </div>
            </div>
        </>
    );
}