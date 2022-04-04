import checkbox from "../assets/completed.svg";
import pipa from "../assets/pipaltbox.svg";

function ToDo(props) {
  return (
    <ul className="todo">
      <li className="lista">
        {props.task}
        <img src={props.complete ? pipa : checkbox} />
      </li>
    </ul>
  );
}

export default ToDo;
