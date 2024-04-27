import { ref } from "vue";
import { auth, createUserWithEmailAndPassword, updateProfile } from "../firebase/config";

let error = ref();

let createAccount = async (email, password, displayName) => {
    try {
        let res = await createUserWithEmailAndPassword(auth, email, password);

        // server fail or dev fail
        if (!res) {
            throw new Error("could not create new user");
        }

        await updateProfile(auth.currentUser, {
        displayName: displayName
        });

        return res;
        
    } catch (err) {
        // firebase error handling
        error.value = err.message;
        console.log(error.value);
    }
}

let useSignup = () => {

    return { error, createAccount };
}

export default useSignup;