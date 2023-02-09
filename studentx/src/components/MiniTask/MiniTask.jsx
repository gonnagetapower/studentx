import { useRouter } from '@happysanta/router';
import React from 'react';

import './MiniTask.css';

import { PAGE_RESPOND } from '../../router';

const MiniTask = ({ title, descr, id }) => {
  const router = useRouter();
  return (
    <div className="mini-task" onClick={() => router.pushPage(PAGE_RESPOND, { id: id })}>
      <h1 className="mini-task__title">{title}</h1>
      <p className="mini-task__descr">{descr}</p>
    </div>
  );
};

export default MiniTask;
