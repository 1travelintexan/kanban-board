import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 } from "uuid";
function CreateItem({ setList, list }) {
  const [newItem, setNewItem] = useState({
    id: v4(),
    title: "",
    description: "",
    priority: "",
    status: "To Do",
    createdBy: "Ragnar",
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setNewItem({ ...newItem, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setList([newItem, ...list]);
    navigate("/");
  };
  return (
    <div>
      <h1>What's Next In Your Life?</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input name="title" type="text" onChange={handleChange} />
        </label>
        <label>
          Description:
          <input name="description" type="text" onChange={handleChange} />
        </label>
        <label>
          Priority:
          <select name="priority" type="text" onChange={handleChange}>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </label>
        <button>Create</button>
      </form>
    </div>
  );
}
export default CreateItem;
