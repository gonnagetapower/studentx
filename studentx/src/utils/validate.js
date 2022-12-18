export const validate = (values, discipline, institute, dateFrom, dateTo) => {
    const errors = {};
    if (!values.title) {
        errors.title = 'Введите название';
    }
    if (!values.descr) {
        errors.descr = 'Введите описание';
    } else if (values.descr.length <= 6) {
        errors.descr = 'Слишком короткое описание';
    }
    if (!discipline) {
        errors.discipline = 'Выберите предмет';
    }
    if (!institute) {
        errors.institute = 'Выберите ВУЗ';
    }
    if (!dateFrom) {
        errors.dateFrom = 'Укажите дату';
    }
    if (!dateTo) {
        errors.dateTo = 'Укажите дату';
    }
    if (!values.price) {
        errors.price = 'Укажите цену';
    }
    return errors;
}