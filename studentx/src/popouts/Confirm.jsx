import React from 'react';
import { Alert } from '@vkontakte/vkui';
import { PAGE_HOME, PAGE_MAIN, router } from '../router';

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
            title: 'Выйти',
            mode: 'destructive',
            autoclose: true,
            action: () => {
              router.popPage()
            },
          },
          {
            title: 'Сохранить черновик',
            autoclose: true,
            action: () => {
              actionSave();
            },
          },
          {
            title: 'Отмена',
            autoclose: true,
            mode: 'cancel',
          },
        ]}
        actionsLayout="vertical"
        onClose={() => router.popPage()}
        header="Удаление документа"
        text="Вы уверены, что хотите удалить этот документ?">
      </Alert>
    </div>
  );
};

export default Confirm;
