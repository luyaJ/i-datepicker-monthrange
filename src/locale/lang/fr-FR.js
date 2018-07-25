import setLang from '../lang';

const lang = {
    i: {
        locale: 'fr-FR',
        select: {
            placeholder: 'Sélectionnez',
            noMatch: 'Aucun résultat',
            loading: 'Chargement'
        },
        datepicker: {
            selectDate: 'Sélectionnez une date',
            selectTime: 'Sélectionnez une heure',
            startTime: 'Heure de début',
            endTime: 'Heure de fin',
            clear: 'Annuler',
            ok: 'OK',
            datePanelLabel: '[yyyy] [mmmm]',
            month: 'Mois',
            month1: 'Janvier',
            month2: 'Février',
            month3: 'Mars',
            month4: 'Avril',
            month5: 'Mai',
            month6: 'Juin',
            month7: 'Juillet',
            month8: 'Août',
            month9: 'Septembre',
            month10: 'Octobre',
            month11: 'Novembre',
            month12: 'Decembre',
            year: 'An',
            months: {
                m1: 'Jan',
                m2: 'Fev',
                m3: 'Mar',
                m4: 'Avr',
                m5: 'Mai',
                m6: 'Jun',
                m7: 'Jul',
                m8: 'Aoû',
                m9: 'Sep',
                m10: 'Oct',
                m11: 'Nov',
                m12: 'Déc'
            }
        }
    }
};

setLang(lang);

export default lang;