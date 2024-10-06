// Fill in for exercises!

/*
. Create an object _user_ with the following properties: 
username (string), password (string), and isLoggedIn (boolean).
2. Write a function login(username, password) that 
checks if the inputted username and password match the user object. 
If they match, set isLoggedIn to true and print "Login successful!". 
If they don’t match, print "Invalid username or password!".
3. Write a function logout() that sets isLoggedIn to false and prints "Logged out!".

*/

const _user_ = {
    username: 'rywilson',
    password: 'rywilson',
    isLoggedIn: false
}

function login(username, password){
    if (username == _user_.username && password == _user_.password){
        _user_.isLoggedIn = true
        console.log("Login successful!")
    }else{
        console.log("Invalid username or password!")
    }
}


function logout(){
    _user_.isLoggedIn = false
    console.log("Logged out!")
}


/*
4. Write a function checkLoginStatus() that 
prints whether the user is logged in or logged out using the isLoggedIn property.
5. Call these functions at the bottom of your file to check them out!
*/

function checkLogInStatus(){
    if (_user_.isLoggedIn == true){
        console.log(_user_.username + " is logged in.")
    }else{
        console.log(_user_.username + " is logged out.")
    }
}

login("yes","no")
logout()
checkLogInStatus()