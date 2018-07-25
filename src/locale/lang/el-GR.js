import setLang from '../lang';

const lang = {
    i: {
        locale: 'el-GR',
        select: {
            placeholder: 'Επιλογή',
            noMatch: 'Δεν βρέθηκαν αποτελέσματα',
            loading: 'Φόρτωση'
        },
        datepicker: {
            selectDate: 'Επιλέξτε ημέρα',
            selectTime: 'Επιλέξτε ώρα',
            startTime: 'Ωρα Έναρξης',
            endTime: 'Ωρα Λήξης',
            clear: 'Καθαρισμός',
            ok: 'Εντάξει',
            datePanelLabel: '[yyyy] [mmmm]',
            month: 'Μήνας',
            month1: 'Ιανουάριος',
            month2: 'Φεβρουάριος',
            month3: 'Μάρτιος',
            month4: 'Απρίλιος',
            month5: 'Μάιος',
            month6: 'Ιούνιος',
            month7: 'Ιούλιος',
            month8: 'Αύγουστος',
            month9: 'Σεπτέμβριος',
            month10: 'Οκτώβριος',
            month11: 'Νοέμβριος',
            month12: 'Δεκέμβριος',
            year: 'Έτος',
            months: {
                m1: 'Ιαν',
                m2: 'Φεβ',
                m3: 'Μαρ',
                m4: 'Απρ',
                m5: 'Μαϊ',
                m6: 'Ιουν',
                m7: 'Ιουλ',
                m8: 'Αυγ',
                m9: 'Σεπ',
                m10: 'Οκτ',
                m11: 'Νοε',
                m12: 'Δεκ'
            }
        }
    }
};

setLang(lang);

export default lang;
