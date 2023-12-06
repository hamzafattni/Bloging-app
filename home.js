import {  onAuthStateChanged , signOut } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"
import { auth , db } from "./config.js"
import { collection, addDoc, getDocs,} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";

onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      console.log(uid);
    } else {
      window.location = 'index.html'
    }
});

const logout = document.querySelector('#logout-btn')

logout.addEventListener('click' , () => {
    signOut(auth).then(() => {
        console.log("Log Out Sccessfully");
        window.location = "index.html"
      }).catch((error) => {
       console.log(error);
      });
})


const from = document.querySelector('#form')
const tittle = document.querySelector('#tittle')
const description = document.querySelector('#description')
const main = document.querySelector(".main")

async function getData (){
  const arr = []
  const querySnapshot = await getDocs(collection(db, "postes"));
querySnapshot.forEach((doc) => {
  arr.push(doc.data())
});
console.log(arr);
arr.map((item)=>{
  main.innerHTML += `
  <div class="card">
  <div class="card-body">
  <span><p>Tittle:</span>${item.tittle}</p>
  <span><p>Description:</span>${item.description}</p>
  </div>
</div>`
})
}

getData()

from.addEventListener('submit' , async(event)=>{
  event.preventDefault();
  try {
    const docRef = await addDoc(collection(db, "postes"), {
      tittle:tittle.value,
      description:description.value,
      uid:auth.currentUser.uid
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
})