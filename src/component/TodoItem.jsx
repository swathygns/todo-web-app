export const TodoItem = (props) => {
    return (
        <li>
            <input type= {"checkbox"} />
            <label> {props?.props?.name} </label>
            <label> {props?.props?.status} </label>
        </li>
    )
}