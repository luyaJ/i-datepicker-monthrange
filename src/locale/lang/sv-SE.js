import setLang from '../lang';

const lang = {
    i: {
        locale: 'sv-SE',
        select: {
            placeholder: 'Välj',
            noMatch: 'Ingen träff',
            loading: 'Laddar'
        },
        datepicker: {
            selectDate: 'Välj datum',
            selectTime: 'Välj tidpunkt',
            startTime: 'Start tid',
            endTime: 'Slut tid',
            clear: 'Rensa',
            ok: 'Ok',
            datePanelLabel: '[yyyy] [mmmm]',
            month: 'Månad',
            month1: 'Januari',
            month2: 'Februari',
            month3: 'Mars',
            month4: 'April',
            month5: 'Maj',
            month6: 'Juni',
            month7: 'Juli',
            month8: 'Augusti',
            month9: 'September',
            month10: 'Oktober',
            month11: 'November',
            month12: 'December',
            year: 'År',
            months: {
                m1: 'Jan',
                m2: 'Feb',
                m3: 'Mar',
                m4: 'Apr',
                m5: 'Maj',
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
