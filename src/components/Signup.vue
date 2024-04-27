<template>
  <h2>Sign up</h2>
  <form @submit.prevent="signUp">
    <input type="text" placeholder="display name" v-model="displayName">
    <input type="email" placeholder="email" v-model="email">
    <input type="password" placeholder="password" v-model="password">
    <button>Sign up</button>
  </form>
</template>

<script>
import { ref } from 'vue';
import { auth, createUserWithEmailAndPassword, updateProfile } from "../firebase/config";

export default {
    setup() {
        let displayName = ref("");
        let email = ref("");
        let password = ref("");

        let error = ref();

        let signUp = async () => {
            try {
                let res = await createUserWithEmailAndPassword(auth, email.value, password.value);

                // server fail or dev fail
                if (!res) {
                    throw new Error("could not create new user");
                }

                await updateProfile(auth.currentUser, {
                displayName: displayName.value
                });

                console.log(res.user);
                console.log(auth.currentUser);
            } catch (err) {
                // firebase error handling
                error.value = err.message;
                console.log(error.value);
            }
        }

        return { displayName, email, password, signUp };
    }
}
</script>

<style>

</style>