import React from 'react';
import { Alert } from '@vkontakte/vkui';
import { PAGE_HOME, router } from '../router';

import './Confirm.css';

const Confirm = () => {
  const actionCancel = () => { };

  const actionLeave = () => {
    router.popPage();
  };

  const actionSave = () => {
    router.popPage();
  };

  return (
    <div className="alert-container">
      <Alert
        actions={[
          {
            title: 'Отмена',
            autoclose: true,
            mode: 'cancel',
          },
          {
            title: 'Сохранить черновик',
            autoclose: true,
            action: () => {
              actionSave();
            },
          },
          {
            title: 'Выйти',
            mode: 'destructive',
            autoclose: true,
            action: () => {
              actionLeave();
            },
          },
        ]}
        actionsLayout="vertical"
        onClose={() => router.popPage()}>
        <h1 className="alert-title">Вы уверены, что хотите выйти?</h1>
        <p className="alert-descr">Все изменения не сохранятся.</p>
      </Alert>
    </div>
  );
};

export default Confirm;
