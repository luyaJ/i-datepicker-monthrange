import setLang from '../lang';

const lang = {
    i: {
        locale: 'ru-RU',
        select: {
            placeholder: 'Выбрать',
            noMatch: 'Нет соответствующих данных',
            loading: 'Загрузка'
        },
        datepicker: {
            selectDate: 'Выбрать дату',
            selectTime: 'Выбрать время',
            startTime: 'Начальное время',
            endTime: 'Конечное время',
            clear: 'Очистить',
            ok: 'OK',
            datePanelLabel: '[yyyy] [Mmmm]',
            month: '',
            month1: 'Январь',
            month2: 'Февраль',
            month3: 'Март',
            month4: 'Апрель',
            month5: 'Май',
            month6: 'Июнь',
            month7: 'Июль',
            month8: 'Август',
            month9: 'Сентябрь',
            month10: 'Октябрь',
            month11: 'Ноябрь',
            month12: 'Декабрь',
            year: '',
            months: {
                m1: 'Янв',
                m2: 'Фев',
                m3: 'Мар',
                m4: 'Апр',
                m5: 'Май',
                m6: 'Июн',
                m7: 'Июл',
                m8: 'Авг',
                m9: 'Сен',
                m10: 'Окт',
                m11: 'Ноя',
                m12: 'Дек'
            }
        }
    }
};

setLang(lang);

export default lang;