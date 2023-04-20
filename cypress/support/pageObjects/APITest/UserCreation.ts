class userCreation{


    get username() {
        let username = "testUser"+Math.floor(Math.random()*1000000)
        return username
    }

    get password() {
        const specialCharacters = "!@#$%&*";
        const randomSpecialCharacter = specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
        const password = "Testpassword" + Math.floor(Math.random() * 100000) + randomSpecialCharacter
        return password
    }

    get notRegisteredUsername() {
        let username = "testUser"+Math.floor(Math.random()*1000000)
        return username
    }


    get notRegisteredUserPassword() {
        const specialCharacters = "!@#$%&*";
        const randomSpecialCharacter = specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
        const password = "Testpassword" + Math.floor(Math.random() * 100000) + randomSpecialCharacter
        return password
    }
    
  

}

export default userCreation