import setLang from '../lang';

const lang = {
    i: {
        locale: 'nl-NL',
        select: {
            placeholder: 'Selecteer',
            noMatch: 'Geen overeenkomsten',
            loading: 'Laden'
        },
        datepicker: {
            selectDate: 'Selecteer datum',
            selectTime: 'Selecteer tijd',
            startTime: 'Begin tijd',
            endTime: 'Eind tijd',
            clear: 'Herstel',
            ok: 'Ok',
            datePanelLabel: '[yyyy] [mm]',
            month: 'Maand',
            month1: 'Januari',
            month2: 'Februari',
            month3: 'Maart',
            month4: 'April',
            month5: 'Mei',
            month6: 'Juni',
            month7: 'Juli',
            month8: 'Augustus',
            month9: 'September',
            month10: 'Oktober',
            month11: 'November',
            month12: 'December',
            year: 'Jaar',
            months: {
                m1: 'Jan',
                m2: 'Feb',
                m3: 'Mar',
                m4: 'Apr',
                m5: 'Mei',
                m6: 'Jun',
                m7: 'Jul',
                m8: 'Aug',
                m9: 'Sep',
                m10: 'Okt',
                m11: 'Nov',
                m12: 'Dec'
            }
        }
    }
};

setLang(lang);

export default lang;
