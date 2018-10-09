<template>
    <div id="signup-form">
        <form>
            <h2>Fill in the form to sign in.</h2>
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
            <input type="submit" value="Signin" />
        </form>
        
    </div>
</template>

<script>
export default {
    name: 'signin',
}
</script>

<style scoped src="../styles/signin.css">
</style>
