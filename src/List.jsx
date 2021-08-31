import AddIcon from "@material-ui/icons/Add";
import Button from "@material-ui/core/Button";
import { useState } from "react";
import ListCom from "./ListCom";


const List = () => {
  const [item, setItem] = useState("");
  const [newItem, setNewItem] = useState([]);

  const inputEvent = (event) => {
    setItem(event.target.value);
  };

  const addItem = () => {
    setNewItem((preValue) => {
      return [...preValue, item];
    });
    setItem("");
  };

  const deleteItem = (id) => {
    setNewItem((newItem) => {
      return newItem.filter((arrElem, index) => {
        return index !== id;
      });
    });
  };

  return (
    <>
      <div className="main-div">
        <div className="center-div">
          <h1 className="heading">ToDo LIST</h1>
          <input
            type="text"
            value={item}
            onChange={inputEvent}
            placeholder="Add a item"
          />
          <Button variant="contained" className="addBtn" onClick={addItem}>
            <AddIcon />
          </Button>
                  <ul>
            {newItem.map((val, index) => {
              return (
                <ListCom
                  key={index}
                  id={index}
                  text={val}
                  onSelect={deleteItem}
                />
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default List;
