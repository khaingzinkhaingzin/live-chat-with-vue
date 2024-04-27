<template>
  <nav>
    <div>
        <p>Hi display name</p>
        <p class="email">logged in as email</p>
    </div>
    <button @click="logout">Logout</button>
  </nav>
</template>

<script>
import { ref } from 'vue';
import { auth, signOut } from "../firebase/config";

export default {
    setup() {
        let error = ref(null);

        let logout = async () => {
            try {
                await signOut(auth);
                console.log("user logged out");
            } catch (err) {
                error.value = err.message;
                console.log(error.value);
            }
            
        }

        return { logout };
    }
}
</script>

<style>

</style>