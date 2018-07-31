<style lang="less" scoped>
    #app{ 
        padding: 10px 40px 0; 
    }
</style>

<template>
    <div id="app">
        <MonthRangeDatePicker type="daterange" :options="options1" placeholder="Select date" @on-change="daterange"></MonthRangeDatePicker>
    </div>
</template>

<script>
export default {
    data() {
        return {
            options1: {
                disabledDate (year, month) {
                    let disabledDate = (month < 10) ? year + '-0' + month : year + '-' + month;
                    // console.log(disabledDate);
                    return disabledDate < '2017-11' || disabledDate > '2018-05';                     
                }
            }
        }
    },
    methods: {
        daterange(data) {
            console.log(data);
        }
    }
}
</script>

 