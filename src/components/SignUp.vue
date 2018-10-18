<template>
    <div id="signup-form">
        <h1>Register.</h1>
        <form @submit.prevent="register">
            <div class="row">
                <div class="col-label">
                    <label for="username">Username</label>
                </div>
                <div class="col-input">
                    <input 
                        type="text" 
                        id="username"
                        name="username" 
                        v-model="username"
                        v-validate="'alpha|min:3'" 
                    />
                    <span>{{ errors.first('username') }}</span>
                </div>
            </div>
            <div class="row">
                <div class="col-label">
                    <label for="email">Email</label>
                </div>
                <div class="col-input">
                    <input 
                        type="email" 
                        id="email" 
                        name="email"
                        v-validate="'required|email'"
                        v-model="email"  
                    />
                    <span>{{ errors.first('email') }}</span>
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
                        name="password" 
                        placeholder="Password"
                        v-validate="'required|min:8|verify_password'"
                        ref="password"
                        v-model="password" 
                    />
                    <span>{{ errors.first('password') }}</span>
                </div>
            </div>
            <div class="row">
                <div class="col-label">
                    <label for="confirm-password">Confirm Password</label>
                </div>
                <div class="col-input">
                    <input 
                        type="password" 
                        id="confirm-password" 
                        placeholder="Password Again"
                        name="password_confirmation"
                        v-validate="'required|confirmed:password'"
                        data-vv-as="password"
                        v-model="confirmPassword"  
                    />
                     <span>{{ errors.first('password_confirmation') }}</span>
                </div>

            </div>
            <div class="signup">
                <input 
                    type="submit" 
                    value="signup" 
                    :disabled=
                        "
                        !email || 
                        !password || 
                        !confirmPassword || 
                        passwordMatchingErrors.length > 0 
                        " 
                />
            </div>
        </form>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'signup',

    directives: { focus: focus },

    data() {
        return {
            username: '',
            email: '',
            password: '',
            confirmPassword: '',
            passwordMatchingErrors: [],
            focused: false,
        }
    },

    watch: {
        confirmPassword() {
            if(!this.confirmPassword){
               this.passwordMatchingErrors.pop(); 
            } else {
                if(this.password === this.confirmPassword){
                    this.passwordMatchingErrors.pop();
                } else if(this.password !== this.confirmPassword) {
                    if(this.passwordMatchingErrors) {this.passwordMatchingErrors.pop()};
                    
                    this.passwordMatchingErrors.push('Password does not match!');
                } else {
                     this.passwordMatchingErrors.pop();
                }
            }
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
