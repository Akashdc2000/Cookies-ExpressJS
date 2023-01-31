const express=require('express')
var cookieParser = require('cookie-parser')


const app=express()
app.use(cookieParser())
app.use(express.json())


// IMP Note: The Cookies are created by Postman requests are not seen to the broser.
// Because Postman is a different client than our browser.
// That's why the Cookies created by POST and PUT request are not part of a our browser...

//root
app.get('/',(request,response)=>{
    response.cookie("aaa","bbbb")
    response.cookie("a","bbbb")
    response.cookie("aa","bbbb")
    response.cookie("aa11a","bbbb")
    response.cookie("aaa1","bbbb")

    //above cookies are part of browser and postman both
    response.send("<H1>Welcome to our Cookies Application</H1>")

})

//Set Cookies
app.post('/setCookie',(request,response)=>{
    const {key,value}=request.body;
    response.cookie(key,value)
    response.send("Cookies Created Successfully...")
})

//Get Cookies
app.get('/getCookies',(request,response)=>{

    response.send(request.cookies)
})


//Update Cookies 
app.put('/updateCookie',(request,response)=>{
    const {key,value}=request.body;
    response.cookie(key,value)
    response.send("Cookies Updated Successfully...")
})

//Delete Cookies
app.delete('/deleteCookie',(request,response)=>{
    response.clearCookie(request.body.key)
    response.send("Cookie Deleted Succesfully")
})

app.listen(1000,()=>{
    console.log("Connection Succesfully Done...\nServer Running at localhost:1000")
})