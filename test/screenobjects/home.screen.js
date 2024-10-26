class homeScreen{
    get emailField(){
        return $('/html/body/section/div/div/div[1]/div/form/input[2]')
    }

    get passwordField(){
        return $('/html/body/section/div/div/div[1]/div/form/input[3]')
    }

    get submitBtn(){
        return $('/html/body/section/div/div/div[1]/div/form/button')
    }

    async insertCredentials(email, password){
        await this.emailField.setValue(email)
        await this.passwordField.setValue(password)
    }
}

module.exports = new homeScreen()