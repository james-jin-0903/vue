<template>
    <div class="home-div">
        <img src="../utiles/homeCloud.svg" alt="homeCloud" style="height: 400px;"/>
        <h3>
            We recover projects
        </h3>
        <img src="../utiles/homeHandIcon.svg" alt="homeCloud" class="btn-top" style="top: 20px;"/>
        <img src="../utiles/homeBucketIcon.svg" alt="homeCloud" class="btn-top" style="top: 80px;"/>
        <button class="btn-bottom"><img src="../utiles/homeUserIcon.svg" alt="homeCloud" /></button>
    </div>
</template>
<script>
export default {
    name: "home"
}
</script>
<style scoped>
    .home-div {
        background-color: #f27935;
        position: relative;
        top: 0;
        margin: 0;
        padding: 0;
        height: 92vh;
        width: 100%;
        text-align: center;
    }
    img {
        width: 70%;
        height: 60%;
    }
    h3 {
        color: white;
        font-size: 60px;
        font-family: Roboto;
        font-weight: lighter;
        margin: 0;
    }
    .btn-bottom {
        position: absolute;
        bottom: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        border: none;
        background: #FA5252;
        box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.25);
        outline: none;
    }
    .btn-top {
        position: absolute;
        right: 20px;
        width: 35px;
        height: 35px;
        cursor: pointer;
    }

</style>