import create from 'zustand';
import { addDoc, collection, serverTimestamp, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { deleteObject, ref } from 'firebase/storage';

import { db, storage } from 'fitra/firebase.config.js';


const useTransactionData = create(set => ({
    transactions: [],
    setTransactions: (data) => set({ transactions: data }),
    addTransaction: async (newTransaction) => {
        try {
            console.log(newTransaction);
            await addDoc(collection(db, "transactions"), { ...newTransaction, timestamp: serverTimestamp() });
            console.log("NEW DOCUMENT CREATED");
        }
        catch (err) {
            console.log(err);
        }
    },
    deleteTransaction: async (documentId, fileReference) => {
        // CREATE A REFERENCE FOR THE DOCUMENT AND THE FILE
        const docRef = doc(db, "transactions", documentId);
        const fileRef = ref(storage, fileReference);
        try {

            // DELETE THE DOCUMENT AND OBJECT 
            await deleteDoc(docRef);
            await deleteObject(fileRef);
            // ALERT A MESSAGE
        } catch (err) {
            console.log(err);
        }

    },
    updateTransaction: async (documentId, updatedTransaction) => {
        let docRef;
        // CREATE A REFERENCE TO THE DOCUMENT AND THE FILE
        docRef = doc(db, "transactions", documentId);
        await updateDoc(docRef, updatedTransaction);

    }
}));


export default useTransactionData;