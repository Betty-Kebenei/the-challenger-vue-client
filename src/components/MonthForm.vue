<template>
    <form>
        <h1> Month Form </h1>
        <div class="row">
            <div class="col-label">
                <label for="from-date">From Date</label>
            </div>
            <div class="col-input">
                <input type="date" id="from-date" v-model="fromDate" />
            </div>
        </div>
        <div class="row">
            <div class="col-label">
                <label for="to-date">To Date</label>
            </div>
            <div class="col-input">
                <input type="date" id="to-date" v-model="toDate" />
            </div>
        </div>
        <input type="button" value="Cancel" />
        <input type="submit" value="Submit" />
    </form>
</template>

<script>
export default {
  name: 'monthForm'
}
</script>

<style scoped src="../styles/monthForm.css">
</style>
