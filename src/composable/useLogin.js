import { ref } from "vue";
import { auth, signInWithEmailAndPassword } from "../firebase/config";

let error = ref(null);

let signIn = async (email, password) => {
    try {
        let res = await signInWithEmailAndPassword(auth, email, password);

        if (!res) {
            throw new Error("Can't login");
        }
        
        return res;
    } catch (err) {
        error.value = err.message;
    }
}

let useLogin = () => {
    return { error, signIn };
}

export default useLogin