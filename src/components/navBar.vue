<template>
    <div class="navBar">
        <div class="navBtnLeft">
            <img src="../utiles/navBtnLeft.svg" alt="left btn"/>
            <span style="color: white; margin: 0;">5|by5</span>
        </div>
        <div class="navBtnRight">
            <img src="../utiles/navBucketBtn.svg" alt="bucket btn" />
            <img src="../utiles/navSearch.svg" alt="navSearch btn"/>
            <img src="../utiles/navRightBtn.svg" alt="navRightBtn btn" v-on:click="showOtherList"/>
        </div>
        <otherList v-bind:classname="classname"></otherList>
    </div>
</template>
<script>
import otherList from "./otherList"
export default {
    name: "naveBar",
    data: () => {
        return {
            otherlist: false,
            search: false,
            bucket: false,
            sidepanel: false,
            classname: "hideState"
        }
    },
    components: {
        otherList
    },
    methods: {
        showOtherList() {
            this.otherlist = !this.otherlist;
            if (this.classname == "showState") {
                this.classname = "hideState";
            } else {
                this.classname = "showState";
            }
        }
    }
}
</script>
<style scoped>
    .navBar {
        position: sticky;
        top: 0;
        background-color: #f27935;
        height: 50px;
        width: 100%;
        box-shadow: 0 0 1px 1px #291717;
        z-index: 10;
        display: flex;
        align-items: center;
    }
    .navBtnRight {
        position: absolute;
        right: 10px;
    }
    .navBtnLeft {
        position: absolute;
        left: 10px;
    }
    img {
        width: 25px;
        height: 25px;
        cursor: pointer;
        margin: 0 10px 0 10px;
    }
</style>