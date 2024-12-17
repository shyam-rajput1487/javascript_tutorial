const user = {
    username: "Shyam",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function () {
        // console.log("Got user details from database");
        // console.log(`username:${this.username}`);
        // console.log(this);
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);


// const promiseOne=new Promise()
// const date =new Date()

function User(userName, loginCount, isLoggedIn) {
    this.username = userName;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;


    this.greeting=function(){
        console.log(`Welcome ${this.username}`)
    }


    return this;
}

const userOne = new User("Shyam", 12, true)
const userTwo = new User("Mohan", 11, false)

console.log(userOne)
console.log(userTwo)