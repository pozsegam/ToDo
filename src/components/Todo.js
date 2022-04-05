import checkbox from "../assets/completed.svg";
import pipa from "../assets/pipaltbox.svg";

function ToDo(props) {
  return (
    <ul className="todo">
      <li className="lista" onClick={() => props.handleToggle(props.id)}>
        {props.task}
        <img className="checkbox" src={props.complete ? pipa : checkbox} />
      </li>
    </ul>
  );
}

export default ToDo;
