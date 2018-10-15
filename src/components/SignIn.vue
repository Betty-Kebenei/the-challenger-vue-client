<template>
    <div id="signup-form">
        <h1>Login.</h1>
        <form> 
            <div class="row">
                <div class="col-label">
                    <label for="username">Username | Email</label>
                </div>
                <div class="col-input">
                    <input type="text" placeholder="Enter your email or username" id="username" v-model="username" />
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
            <div class="check"> 
                <label for="remember">Remember me</label>
                <input type="checkbox" id="remember" value="remember" />
            </div>
            <div class="forgot-password"> 
                <a href="#">Forgot password?</a>
            </div>
            <br />
            <div class="signin"><input type="submit" value="Login" /></div>
        </form>
        <br />
        <h2>OR</h2>
        <h3>Login with a social media account</h3>
        <div class="social-media-icons">
            <a class="facebook"><font-awesome-icon :icon="{ prefix: 'fab', iconName: 'facebook' }" />Facebook</a>
            <a class="twitter"><font-awesome-icon :icon="{ prefix: 'fab', iconName: 'twitter' }" />Twitter</a>
            <a class="google"><font-awesome-icon :icon="{ prefix: 'fab', iconName: 'google' }"/>Google</a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'signin',
}
</script>

<style scoped src="../styles/signin.css">
</style>
