/**
 *
 * @returns A promise that is designed to resolve with a list of hobbits, or potentially fail with an failure object. The failure object includes a boolean success property and a string message property.
 */





Promise.then
function getList() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let potentialFail = Math.round(Math.random() * 100) < 10;
      if (potentialFail) {
        reject({ success: false, message: "Failed to get list of hobbits." });
      } else {
        resolve(["Bilbo", "Frodo", "Sam", "Merry", "Pippin"]);
      }
    }, 10);
  });
}

const mistake = document.getElementById("error");
const unknownList = document.getElementById ("list");

// getList()

//   .then((resolvedValue) => {
    
//     console.log(resolvedValue);

//   })
//   .catch((resolvedValue) => {
    
//     console.error(resolvedValue);
//   });

  

  getList()
  .then((resolvedValue) => {
    console.log(resolvedValue);
    resolvedValue.forEach((element, index, array) => {
      
      const listItem = document.createElement("li");
      listItem.textContent = element;

     
      unknownList.appendChild(listItem);
    });
  })
  .catch((resolvedValue) => {
    
    mistake.textContent = resolvedValue.message;
  });






// .then(()) => {

// }).catch(() => {


// });



// TODO: Handle the resolved or rejected states of the promise

// TODO: If the promise resolves with the list of hobbits
// Render the list of hobbits as list items within the unordered list with id="list" (check the index.html file)

// TODO: If the promise rejects with the failure object
// Display the failure message in the paragraph element with id="error" (check index.html file)
