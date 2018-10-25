<template>
    <div>
        <h1>Percentage Table (used as reference for percentages)</h1>
        <table >
            <tr>
                <th>Day</th>
                <td v-for="i in 28">{{i}}</td>
            </tr>
            <tr>
                <th>Percentage</th>
                <td v-for="i in percentage">{{i}}</td>
            </tr>
        </table>
    </div>
</template>

<script>
    export default {
        name: 'percentageTable',

        data(){
            return {
                percentage: [4,7,11,14,18,21,25,29,32,36,39,43,46,50,54,57,61,64,68,71,75,79,82,86,89,93,96,100],
            }
        },
    }
</script>

<style scoped src="../styles/faithfulnessTable.css">
</style>
