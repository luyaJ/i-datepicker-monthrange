import setLang from '../lang';

const lang = {
    i: {
        locale: 'uk-UA',
        select: {
            placeholder: 'Обрати',
            noMatch: 'Немає відповідних даних',
            loading: 'Завантаження'
        },
        datepicker: {
            selectDate: 'Обрати дату',
            selectTime: 'Обрати час',
            startTime: 'Початковий час',
            endTime: 'Кінцевий час',
            clear: 'Очистити',
            ok: 'OK',
            datePanelLabel: '[yyyy] [Mmmm]',
            month: '',
            month1: 'Січень',
            month2: 'Лютий',
            month3: 'Березень',
            month4: 'Квітень',
            month5: 'Травень',
            month6: 'Червень',
            month7: 'Липень',
            month8: 'Серпень',
            month9: 'Вересень',
            month10: 'Жовтень',
            month11: 'Листопад',
            month12: 'Грудень',
            year: '',
            months: {
                m1: 'Січ',
                m2: 'Лют',
                m3: 'Бер',
                m4: 'Кві',
                m5: 'Тра',
                m6: 'Чер',
                m7: 'Лип',
                m8: 'Сер',
                m9: 'Вер',
                m10: 'Жов',
                m11: 'Лис',
                m12: 'Гру'
            }
        }
    }
};

setLang(lang);

export default lang;