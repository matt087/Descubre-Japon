const { Router } = require('express');
const router = Router();

const User = require('../models/user');
const Question = require ('../models/question');
const Section = require('../models/section');
const JCulture = require('../models/japanCulture');
const Dish = require('../models/dish');
const Resultado = require('../models/result');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

router.get('/home', async (req, res)=> {
  try {
    const japanData = await Section.find();
    res.json(japanData);
  } catch (err) {
    res.status(500).send(err);
  }
 
});

router.get('/questions', (req, res) => {
Question.find()
    .then(questions => {
    res.json(questions);
    })
    .catch(error => {
    console.error('Error al obtener las preguntas:', error);
    res.status(500).send('Error al obtener las preguntas');
    });
});

router.get('/japan-culture', async (req, res) => {
  try {
    const japanData = await JCulture.findOne();
    res.json(japanData);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.get('/dishes', async (req, res) => {
  try {
    const dishes = await Dish.findOne(); 
    if (dishes) {
      res.json(dishes.dishes); 
    } else {
      res.status(404).send({ message: 'No dishes found' });
    }
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post('/guardar-resultado', async (req, res) => {
  const { nombreUsuario, respuestasCorrectas } = req.body;

  try {
    const nuevoResultado = new Resultado({
      nombreUsuario,
      respuestasCorrectas
    });

    await nuevoResultado.save();
    res.status(201).send('Resultado guardado exitosamente');
  } catch (error) {
    res.status(500).send('Error al guardar el resultado:', error);
  }
});

//LOGIN

router.post('/login', async(req, res) =>{
    const {email, password1}= req.body;
    const userFind = await User.findOne({email});
    if(!userFind) return res.status(401).send("El correo no existe")
    if(userFind.password1 !== password1) return res.status(401).send("incorrecta")
    let nombreUser = userFind.nombre;
    const token = jwt.sign({ id: User._id, nombre: nombreUser}, 'secretKeyJapan');
    return res.status(200).json({token, nombre: nombreUser});
})

router.post('/register', async (req, res) => {
  const { nombre, email, password1, password2} = req.body;

  // Verificar si las contraseñas coinciden
  if (password1 !== password2) {
      return res.status(400).json({ error: "Las contraseñas no coinciden" });
  }

  const newUser = new User ({ nombre, email, password1, password2});
  
  try {
      await newUser.save();
      const token = jwt.sign({_id: newUser._id}, 'secretKeyDCICC');
      res.status(200).json({_id: newUser._id});

  } catch (error) {
      res.status(400).json({ error: error.message });
  }
});

router.put('/update', async (req, res) => {
    const { email, newPassword } = req.body;
    try {
        const userFind = await User.findOne({ email });
        if (!userFind) return res.status(404).send("Usuario no encontrado");
        userFind.password1 = newPassword;
        await userFind.save();
        res.status(200).send("Contraseña actualizada correctamente");
    } catch (error) {
        res.status(500).send("Error al actualizar la contraseña");
    }
})

router.delete('/delete', async (req, res) =>{
    const {email, password1} = req.body;
    try
    {
        const userFind = await User.findOne({ email });
        if (!userFind) return res.status(401).send("El correo no existe");
        if (userFind.password1 !== password1) return res.status(401).send("Contraseña incorrecta");

        
        await userFind.deleteOne({_id: user._id});
        res.status(200).send("El usuario ha sido eliminado");
    }
    catch(error)
    {
        res.status(500).send("La eliminación ha sido incorrecta");
    }
    
})

module.exports = router;

//En la funcion la cabecera se la debe definir en el postman dando un valor, en este caso se debe dar el token 
function verifyToken(req, res, next){
    if(!req.headers.authorization){
        console.log("1");
        return res.status(401).send('Unathorize Request 1');
    }
    //se coloca por defecto la palabra bearer espacio y el token obtenido
    //dividir el string recibido 
    const token = req.headers.authorization.split(' ')[1]// crea un arreglo ['Bearer', 'token']
     if (token == 'null'){
        console.log("2");
        return res.status(401).send('Unathorize Request');
     }

     const payload = jwt.verify(token, 'secretKeyJapan') //Contenido del token
     //console.log(payload)// muestra los datos contenidos en el payload deberia ser el id del usuario
     req.userId = payload._id ;
     next();
}