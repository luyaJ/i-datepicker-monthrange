import setLang from '../lang';

const lang = {
    i: {
        locale: 'es-ES',
        select: {
            placeholder: 'Seleccionar',
            noMatch: 'Sin coincidencias',
            loading: 'Cargando'
        },
        datepicker: {
            selectDate: 'Seleccionar fecha',
            selectTime: 'Seleccionar hora',
            startTime: 'Hora de inicio',
            endTime: 'Hora de fin',
            clear: 'Limpiar',
            ok: 'Aceptar',
            datePanelLabel: '[yyyy] [mmmm]',
            month: 'Mes',
            month1: 'Enero',
            month2: 'Febrero',
            month3: 'Marzo',
            month4: 'Abril',
            month5: 'Mayo',
            month6: 'Junio',
            month7: 'Julio',
            month8: 'Augosto',
            month9: 'Septiembre',
            month10: 'Octubre',
            month11: 'Noviembre',
            month12: 'Diciembre',
            year: 'Año',
            months: {
                m1: 'Ene',
                m2: 'Feb',
                m3: 'Mar',
                m4: 'Abr',
                m5: 'May',
                m6: 'Jun',
                m7: 'Jul',
                m8: 'Ago',
                m9: 'Sep',
                m10: 'Oct',
                m11: 'Nov',
                m12: 'Dic'
            }
        }
    }
};

setLang(lang);

export default lang;
