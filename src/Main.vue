<script setup>
import TabBar from '@/components/tab_bar/tabBar.vue'
import VantTab from '@/components/tab_bar/vant-tab.vue'

</script>

<template>

    <header>
        <!-- <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />
        <div class="wrapper">
            <h2>Ready GO ~</h2>
        </div>
        <hr> -->
    </header>

    <main>
        <router-view></router-view>
        <!-- <router-link to=""></router-link>
        <router-link to=""></router-link>
        <router-link to=""></router-link>
        <router-link to=""></router-link> -->
        <!-- <TabBar></TabBar> -->
        <VantTab></VantTab>
    </main>

</template>

<style  scoped>
header {
    line-height: 1.5;
}

.logo {
    display: block;
    margin: 0 auto 2rem;
}

main {
    text-align: center;

    margin: 0 auto;
}

@media (min-width: 1024px) {
    header {
        display: flex;
        place-items: center;
        padding-right: calc(var(--section-gap) / 2);
    }

    .logo {
        margin: 0 2rem 0 0;
    }

    header .wrapper {
        display: flex;
        place-items: flex-start;
        flex-wrap: wrap;
    }
}
</style>