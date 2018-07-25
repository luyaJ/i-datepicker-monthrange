import setLang from '../lang';

const lang = {
    i: {
        locale: 'ko-KR',
        select: {
            placeholder: '선택',
            noMatch: '일치하는 데이터 없음',
            loading: '로딩'
        },
        datepicker: {
            selectDate: '날짜 선택',
            selectTime: '시간 선택',
            startTime: '시작 시간',
            endTime: '종료 시간',
            clear: '삭제',
            ok: '예',
            datePanelLabel: '[yyyy년] [m월]',
            month: '월',
            month1: '1월',
            month2: '2월',
            month3: '3월',
            month4: '4월',
            month5: '5월',
            month6: '6월',
            month7: '7월',
            month8: '8월',
            month9: '9월',
            month10: '10월',
            month11: '11월',
            month12: '12월',
            year: '년',
            months: {
                m1: '1월',
                m2: '2월',
                m3: '3월',
                m4: '4월',
                m5: '5월',
                m6: '6월',
                m7: '7월',
                m8: '8월',
                m9: '9월',
                m10: '10월',
                m11: '11월',
                m12: '12월'
            }
        }
    }
};

setLang(lang);

export default lang;