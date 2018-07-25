import setLang from '../lang';

const lang = {
    i: {
        locale: 'ja-JP',
        select: {
            placeholder: '選んでください',
            noMatch: 'マッチするデータなし',
            loading: 'ロード中'
        },
        datepicker: {
            selectDate: '日時を選んでください',
            selectTime: '時間を選んでください',
            startTime: 'スタート時間',
            endTime: '終了時間',
            clear: 'クリーア',
            ok: '確定',
            datePanelLabel: '[yyyy年] [m月]',
            month: '月',
            month1: '1 月',
            month2: '2 月',
            month3: '3 月',
            month4: '4 月',
            month5: '5 月',
            month6: '6 月',
            month7: '7 月',
            month8: '8 月',
            month9: '9 月',
            month10: '10 月',
            month11: '11 月',
            month12: '12 月',
            year: '年',
            months: {
                m1: '1月',
                m2: '2月',
                m3: '3月',
                m4: '4月',
                m5: '5月',
                m6: '6月',
                m7: '7月',
                m8: '8月',
                m9: '9月',
                m10: '10月',
                m11: '11月',
                m12: '12月'
            }
        }
    }
};

setLang(lang);

export default lang;