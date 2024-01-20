import dropFilesImg from "../assets/Drop-Files-Here.png";
import { useDrag, useDrop } from "react-dnd";
import Draggable from "react-draggable";

function ItemsList({
  list,
  setList,
  inProgress,
  setInProgress,
  finished,
  setFinished,
}) {
  const handleOnDrag = (event, item) => {
    event.dataTransfer.setData("todo", item.id);
  };
  const handleDragOver = (e) => {
    e.preventDefault();
  };
  const handleOnDrop = (e) => {
    const movedItemId = e.dataTransfer.getData("todo");
    const filteredItems = list.filter((e) => e.id !== movedItemId);
    setList(filteredItems);
    const movedItem = list.find((e) => e.id === movedItemId);
    const landing = e.target.id;
    if (landing === "in-progress") {
      setInProgress([movedItem, ...inProgress]);
    } else if (landing === "completed") {
      setFinished([movedItem, ...finished]);
    }
  };
  return (
    <div className="items-list-container">
      <div className="item-card-container">
        <h2 className="headings">Things to do:</h2>
        {list &&
          list.map((thing) => (
            <div
              key={thing.id}
              className="item-card"
              draggable
              onDragStart={(e) => handleOnDrag(e, thing)}
            >
              <h3> {thing.title}</h3>
            </div>
          ))}
      </div>
      <div className="in-progress-landing-container">
        <h2 className="headings">In Progress:</h2>
        <div
          className="in-progress-landing"
          onDragOver={handleDragOver}
          onDrop={handleOnDrop}
        >
          <img src={dropFilesImg} alt="drop files logo" id="in-progress" />
        </div>
        {inProgress &&
          inProgress.map((e) => {
            return (
              <div
                key={e.id}
                className="item-card"
                draggable
                onDragStart={(e) => handleOnDrag(e, thing)}
              >
                <h3>{e.title}</h3>
              </div>
            );
          })}
      </div>
      <div className="completed-landing-container">
        <h2 className="headings">Completed:</h2>
        <div
          className="completed-landing"
          onDragOver={handleDragOver}
          onDrop={handleOnDrop}
        >
          <img src={dropFilesImg} alt="drop files logo" id="completed" />
        </div>
        {finished &&
          finished.map((e) => {
            return (
              <div
                key={e.id}
                className="item-card"
                draggable
                onDragStart={(e) => handleOnDrag(e, thing)}
              >
                <h3> {e.title}</h3>
              </div>
            );
          })}
      </div>
    </div>
  );
}
export default ItemsList;
