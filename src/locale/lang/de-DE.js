import setLang from '../lang';

const lang = {
    i: {
        locale: 'de-DE',
        select: {
            placeholder: 'Auswählen',
            noMatch: 'Keine Übereinstimmungen',
            loading: 'Lädt'
        },
        datepicker: {
            selectDate: 'Datum auswählen',
            selectTime: 'Zeit auswählen',
            startTime: 'Beginn',
            endTime: 'Ende',
            clear: 'Leeren',
            ok: 'OK',
            datePanelLabel: '[yyyy] [mmmm]',
            month: 'Monat',
            month1: 'Januar',
            month2: 'Februar',
            month3: 'März',
            month4: 'April',
            month5: 'Mai',
            month6: 'Juni',
            month7: 'Juli',
            month8: 'August',
            month9: 'September',
            month10: 'Oktober',
            month11: 'November',
            month12: 'Dezember',
            year: 'Jahr',
            months: {
                m1: 'Jan',
                m2: 'Feb',
                m3: 'Mär',
                m4: 'Apr',
                m5: 'Mai',
                m6: 'Jun',
                m7: 'Jul',
                m8: 'Aug',
                m9: 'Sep',
                m10: 'Okt',
                m11: 'Nov',
                m12: 'Dez'
            }
        }
    }
};

setLang(lang);

export default lang;