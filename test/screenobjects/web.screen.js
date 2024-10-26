module.exports = {
    buttons: {        
        saveBtn: '/html/boy/div/div[2]/div[1]/div/div[3]/form/div[6]/input'
    },
    fields: {
        nameField: '/html/body/div/div[2]/div[1]/div/div[3]/form/div[1]/input',
        emailContactField: '/html/body/div/div[2]/div[1]/div/div[3]/form/div[2]/input',
        subjectField: '/html/body/div/div[2]/div[1]/div/div[3]/form/div[3]/input',
        messageField: '/html/body/div/div[2]/div[1]/div/div[3]/form/div[4]/textarea'

    },
    links: {
        ctcUs: '/html/body/header/div/div/div/div[2]/div/ul/li[8]/a',
    },

    formSubmit: async function (name,email,subject,message) {
        await web.$(this.fields.nameField).setValue(name)
        await web.$(this.fields.emailContactField).setValue(email)
        await web.$(this.fields.subjectField).setValue(subject)
        await web.$(this.fields.messageField).setValue(message)
    }
}