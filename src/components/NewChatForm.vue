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
import useCollection from "../composable/useCollection"
import { serverTimestamp } from "firebase/firestore"; 

export default {
    setup() {
        let message = ref("");
        let { user } = getUser();
        let { error, addDocu } = useCollection("messages");

        let handleSubmit = async () => {
            let chat = {
                message: message.value,
                name: user.value.displayName,
                created_at: serverTimestamp()
            }

            await addDocu(chat);
            message.value = "";
        }

        return { message, handleSubmit };
    }
};
</script>

<style>
      form {
        margin: 10px;
      }
      textarea {
        width: 100%;
        max-width: 100%;
        margin-bottom: 6px;
        padding: 10px;
        box-sizing: border-box;
        border: 0;
        border-radius: 20px;
        font-family: inherit;
        outline: none;
      }
</style>
