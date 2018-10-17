<template>
    <div id="signup-form">
        <h1>Register.</h1>
        <form @submit.prevent="register">
            <div class="row">
                <div class="col-label">
                    <label for="username">Username</label>
                </div>
                <div class="col-input">
                    <input type="text" id="username" v-model="username" />
                </div>
            </div>
            <div class="row">
                <div class="col-label">
                    <label for="email">Email</label>
                </div>
                <div class="col-input">
                    <input type="email" id="email" v-model="email" />
                </div>
            </div>
            <div class="row">
                <div class="col-label">
                    <label for="password">Password</label>
                </div>
                <div class="col-input">
                    <input type="password" id="password" v-model="password" />
                </div>
            </div>
            <div class="row">
                <div class="col-label">
                    <label for="confirm-password">Confirm Password</label>
                </div>
                <div class="col-input">
                    <input type="password" id="confirm-password" v-model="confirmPassword" />
                </div>
            </div>
            <div class="signup"><input type="submit" value="signup" /></div>
        </form>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'signup',

    data() {
        return {
            username: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    },

    methods: {
        register(){
            axios
            .post('http://localhost:3001/api/v1/signup', {
                username: this.username,
                email: this.email,
                password: this.password
            })
            .then(response => {
                this.$snack.success(response.data.message);
                this.$router.push({name: 'home'})
            })
            .catch((error) => {
                this.$snack.danger(error.response.data);
            });
        },
    },
}
</script>

<style scoped src="../styles/signup.css">
</style>
