import setLang from '../lang';

const lang = {
    i: {
        locale: 'id-ID',
        select: {
            placeholder: 'Pilih',
            noMatch: 'Tidak ada data yang cocok',
            loading: 'Memuat'
        },
        datepicker: {
            selectDate: 'Pilih tanggal',
            selectTime: 'Pilih waktu',
            startTime: 'Waktu Mulai',
            endTime: 'Waktu Selesai',
            clear: 'Bersihkan',
            ok: 'OK',
            datePanelLabel: '[yyyy] [mmmm]',
            month: '',
            month1: 'Januari',
            month2: 'Februari',
            month3: 'Maret',
            month4: 'April',
            month5: 'Mei',
            month6: 'Juni',
            month7: 'Juli',
            month8: 'Agustus',
            month9: 'September',
            month10: 'Oktober',
            month11: 'November',
            month12: 'Desember',
            year: '',
            months: {
                m1: 'Jan',
                m2: 'Feb',
                m3: 'Mar',
                m4: 'Apr',
                m5: 'Mei',
                m6: 'Jun',
                m7: 'Jul',
                m8: 'Agu',
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