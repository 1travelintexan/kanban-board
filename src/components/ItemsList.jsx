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
    console.log("dropped", movedItemId);
    const filteredItems = list.filter((e) => e.id !== movedItemId);
    setList(filteredItems);
    const movedItem = list.find((e) => e.id === movedItemId);
    setInProgress([movedItem, ...inProgress]);
  };
  return (
    <div className="items-list-container">
      <div className="item-card-container">
        <h2>Things to do:</h2>
        {list &&
          list.map((thing) => (
            <div
              key={thing.id}
              className="item-card"
              draggable
              onDragStart={(e) => handleOnDrag(e, thing)}
            >
              <h3>Title: {thing.title}</h3>
            </div>
          ))}
      </div>
      <div
        className="in-progress-landing-container"
        onDragOver={handleDragOver}
        onDrop={handleOnDrop}
      >
        <h2>In Progress:</h2>
        <div className="in-progress-landing">
          <img src={dropFilesImg} alt="drop files logo" />
        </div>
        {inProgress &&
          inProgress.map((e) => {
            return (
              <div key={e.id}>
                <h3>Title: {e.title}</h3>
              </div>
            );
          })}
      </div>
      <div className="completed-landing-container">
        <h2>Completed:</h2>
        <div className="completed-landing">
          <img src={dropFilesImg} alt="drop files logo" />
        </div>
        {finished &&
          finished.map((e) => {
            return (
              <div key={e.id}>
                <h3>Title: {e.title}</h3>
              </div>
            );
          })}
      </div>
    </div>
  );
}
export default ItemsList;
