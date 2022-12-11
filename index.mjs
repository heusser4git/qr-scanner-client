import express from 'express';
import path from "path";

const app = express();

const Router = express.Router();
Router.get("/", (req, res)=>{
    console.log(path.join(process.cwd() + '/view/index.html'));
    res.sendFile(path.join(process.cwd() + '/view/index.html'));
});

Router.get("/:file", (req, res)=>{
    res.sendFile(path.join(process.cwd() + '/view/' + req.params.file));
});

Router.get("/img/:file", (req, res)=>{
    res.sendFile(path.join(process.cwd() + '/view/img/' + req.params.file));
});
app.use("/", Router);

const port = 1234;
app.listen(port, () => console.log('Server ready on Port ' + port));
