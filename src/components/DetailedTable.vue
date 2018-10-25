<template>
    <div>
        <h1>Detailed Table For Month Form Data</h1>
        <table >
            <tr>
                <th>Date</th>
                <th>Riser Time</th>
                <th>Chapters (Morning)</th>
                <th>Chapters (Others)</th>
                <th>Notes</th>
                <th>Prayer</th>
                <th>SMR</th>
                <th>Data Validity</th>
                <th>Actions</th>
            </tr>
            <tr v-for="i in dailydata">
                <td id="date">{{i.riserTime.split('T')[0]}}</td>
                <td id="riser-time">{{i.riserTime.split('T')[1]}}</td>
                <td id="morning-chapters">{{i.chaptersMorning}}</td>
                <td id="other-chapters">{{i.chaptersOthers}}</td>
                <td id="notes">
                    <span v-if="i.notes === true"><font-awesome-icon icon="check"/></span>
                    <span v-else><font-awesome-icon icon="times"/></span>
                </td>
                <td id="prayer">
                    <span v-if="i.prayer === true"><font-awesome-icon icon="check"/></span>
                    <span v-else><font-awesome-icon icon="times"/></span>
                </td>
                <td id="smr">
                    <span v-if="i.smr === true"><font-awesome-icon icon="check"/></span>
                    <span v-else><font-awesome-icon icon="times"/></span>
                </td>
                <td id="validity">Date</td>
                <td id="actions">
                    <font-awesome-icon icon="edit"/>
                    <font-awesome-icon icon="trash"/>
                </td>
            </tr>
        </table>
    </div>
</template>

<script>
    export default {
        name: 'detailtedTable',

        props: {
            dailydata: Array
        },
    }
</script>

<style scoped src="../styles/faithfulnessTable.css">
</style>