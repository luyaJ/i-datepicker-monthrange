import setLang from '../lang';

const lang = {
    i: {
        locale: 'ro-RO',
        select: {
            placeholder: 'Selectează',
            noMatch: 'Niciun rezultat',
            loading: 'Încărcare'
        },
        datepicker: {
            selectDate: 'Selectează data',
            selectTime: 'Selectează timpul',
            startTime: 'Ora inițială',
            endTime: 'Ora finală',
            clear: 'Anulează',
            ok: 'OK',
            datePanelLabel: '[yyyy] [mmmm]',
            month: 'Lună',
            month1: 'Ianuarie',
            month2: 'Februarie',
            month3: 'Martie',
            month4: 'Aprilia',
            month5: 'Mai',
            month6: 'Iunie',
            month7: 'Iulie',
            month8: 'August',
            month9: 'Septembrie',
            month10: 'Octombrie',
            month11: 'Noiembrie',
            month12: 'Decembrie',
            year: 'An',
            months: {
                m1: 'Ian',
                m2: 'Feb',
                m3: 'Mar',
                m4: 'Apr',
                m5: 'Mai',
                m6: 'Iun',
                m7: 'Iul',
                m8: 'Aug',
                m9: 'Sep',
                m10: 'Oct',
                m11: 'Noi',
                m12: 'Dec'
            }
        }
    }
};

setLang(lang);

export default lang;
