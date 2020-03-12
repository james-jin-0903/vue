<template>
    <div>
        <h3>Log In</h3>
        <mdb-input label="Email" v-model="Email" style="margin: 40px 20px;" />
        <mdb-input label="Password" v-model="Password"  style="margin: 40px 20px;"/>
        <button v-on:click="login">LogIn</button>
    </div>
</template>
<script>
import { mdbInput } from "mdbvue";
import { db } from "../config/db";
import Firebase from 'firebase';
export default {
    name: "login",
    firebase: {
        users: db.ref("users")
    },
    data: () => {
        return {
            Email: "",
            Password: "",
        }
    },
    components: {
        mdbInput
    },
    methods: {
        login() {
            Firebase.auth().signInWithEmailAndPassword(this.Email, this.Password).catch(function(error) {
                console.log(error);
                return;
            });
            this.$router.replace('/dashboard');
        }
    }
};
</script>
<style scoped>
    div {
        margin: 5%;
        align-items: center;
    }
    button {
        float: right;
        margin-right: 5%;
        border: none;
        outline: none;
        background-color: #f27935;
        width: 100px;
        height: 40px;
        color: white;
        font-weight: bold;
        border-radius: 10%;
    }
</style>