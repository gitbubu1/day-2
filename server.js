const app = express() 

app,get('/', (req, res) => {
res.send("hello World")
})

app.get("/about", function(req, res) {
res.send("This is about page")
})

app.listen(3000) // server start karna