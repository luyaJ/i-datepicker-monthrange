import setLang from '../lang';

const lang = {
    i: {
        locale: 'tr-TR',
        select: {
            placeholder: 'Seç',
            noMatch: 'Eşleşen veri yok',
            loading: 'yükleme'
        },
        datepicker: {
            selectDate: 'Tarih seç',
            selectTime: 'Zaman seç',
            startTime: 'Başlangıç',
            endTime: 'Bitişe',
            clear: 'Temizle',
            ok: 'Tamam',
            datePanelLabel: '[yyyy] [mmmm]',
            month: '',
            month1: 'Ocak',
            month2: 'Şubat',
            month3: 'Mart',
            month4: 'Nisan',
            month5: 'Mayıs',
            month6: 'Haziran',
            month7: 'Temmuz',
            month8: 'Ağustos',
            month9: 'Eylül',
            month10: 'Ekim',
            month11: 'Kasım',
            month12: 'Aralık',
            year: '',
            months: {
                m1: 'Oca',
                m2: 'Şub',
                m3: 'Mar',
                m4: 'Nis',
                m5: 'May',
                m6: 'Haz',
                m7: 'Tem',
                m8: 'Ağu',
                m9: 'Eyl',
                m10: 'Ekm',
                m11: 'Kas',
                m12: 'Ara'
            }
        }
    }
};

setLang(lang);

export default lang;