// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getFirestore, addDoc, getDoc, getDocs, deleteDoc, updateDoc, collection, doc } from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyCtn-Y1y6Cr0APCpFiff6IzY-zsQO9EqF0",
  authDomain: "lunas-de-valencia.firebaseapp.com",
  projectId: "lunas-de-valencia",
  storageBucket: "lunas-de-valencia.appspot.com",
  messagingSenderId: "892408662087",
  appId: "1:892408662087:web:06e9291e75c6d61b7d0962"
};

const app = initializeApp(firebaseConfig);

const bdd = getFirestore()

export const createProducts = async () => {
    const promise = await fetch('./json/productos.json')
    const productos = await promise.json()
    productos.forEach(async (prod) => {
        await addDoc(collection(bdd, "productos"), { 
            nombre: prod.nombre,
            idCategoria: prod.idCategoria,
            stock: prod.stock,
            precio: prod.precio,
            img: prod.img
        })
    })

}