let user = {
    username: "deni",
    password: "secret"
}

let newsFeed = [
    {
        user: "bob",
        timeline: "damn this works"
    }
];

let userNamePrompt = prompt("whats your username?");
let passwordPrompt = prompt("whats your password?");

function signIn (user, pass)
{
    if (user === user[0].username && pass === user[0].password)
    {
        console.log(newsFeed);
    }
    else
    {
        alert("sorry wrong pw");
    }
}
signIn(userNamePrompt, passwordPrompt);