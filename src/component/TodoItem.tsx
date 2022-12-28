export const TodoItem = (props: any) => {
    return (
        <li className="flex break-normal">
            <input type= {"checkbox"} className="mr-3 mb-3 flex-auto" />
            <label className="flex-1"> {props?.props?.name} </label>
            <label className="flex-1"> {props?.props?.status} </label>
        </li>
    )
}