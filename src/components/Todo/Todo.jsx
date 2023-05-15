import React, { useState } from 'react';
import styles from './Todo.module.css';
import { BsTrashFill } from 'react-icons/bs';
import { FiEdit } from 'react-icons/fi';
import { MdOutlineCheck, MdClose } from 'react-icons/md';
import Button from '../Button/Button';
export default function Todo({ todo, onDelete, onUpdate, onEdit }) {
  const [checked, setChecked] = useState(false);
  const [editText, setEditText] = useState(todo.text);
  const [isEdit, setIsEdit] = useState(false);

  const handleCheck = () => {
    setChecked(!checked);
    const status = checked ? 'active' : 'completed';
    onUpdate({ ...todo, status });
  };
  const handleChange = (e) => setEditText(e.target.value);
  const handleEdit = () => setIsEdit(!isEdit);
  const handleEditConfirm = () => {
    setIsEdit(!isEdit);
    onEdit({ ...todo, text: editText });
  };
  const handleEditCancle = () => {
    setIsEdit(!isEdit);
    setEditText(todo.text);
  };
  return (
    <>
      <li className={styles.todo}>
        <input
          type='checkbox'
          id={todo.text}
          className={styles.checkbox}
          checked={checked && checked}
          onChange={handleCheck}
        />
        {isEdit ? ( // 수정모드
          <>
            <input
              type='text'
              value={editText}
              onChange={handleChange}
              autoFocus
              className={styles.editInput}
            />
            <Button onClick={handleEditConfirm}>
              <MdOutlineCheck />
            </Button>
            <Button onClick={handleEditCancle}>
              <MdClose />
            </Button>
          </>
        ) : (
          <>
            <label htmlFor={todo.text} className={styles.text}>
              {todo.text}
            </label>
            <Button onClick={handleEdit}>
              <FiEdit />
            </Button>
            <Button onClick={() => onDelete(todo)}>
              <BsTrashFill />
            </Button>
          </>
        )}
      </li>
    </>
  );
}
