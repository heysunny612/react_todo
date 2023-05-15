import React, { useState } from 'react';
import styles from './Todo.module.css';
import { BsTrashFill } from 'react-icons/bs';
import { FiEdit } from 'react-icons/fi';
import { MdOutlineCheck, MdClose } from 'react-icons/md';
import Button from '../Button/Button';

export default function Todo({ todo, onDelete, onUpdate, onEdit }) {
  const { text, status } = todo;
  const [editText, setEditText] = useState(text);
  const [isEdit, setIsEdit] = useState(false);

  const handleCheck = (e) => {
    const status = e.target.checked ? 'completed' : 'active';
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
    setEditText(text);
  };

  return (
    <>
      <li className={styles.todo}>
        <input
          type='checkbox'
          id={text}
          className={styles.checkbox}
          checked={status === 'completed'}
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
            <label htmlFor={text} className={styles.text}>
              {text}
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
