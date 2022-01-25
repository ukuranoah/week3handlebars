const express = require('express')
const exphbs = require('express-handlebars')
const port = process.env.PORT || 3000
const app = express()

app.engine('hbs', exphbs.engine({
    defaultLayout:'main',
    extname:'.hbs',
    helpers:{
        getShortComment(comment){
            if(comment.length < 60){
                return comment
            }
            return comment.substring(0, 60) + "..."
        }
    }

    
}))
app.set('view engine', 'hbs')
//route to render page
app.get('/', (req, res)=>{
    res.render('home', {
        post:[
            {
                author:"Noah U",
                image:"https://picsum.photos/500/500",
                comments:["Stinky", "Bad", "Very bad", "Horrible", "Why", "Occaecat irure nulla nulla ea et in cupidatat duis quis enim consequat sit eiusmod. Nulla culpa culpa non nostrud voluptate. Ex dolor dolor occaecat officia ipsum dolore in nisi qui. Qui reprehenderit Lorem cillum aliquip aute qui."]
            },
            {
                author:"Jordan D",
                image:"https://picsum.photos/500/500?2",
                comments:[]
            },
            {
                author:"Terry B",
                image:"https://picsum.photos/500/500?3",
                comments:["Wow!", "Super!", "Rad", "Nulla laborum fugiat ut nisi laboris sit aliqua ad. Et laboris aliquip do cupidatat et ullamco anim. Laboris proident veniam esse ad duis id eu elit elit elit. Ullamco excepteur irure cillum dolor consequat.", "Sick nasty bro"]
            }
        ]
    })
})

//set up port for connection
app.listen(port, ()=>{
    console.log(`Connected on port ${port}`)
}) 