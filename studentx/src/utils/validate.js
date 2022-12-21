export const validate = (values, discipline, institute, dateFrom, dateTo) => {
    const errors = {};
    if (!values.title) {
        errors.title = 'Введите название';
    } else if (values.title.length <= 6) {
        errors.title = 'Слишком короткое описание'
    } else if (values.title.length >= 48) {
        errors.title = 'Слишком длинное описание'
    }
    if (!values.descr) {
        errors.descr = 'Введите описание';
    } else if (values.descr.length <= 6) {
        errors.descr = 'Слишком короткое описание';
    } else if (values.descr.length >= 200) {
        errors.descr = 'Слишком длинное описание'
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
    } else if (dateTo < dateFrom) {
        errors.dateFrom = "Дата начала должна быть меньше даты окончания заказа"
        errors.dateTo = 'Дата окончания должна быть больше даты заказа'
    }
    if (!values.price) {
        errors.price = 'Укажите цену';
    }
    return errors;
}