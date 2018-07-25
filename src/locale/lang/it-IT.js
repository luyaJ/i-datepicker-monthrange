import setLang from '../lang';

const lang = {
    i: {
        locale: 'it-IT',
        select: {
            placeholder: 'Seleziona',
            noMatch: 'Nessun Risultato',
            loading: 'Caricamento'
        },
        datepicker: {
            selectDate: 'Seleziona data',
            selectTime: 'Seleziona orario',
            startTime: 'Orario inizio',
            endTime: 'Orario fine',
            clear: 'Annulla',
            ok: 'OK',
            datePanelLabel: '[yyyy] [mmmm]',
            month: 'Mese',
            month1: 'Gennaio',
            month2: 'Febbraio',
            month3: 'Marzo',
            month4: 'Aprile',
            month5: 'Maggio',
            month6: 'Giugno',
            month7: 'Luglio',
            month8: 'Agosto',
            month9: 'Settembre',
            month10: 'Ottobre',
            month11: 'Novembre',
            month12: 'Dicembre',
            year: 'Anno',
            months: {
                m1: 'Gen',
                m2: 'Feb',
                m3: 'Mar',
                m4: 'Apr',
                m5: 'Mag',
                m6: 'Giu',
                m7: 'Lug',
                m8: 'Ago',
                m9: 'Set',
                m10: 'Ott',
                m11: 'Nov',
                m12: 'Dic'
            }
        }
    }
};

setLang(lang);

export default lang;