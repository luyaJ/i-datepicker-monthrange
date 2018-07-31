# iview-datepicker-monthrange

## Install

Using npm:

```js
npm install --save iview-datepicker-monthrange
```

Use it:

```bash
import MonthRangeDatePicker from 'iview-datepicker-monthrange'
Vue.use(MonthRangeDatePicker);
```

```bash
<month-range-date-picker type="daterange" placeholder="Select date"></month-range-date-picker>
```

！You should use `type="daterange"`。

And you need add:

```js
<link rel="stylesheet" href="//unpkg.com/iview/dist/styles/iview.css">
```

Want to get the input date:

```bash
<MonthRangeDatePicker type="daterange" placeholder="Select date" @on-change="daterange"></MonthRangeDatePicker>

methods: {
  daterange(data) {
    console.log(data);
  }
}
```

Disabled Date:

```bash
<MonthRangeDatePicker type="daterange" :options="options1" placeholder="Select date" @on-change="daterange"></MonthRangeDatePicker>

data() {
  return {
    options1: {
      disabledDate (year, month) {
        let disabledDate = (month < 10) ? year + '-0' + month : year + '-' + month;
        return disabledDate < '2017-11' || disabledDate > '2018-05';                     
      }
    }
  }
}
```