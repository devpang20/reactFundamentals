import { MdCheckBoxOutlineBlank, MdCheckBox, MdRemoveCircleOutline } from 'react-icons/md'
import '../styles/TodoListItem.scss';
import cn from 'classnames';

/**
 * get props
 * components
 * div.TodoListItem > div.checkbox > div.text div.remove
 */

const TodoListItem = ({todo, onRemove, onToggle}) => {
    const { id, text, checked } = todo;

    return (
        <div className="TodoListItem">
            <div className={cn('checkbox', { checked })} onClick={() => onToggle(id)}>
                {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
                <div className="text">{text}</div>
            </div>
            <div className="remove" onClick={() => onRemove(id)}>
                <MdRemoveCircleOutline />
            </div>
        </div>
    )
}

export default TodoListItem;