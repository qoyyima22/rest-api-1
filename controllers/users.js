const { User } = require('../models')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
require('dotenv').config()

class Controller {
    static showAll(req,res){
        User.findAll({order:[["id","ASC"]]})
        .then((users)=>{
            res.json(users)
        })
        .catch((err)=>{
            res.status(500).json(err)
        })
    }
    static showOne(req,res){
        let id = req.params.id
        User.findByPk(id)
        .then((user)=>{
            res.json(user)
        })
        .catch((err)=>{
            res.status(500).json(err)
        })
    }
    static add(req,res){
        let username = req.body.username
        let password = bcrypt.hashSync(req.body.password, 8)
        let role = req.body.role
        User.create({username:username,password:password,role:role})
        .then(()=>{
            res.status(201).json()
        })
        .catch((err)=>{
            res.status(500).json(err)
        })
    }
    static delete (req,res){
        let id = req.params.id
        User.findByPk(id)
        .then((user)=>{
            user.destroy()
            .then(()=>{
                res.status(201).json(user)
            })
            .catch((err)=>{
                res.status(500).json(err)
            })
        })
        .catch((err)=>{
            res.status(500).json(err)
        })
    }
    static update (req,res){
        let id = req.params.id
        let username = req.body.username
        let password = bcrypt.hashSync(req.body.password, 8)
        let role = req.body.role
        User.findByPk(id)
        .then((user)=>{
            user.update({username:username,password:password,role:role})
            .then(()=>{
                res.status(201).json()
            })
            .catch((err)=>{
                res.status(500).json(err)
            })
        })
        .catch((err)=>{
            res.status(500).json(err)
        })
    }
    static signup(req,res){
        let username = req.body.username
        let password = bcrypt.hashSync(req.body.password, 8)
        let role = req.body.role
        User.create({username:username,password:password,role:role})
        .then(()=>{
            res.status(201).json()
        })
        .catch((err)=>{
            res.status(500).json(err)
        })
    }
    static signin(req,res){
        let username = req.body.username
        User.findOne({where:{
            "username":username
        }})
        .then((user)=>{
            if(!user.username){
                res.status(401).json('username tidak ditemukan!')
            }
            else{
                let verified = bcrypt.compareSync(req.body.password,user.password)
                if(verified){
                    let token = jwt.sign({
                        id : user.id,
                        role: user.role,
                        username : user.username
                    },process.env.DB_HASH_SECRET,{expiresIn:'1h'})
                    req.token = token
                    req.header.token  = token
                    res.status(200).json(token)
                }
                else{
                    res.status(401).json('password salah!')
                }
            }
        })
    }
}

module.exports = Controller