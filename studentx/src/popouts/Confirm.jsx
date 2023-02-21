import React from 'react';
import { Alert } from '@vkontakte/vkui';
import { router } from '../router';

import './Confirm.css';

const Confirm = () => {
  const actionCancel = () => {};

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
            title: 'Выйти',
            mode: 'destructive',
            autoclose: true,
            action: () => router.popPage(),
          },
          {
            title: 'Сохранить черновик',
            autoclose: true,
            action: () => router.popPage(),
            mode: 'default',
          },
          {
            title: 'Отмена',
            autoclose: true,
            mode: 'cancel',
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
