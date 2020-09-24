function isUserValid(username, password)
{
    for( let i = 0; i < user; i++)
    {
        if(database[i].username === username && database[i].password === password)
        {
            return true;
        }

    }
    return false;
}