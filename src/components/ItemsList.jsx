function ItemsList({ list }) {
  return (
    <div className="items-list-container">
      {list && list.map((thing) => <h3>{thing.title}</h3>)}
    </div>
  );
}
export default ItemsList;
