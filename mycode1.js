// -------------------- Synchronous Programing Example -------------------- //
function main() {
  console.log("Step 1: Start");
  let message = "Step 2: Processing...";
  console.log(message);
  console.log("Step 3: Finish");
}
main();
// Output:
// Step 1: Start
// Step 2: Processing...
// Step 3: Finish
// console.log("\n ------------------------------------------------" );

// -------------------- Asynchronous Programing Example -------------------- //

///////////////////////////////////////////////////////////////////////////////
// ======= Execute All Functions one by one for better understanding ------- //
///////////////////////////////////////////////////////////////////////////////

// function mainAsync() {
//   console.log("Start");

//   setTimeout(() => {
//     console.log("Inside setTimeout");
//   }, 1000);
  
//   console.log("End");
// }
// mainAsync();
// console.log("\n ------------------------------------------------" );

// function mainAsync1() {
//   console.log("Start");

//   fetch("https://jsonplaceholder.typicode.com/users/1")
//     .then(response => response.json())
//     .then(data => {
//       console.log("User:", data.name);
//     });

//   console.log("End");
// }
// mainAsync1();
// console.log("\n ------------------------------------------------" );

// -------------------- Analogy: Movie Night Setup -------------------- //
// async function setupMovieNight() {
//     console.log("Starting setup...");

//     // Wait for the popcorn Promise to resolve
//     await cookPopcorn();
//     console.log("Popcorn is ready!");

//     // Wait for the drinks Promise to resolve (or maybe it's quick/sync)
//     await pourDrinks();
//     console.log("Drinks are poured!");

//     // Only runs after both awaits complete successfully
//     startMovie();
//     console.log("Movie started!");
// }
// setupMovieNight();

// function setupMovieNight1() {
//     console.log("\n ------------------------------------------------" );
//     console.log("Starting setup...");

//     // Wait for the popcorn Promise to resolve
//     cookPopcorn();
//     console.log("Popcorn is ready!");

//     // Wait for the drinks Promise to resolve (or maybe it's quick/sync)
//     pourDrinks();
//     console.log("Drinks are poured!");

//     // Only runs after both awaits complete successfully
//     startMovie();
//     console.log("Movie started!");
// }
// setupMovieNight1();

// function setupMovieNight2() {
//     console.log("\n ------------------------------------------------" );
//     console.log("Starting setup...");

//     setTimeout(() => {
//         console.log("Popcorn are cocked!");
//     }, 2000);
    
//     console.log("Drinks are poured!");

//     console.log("Movie started!");
// }
// setupMovieNight2();

// Example placeholder for an async function returning a Promise
function cookPopcorn() {
    console.log("Putting popcorn in microwave...");
    // Simulate a delay (e.g., 2 seconds)
    return new Promise(resolve => setTimeout(() => {
        console.log("Microwave finished!");
        resolve(); // Fulfill the promise after the delay
    }, 2000));
}
function pourDrinks() {
    console.log("pouring Drinks...");
    // Simulate a delay (e.g., 2 seconds)
    return new Promise(resolve => setTimeout(() => {
        console.log("pouring Drinks finsished!");
        resolve(); // Fulfill the promise after the delay
    }, 2000));
}
function startMovie() {
    console.log("starting Movie!");
}

// ------------------ Common Concepts & Tools in Asynchronous JavaScript -------------------
// 1. Callback functions
// function fetchData(anyFunc) {
//   console.log("\n ------------------------------------------------" );
//   console.log("before...");
//   setTimeout(() => {
//     anyFunc("Data loaded.");
//   }, 2000);
//   console.log("after...");
// }
// fetchData(data => {
//     console.log("Starts...");  
//     console.log(data); // Asynchronous
//     console.log("Ends...");  
// });

// 2. .then() method
// function fetchData1() {
//   console.log("\n ------------------------------------------------" );

//   return new Promise((resolve, reject) => {
//     console.log("before...");
//     setTimeout(() => resolve("Data ready"), 2000);
//     console.log("after...");
//   });
// }
// fetchData1().then(data => {
//     console.log("Starts...");  
//     console.log(data);
//     console.log("Ends...");  
// }).catch(error => {});

// function fetchData2() {
//   console.log("\n ------------------------------------------------" );

//   return new Promise((resolve, reject) => {
//     console.log("before...");
//     setTimeout(() => reject("Data not ready"), 2000);
//     console.log("after...");
//   });
// }
// fetchData2()
//   .then(data => {})
//   .catch(error => {
//     console.log("Starts...");  
//     console.error(error);
//     console.log("Ends...");  
// });

// 3. async/await syntax
// async function getData() { 
//   console.log("\n ------------------------------------------------" );   
//   console.log("Starts getData...");  
//   console.log(await fetchData1()); // Non-blocking pause
//   console.log("Ends getData...");
// }
// getData();

// async function getData2() { 
//   console.log("\n ------------------------------------------------" );   
//   console.log("Starts getData...");
//   try {
//     await fetchData2(); // Non-blocking pause
//   } catch (error) {
//     console.error(error);
//     console.log("Ends getData...");
//   } 
// }
// await getData2(); // -- result as a getData1() - This will pause until getData2 resolves or rejects

// async function getUser() {
//   try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
//     const user = await response.json();
//     console.log(user);
//   } catch (error) {
//     console.error("Error fetching user:", error);
//   }
// }
// getUser().then(() => {
//   console.log("User data fetched successfully.");
// }).catch(error => {
//   console.error("Failed to fetch user data:", error);
// }).finally(() => {
//   console.log("Finished user data operation.");
// });
// await getUser();


// -------------------- Relevance to web3 and Contract Deployment -------------------- //
// async function main() {
//   console.log("Deploying contract...");
//   // contractFactory.deploy() returns a Promise that resolves with the deployed contract object
//   const deployedContract = await contractFactory.deploy(/* constructor args */);
// ​
//   // This line only runs *after* the deployment is confirmed
//   await deployedContract.deployed(); // Often an additional wait for full confirmation
// ​
//   console.log("Contract deployed to:", deployedContract.address);
//   // Now we can interact with deployedContract...

//   console.log("Deployment script finished successfully.");
// }
// Execute the main function and handle the final Promise
// main()
//   .then(() => process.exit(0)) // If main() fulfills, exit the script with success code 0
//   .catch((error) => {         // If main() rejects (throws an error), catch it
//     console.error(error);      // Log the error details
//     process.exit(1);           // Exit the script with failure code 1
//   });