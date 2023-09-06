import { arrayUnion, doc, updateDoc} from 'firebase/firestore/lite';
import firebase from 'firebase/compat/app'; // Note the /compat in the import
import 'firebase/compat/firestore';
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyBnTZgHAZpZeDYq7mGmW1IsgQeUu9sPcAU",
  authDomain: "taskify-52286.firebaseapp.com",
  projectId: "taskify-52286",
  storageBucket: "taskify-52286.appspot.com",
  messagingSenderId: "991969111772",
  appId: "1:991969111772:web:615111c69639f8079d8e19",
  measurementId: "G-MBW2WTMC66"
};

firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();

export function updateCurrentUserDocument(field,newValue,overwrite) {
      const userDocRef = doc(db, 'data', "nZpaeWiJEU9iaHUM8sr4")

      let updateData = {}
      if (overwrite) {
          updateData = {
              [field]: newValue,
          }
      } else {
        if (Array.isArray(newValue)) {
              updateData = {
                  [field]: arrayUnion(...newValue),
              }
          }
      }
      updateDoc(userDocRef, updateData)
          .then(() => {
              console.log('Updated current user in Firestore!')
          })
          .catch((error) => {
              console.log('Error updating current user', error)
          })
  }
export function addNewTaskToCurrentUser(task) {
      const userDocRef = doc(db, 'data', "nZpaeWiJEU9iaHUM8sr4")
        const userData = {
            tasksArray: arrayUnion({
                id: task.id,
                title: task.title,
                desc: task.desc,
                priority: task.priority,
                dueDate: task.dueDate,
                creationDate: task.creationDate,
                status: task.status,
                categories: task.categories,
            }),
        }
        updateDoc(userDocRef, userData)
            .then(() => {
                console.log('updated current user in Firestore!')
            })
            .catch((error) => {
                console.log('Error updating current user', error)
            })
    }
export function addToArray (field, elementToAdd)  {
      // Reference to the specific document
      const docRef = db.collection('data').doc("nZpaeWiJEU9iaHUM8sr4");
  
      // Update the first array in the document
      docRef
        .update({
          [field]: firebase.firestore.FieldValue.arrayUnion(elementToAdd),
        })
        .then(() => {
          console.log('Element added to the first array in document:');
        })
        .catch((error) => {
          console.error('Error adding element:', error);
        });
    };
export function removeArrayElement  (field,oldele)  {
      // Get a reference to the specific document
      const docRef = db.collection('data').doc("nZpaeWiJEU9iaHUM8sr4");
  
      // Update the first array in the document
      docRef
        .update({
          [field]: firebase.firestore.FieldValue.arrayRemove(oldele),
          // [field]: firebase.firestore.FieldValue.arrayUnion(elementToAdd),
        })
        .then(() => {
          console.log('Document successfully updated!');
        })
        .catch((error) => {
          console.error('Error updating document:', error);
        });
    };
export function updateField  (feild,newval)  {
      const docRef = db.collection('data').doc("nZpaeWiJEU9iaHUM8sr4");
  
      // Update the field with the new value
      docRef.update({
        [feild]: newval, // Replace 'fieldName' with the actual field name
      })
      .then(() => {
        console.log('Field updated successfully');
      })
      .catch((error) => {
        console.error('Error updating field:', error);
      });
    };

export function updateArrayElement (field,oldele,updatedValue) {
  const docRef = db.collection('data').doc("nZpaeWiJEU9iaHUM8sr4");

  // Fetch the document data
  docRef
    .get()
    .then((doc) => {
      if (doc.exists) {
        // Get the current array
        const currentArray = doc.data()[field];
        // Find the index of the element you want to update
        const indexToUpdate = currentArray.findIndex(
          (element) => element.id === oldele.id
        );

        if (indexToUpdate !== -1) {
          // Make a copy of the array to avoid mutating the original
          const newArray = [...currentArray];
          // Update the specific element at the found index
          newArray[indexToUpdate] = updatedValue;

          // Update the document with the modified array
          return docRef.update({
            [field]: newArray,
          });
        }
      }
      return null;
    })
    .then(() => {
      console.log('Array element updated successfully');
    })
    .catch((error) => {
      console.error('Error updating array element:', error);
    });
};