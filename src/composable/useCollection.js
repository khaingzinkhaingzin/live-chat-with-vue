import { ref } from "vue"
import { db } from "../firebase/config" 
import { collection, addDoc } from "firebase/firestore"; 

let useCollection = (collectionName) => {
    let error = ref(null);
    let addDocu = async (doc) => {
        try {
            // Add a new document in collection "posts"
            await addDoc(collection(db, collectionName), doc);
        } catch (err) {
            console.log(err.message);
            error.value = "could not send the message";
        }
    }

    return {error, addDocu}
}

export default useCollection