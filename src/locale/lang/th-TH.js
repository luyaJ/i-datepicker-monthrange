import setLang from '../lang';

const lang = {
    i: {
        locale: 'th-TH',
        select: {
            placeholder: 'ตัวเลือก',
            noMatch: 'ข้อมูลไม่ตรงกัน',
            loading: 'ดาวน์โหลด'
        },
        datepicker: {
            selectDate: 'เลือกวัน',
            selectTime: 'เลือกเวลา',
            startTime: 'เริ่มเวลา',
            endTime: 'สิ้นสุดเวลา',
            clear: 'ล้างข้อมูล',
            ok: 'ตกลง',
            datePanelLabel: '[yyyy] [mmmm]',
            month: 'เดือน',
            month1: 'มกราตม',
            month2: 'กุมภาพันธ์',
            month3: 'มีนาคม',
            month4: 'เมษายน',
            month5: 'พฤษภาคม',
            month6: 'มิถุนายน',
            month7: 'กรกฎาคม',
            month8: 'สิงหาคม',
            month9: 'กันยายน',
            month10: 'ตุลาคม',
            month11: 'พฤศจิกายน',
            month12: 'ธันวาคม',
            year: 'ปี',
            months: {
                m1: 'ม.ค.',
                m2: 'ก.พ.',
                m3: 'มี.ค.',
                m4: 'เม.ย.',
                m5: 'พ.ค.',
                m6: 'มิ.ย.',
                m7: 'ก.ค.',
                m8: 'ส.ค.',
                m9: 'ก.ย.',
                m10: 'ต.ค.',
                m11: 'พ.ย.',
                m12: 'ธ.ค.'
            }
        }
    }
};

setLang(lang);

export default lang;
