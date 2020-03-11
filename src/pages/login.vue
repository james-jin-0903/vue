<template>
    <div>
        <h3>Log In</h3>
        <mdb-input label="Email" v-model="Email" style="margin: 40px 20px;" />
        <mdb-input label="Password" v-model="Password"  style="margin: 40px 20px;"/>
        <button>LogIn</button>
    </div>
</template>
<script>
import { mdbInput } from "mdbvue";
export default {
    name: "login",
    data: () => {
        return {
            UserName: "",
            LastName: "",
            Email: "",
            Password: "",
            Confirm: ""
        }
    },
    components: {
        mdbInput
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