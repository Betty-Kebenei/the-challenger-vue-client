<template>
    <div id="signin-form">
        <h1>Login.</h1>
        <form @submit.prevent="login"> 
            <div class="row">
                <div class="col-label">
                    <label for="username">Email</label>
                </div>
                <div class="col-input">
                    <input
                        type="text" 
                        placeholder="Enter your email" 
                        id="username" 
                        v-model="username" 
                        required
                    />
                </div>
            </div>
            <div class="row">
                <div class="col-label">
                    <label for="password">Password</label>
                </div>
                <div class="col-input">
                    <input 
                        type="password"
                        id="password" 
                        v-model="password" 
                        required
                    />
                </div>
            </div>
            <div class="check"> 
                <label for="remember">Remember me</label>
                <input  
                    type="checkbox" 
                    id="remember" 
                    value="remember" 
                />
            </div>
            <div class="forgot-password"> 
                <a href="#">Forgot password?</a>
            </div>
            <br />
            <div class="signin">
                <input 
                    type="submit" 
                    value="Login" 
                />
            </div>
        </form>
        <br />
        <h2>OR</h2>
        <h3>Login with a social media account</h3>
        <div class="social-media-icons">
            <a class="facebook">
                <font-awesome-icon 
                    :icon="{ prefix: 'fab', iconName: 'facebook' }" 
                />Facebook</a>
            <a class="twitter">
                <font-awesome-icon 
                    :icon="{ prefix: 'fab', iconName: 'twitter' }" 
                />Twitter</a>
            <a class="google">
                <font-awesome-icon 
                    :icon="{ prefix: 'fab', iconName: 'google' }"
                />Google</a>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'signin',

    data() {
        return {
            email: '',
            password: '',
        }
    },

    methods: {
        login(){
            axios
            .post('http://localhost:3001/api/v1/signin', {
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

<style scoped src="../styles/signin.css">
</style>
