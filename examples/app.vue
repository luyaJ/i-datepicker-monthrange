<style lang="less" scoped>
    #app{ 
        padding: 10px 40px 0; 
    }
</style>

<template>
    <div id="app">
        <MonthRangeDatePicker type="daterange" placeholder="Select date" @on-change="daterange"></MonthRangeDatePicker>
    </div>
</template><script>
export default {
    methods: {
        daterange(data) {
            console.log(data);
        }
    }
}
</script>

