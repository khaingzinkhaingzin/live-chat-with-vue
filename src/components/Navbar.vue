<template>
  <nav v-if="user">
    <div>
        <p>Hi {{ user.displayName }}</p>
        <p class="email">logged in as {{ user.email }}</p>
    </div>
    <button @click="logout">Logout</button>
  </nav>
</template>

<script>
import getUser from "../composable/getUser"
import useLogout from "../composable/useLogout"

export default {
    setup() {
        let { logout } = useLogout();
        let { user } = getUser();

        return { logout, user };
    }
}
</script>

<style>

</style>