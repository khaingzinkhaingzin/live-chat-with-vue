<template>
	<form>
        <textarea 
            placeholder="text message and hit enter to send" 
            v-model="message"
            @keypress.enter="handleSubmit"
        ></textarea>
    </form>
</template>

<script>
import { ref } from 'vue';
import getUser from '../composable/getUser'
import { serverTimestamp } from '../firebase/config'

export default {
    setup() {
        let message = ref("");
        let { user } = getUser();

        let handleSubmit = () => {
            let chat = {
                message: message.value,
                name: user.value.displayName,
                created_at: serverTimestamp()
            }

            console.log(chat);
            message.value = "";
        }

        return { message, handleSubmit };
    }
};
</script>

<style></style>
