import express from "express";

let articlesInfo = [{
    name: 'learn-react',
    upvotes: 0,
    commnets: [],
},{
    name: 'learn-node',
    upvotes: 0,
    commnets: [],
},{
    name: 'mongodb',
    upvotes: 0,
    commnets: [],
}]

const app = express();
app.use(express.json());

app.put('/api/articles/:name/upvote', (req, res) => {
    const { name } = req.params;
    const article = articlesInfo.find(x => x.name === name);
    if (article){
        article.upvotes += 1;
        res.send(`The ${name} article now has ${article.upvotes} upvotes!!`)
    } else{
        res.send('The article doesn\'t exist')
    }
});

app.post('/api/articles/:name/comments', (req, res) => {
    const { name } = req.params;
    const { postedBy, text } = req.body;

    const article = articlesInfo.find(x => x.name === name);
    if (article){
        article.commnets.push({ postedBy, text });
        res.send(article.commnets)
    } else{
        res.send('The article doesn\'t exist')
    }
})

app.listen(8000, () => {
    console.log('Server is listening on port 8000')
});