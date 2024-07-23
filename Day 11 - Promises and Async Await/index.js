// Task 1
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise 1 resolved after 2 seconds");
    }, 2000);
});

promise
    .then((message) => {
        console.log(message);
    })
    .catch(() => {
        console.log("Promise 1 rejected");
    });


// Task 2
const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Promise 2 rejected after 2 seconds");
    }, 2000);
});

promise2
    .then(() => {
        console.log("Promise 2 resolved");
    })
    .catch((message) => {
        console.log(message);
    });


// Task 3
const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise 3 (a) data resolved after 3 seconds");
    }, 3000);
});

promise3
    .then((message) => {
        console.log(message);
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("Promise 3 (b) data resolved after 2 seconds");
            }, 2000);
        });
    })
    .then((message) => {
        console.log(message);
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("Promise 3 (c) data resolved after 1 second");
            }, 1000);
        });
    })
    .then((message) => {
        console.log(message);
    })
    .catch(() => {
        console.log("Promise 3 rejected");
    });

// Alternative Task 3
function fetchData1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data from server 1");
        }, 1000);
    });
}

function fetchData2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data from server 2");
        }, 1000);
    });
}

function fetchData3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data from server 3");
        }, 1000);
    });
}

fetchData1()
    .then((message1) => {
        console.log(message1);
        return fetchData2();
    })
    .then((message2) => {
        console.log(message2);
        return fetchData3();
    })
    .then((message3) => {
        console.log(message3);
    })
    .catch((error) => {
        console.error("Error fetching data:", error);
    });


// Task 4
const promise4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Task 4 Data resolved");
    }, 8000);
});


const getData = async () => {
    try {
        const message = await promise4;
        console.log(message);
    } catch (error) {
        console.log("Task 4 Data rejected:", error);
    }
};

getData();


// Task 5
const promise5 = new Promise((resolve, reject) => {
    reject("Task 5 Data rejected");
});

const getData2 = async () => {
    try {
        const data = await promise5;
        console.log(data);
    } catch (error) {
        console.log(error);
    }
};

getData2();



// Task 6
const apiUrl = 'https://jsonplaceholder.typicode.com/users';

fetch(apiUrl)
    .then((response) => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.error('There has been a problem with your fetch operation:', error);
    });



// Task 7
async function fetchData() {
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}

fetchData();


// Task 8
const api1 = "https://jsonplaceholder.typicode.com/users";
const api2 = "https://jsonplaceholder.typicode.com/posts";
const api3 = "https://jsonplaceholder.typicode.com/comments";

const fetchAPI = (url) => {
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        });
}

Promise.all([fetchAPI(api1), fetchAPI(api2), fetchAPI(api3)])
    .then(values => {
        console.log('Users:', values[0]);
        console.log('Posts:', values[1]);
        console.log('Comments:', values[2]);
    })
    .catch(error => {
        console.error('Error in fetching data:', error);
    });


// Task 9
const fetchAPI2 = (url) => {
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        });
}

Promise.race([fetchAPI2(api1), fetchAPI2(api2), fetchAPI2(api3)])
    .then(value => {
        console.log('First resolved value:', value);
    })
    .catch(error => {
        console.error('Error in fetching data:', error);
    });