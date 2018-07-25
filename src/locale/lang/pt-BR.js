import setLang from '../lang';

const lang = {
    i: {
        locale: 'pt-BR',
        select: {
            placeholder: 'Selecionar',
            noMatch: 'Não encontrado',
            loading: 'Carregando'
        },
        datepicker: {
            selectDate: 'Selecione a data',
            selectTime: 'Selecione a hora',
            startTime: 'Hora inicial',
            endTime: 'Hora final',
            clear: 'Limpar',
            ok: 'Confirmar',
            datePanelLabel: '[yyyy] de [mmmm]',
            month: 'Mês',
            month1: 'Janeiro',
            month2: 'Fevereiro',
            month3: 'Março',
            month4: 'Abril',
            month5: 'Maio',
            month6: 'Junho',
            month7: 'Julho',
            month8: 'Agosto',
            month9: 'Setembro',
            month10: 'Outubro',
            month11: 'Novembro',
            month12: 'Dezembro',
            year: 'Ano',
            months: {
                m1: 'Jan',
                m2: 'Fev',
                m3: 'Mar',
                m4: 'Abr',
                m5: 'Mai',
                m6: 'Jun',
                m7: 'Jul',
                m8: 'Ago',
                m9: 'Set',
                m10: 'Out',
                m11: 'Nov',
                m12: 'Dez'
            }
        }
    }
};

setLang(lang);

export default lang;