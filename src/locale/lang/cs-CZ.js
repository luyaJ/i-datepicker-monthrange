import setLang from '../lang';

const lang = {
    i: {
        locale: 'cs-CZ',
        select: {
            placeholder: 'Vybrat',
            noMatch: 'Nenalezeny žádné položky',
            loading: 'Nahrávám'
        },
        datepicker: {
            selectDate: 'Vybrat datum',
            selectTime: 'Vybrat čas',
            startTime: 'Začátek',
            endTime: 'Konec',
            clear: 'Vymazat',
            ok: 'OK',
            datePanelLabel: '[yyyy] [mmmm]',
            month: 'Měsíc',
            month1: 'Leden',
            month2: 'Únor',
            month3: 'Březen',
            month4: 'Duben',
            month5: 'Květen',
            month6: 'Červen',
            month7: 'Červenec',
            month8: 'Srpen',
            month9: 'Září',
            month10: 'Říjen',
            month11: 'Listopad',
            month12: 'Prosinec',
            year: 'Rok',
            months: {
                m1: 'Led',
                m2: 'Úno',
                m3: 'Bře',
                m4: 'Dub',
                m5: 'Kvě',
                m6: 'Čer',
                m7: 'Čnc',
                m8: 'Srp',
                m9: 'Zář',
                m10: 'Říj',
                m11: 'Lis',
                m12: 'Pro'
            }
        }
    }
};

setLang(lang);

export default lang;