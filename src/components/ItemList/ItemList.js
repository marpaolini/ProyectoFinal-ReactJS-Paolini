import Item from "../Item/Item";

const ItemList = ({ products }) => {
  return (
    <div className="flex flex-row overflow-auto gap-10 py-10">
      {products.map((prod) => (
        <Item key={prod.id} {...prod} />
      ))}
    </div>
  );
};

export default ItemList;
