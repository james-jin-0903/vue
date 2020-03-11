<template>
    <div class="otherlist-div" v-bind:class="classname">
        <div> 
            <router-link :to="{name: 'login'}">
                log In
            </router-link>
        </div>
        <div>
            <router-link :to="{name: 'home'}">
                Profile
            </router-link>
        </div>
        <div>
            <router-link :to="{name: 'signup'}">
                Sign Up
            </router-link>
        </div>
        <div>
            <router-link :to="{name: 'home'}">
                Log out
            </router-link>
        </div>
    </div>
    
</template>
<script>
export default {
    name: "otherList",
    props: ["classname"]
}
</script>
<style scoped>
    .otherlist-div {
        position: absolute;
        top: 50px;
        right: 0;
        width: 120px;
        height: auto;
        padding: 5px;
        background-color: rgb(243, 231, 214);
    }
    .otherlist-div div {
        height: 40px;
        text-align: center;
        display: flex;
        align-items: center;
        padding-left: 15px;
        text-decoration: none !important;
        color: black !important;
    }
    .showState {
        animation-duration: .5s;
        animation-name: showanim;
    }
    .hideState {
        transition: .5s;
        transform: scaleY(0);
    }
    @keyframes showanim {
        0% {transform: scaleY(0);}
        100% {transform: scaleY(1);}
    }
</style>