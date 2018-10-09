<template>
    <div id="signup-form">
        <form>
            <h2>Fill in the form to sign up.</h2>
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
            <input type="submit" value="signup" />
        </form>
    </div>
</template>

<script>
export default {
    name: 'signup',
}
</script>

<style scoped src="../styles/signup.css">
</style>
