import DeleteIcon from "@material-ui/icons/Delete";

const ListCom = (props) => {
  return (
    <div className="todo_list">
      <li>
        <button className="deletBtn" onClick={() => {
          props.onSelect(props.id)
        }}>
          <DeleteIcon />
        </button>
        {props.text}
      </li>
    </div>
  );
};

export default ListCom;
