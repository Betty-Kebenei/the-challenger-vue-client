<template>
    <div>
        <h1>Reading Speed Bar Chart</h1>
        <table >
            <tr>
                <th>Day</th>
                <td v-for="i in 28">{{i}}</td>
            </tr>
            <tr>
                <th>Date</th>
                <td>{{fromDate}}</td>
                <td v-for="i in dates">{{i}}</td>
            </tr>
            <tr>
                <th>Percentage</th>
                <td v-for="i in percentage">{{i}}</td>
            </tr>
            <tr>
                <th>Notes</th>
                <td v-for="i in dailies[4]">{{i}}</td>
            </tr>
            <tr>
                <th>Prayer</th>
                <td v-for="i in dailies[5]">{{i}}</td>
            </tr>
            <tr>
                <th>SMR</th>
                <td v-for="i in dailies[6]">{{i}}</td>
            </tr>
            <tr>
                <th>Data Validity</th>
                <td>Yes</td>
                <td>No</td>
            </tr>
        </table>
    </div>
</template>

<script>
    export default {
        name: 'faithfullnessTable',

        data(){
            return {
                percentage: [4,7,11,14,18,21,25,29,32,36,39,43,46,50,54,57,61,64,68,71,75,79,82,86,89,93,96,100],
                fromDate: '',
                dates: []
            }
        },
        
        props: {
            month: Object,
            dailies: Array,
        },

        mounted() {
            this.fromDate = this.month.fromDate;
        },

        watch: {
            fromDate() {
                for(let i=1; i < 28; i ++){
                    var date = new Date(this.fromDate);
                    var newdate = new Date(date);
                    
                    newdate.setDate(newdate.getDate() + i);
            
                    var dd = newdate.getDate();
                    var mm = newdate.getMonth() + 1;
                    var y = newdate.getFullYear();

                    var someFormattedDate = y + '-' + mm + '-' + dd;
                    let nextDate = someFormattedDate;  

                    this.dates.push(nextDate);
                }
            }
        }
    }
</script>

<style scoped src="../styles/faithfulnessTable.css">
</style>
