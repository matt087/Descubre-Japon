const { Router } = require('express');
const router = Router();

const User = require('../models/user');
const Question = require ('../models/question');
const Section = require('../models/section');
const JCulture = require('../models/japanCulture');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

router.get('/home', (req, res)=> {
  Section.find()
  .then(information =>{
    res.json(information);
  })
  .catch(error=>{
    console.error('Error al obtener el contenido: ', error);
    res.status(500).send('Error al obtener el contenido');
  });
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

//DATOS  
router.put('/edit-info/:id', (req, res) => {
  const infoId = req.params.id;
  const updatedInfo = req.body;

  Info.findByIdAndUpdate(infoId, updatedInfo, { new: true })
    .then(updated => {
      if (updated) {
        res.json({ message: 'Información actualizada correctamente', edit: updated });
      } else {
        res.status(404).send('Error');
      }
    })
    .catch(error => {
      console.error('Error al actualizar la información:', error);
      res.status(500).send('Error al actualizar la información');
    });
});

router.get('/info', (req, res) => {
Info.find()
  .then(data => {
  res.json(data);
  })
  .catch(error => {
  console.error('Error al obtener los platillos:', error);
  res.status(500).send('Error al obtener los platillos');
  });
});

router.post('/rate', async (req, res) => {
  try {
    const { waiterName, rating, comment } = req.body;
    const newRating = new waiterRating({
      waiterName,
      rating,
      comment,
    });
    const savedRating = await newRating.save();
    res.status(201).json(savedRating);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

//LOGIN
router.post('/register', async (req, res) => {
  const { nombre, email, numero, direccion, referencia, password1, password2 } = req.body;

  // Verificar si las contraseñas coinciden
  if (password1 !== password2) {
      return res.status(400).json({ error: "Las contraseñas no coinciden" });
  }

  const newUser = new User ({ nombre, email, numero, direccion, referencia, password1, password2 });
  
  try {
      await newUser.save();
      const token = jwt.sign({_id: newUser._id}, 'secretKeyRestaurantMeat');
      res.status(200).json({_id: newUser._id});

  } catch (error) {
      res.status(400).json({ error: error.message });
  }
});


router.post('/login', async(req, res) =>{
    const {email, password1}= req.body;
    const userFind = await User.findOne({email});
    if(!userFind) return res.status(401).send("El correo no existe")
    if(userFind.password1 !== password1) return res.status(401).send("incorrecta")
    const token = jwt.sign({ id: User._id}, 'secretKeyRestaurantMeat');
    return res.status(200).json({token});
})

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

//PEDIDOS
router.post('/make-orden', verifyToken, async (req, res) => {
  try {
    const { cliente, productos } = req.body;

    let total = 0;
    for (const item of productos) {
      let menuItem;
      if (item.menuItem) {
        menuItem = await MenuItem.findById(item.menuItem);
        if (!menuItem) {
          console.log(`Producto no encontrado para ID: ${item.menuItem}`);
        }
      }
      
      if (menuItem) {
        total += menuItem.price * item.cantidad;
      }
    }

    const newPedido = new Order({ cliente, productos, total });
    const savedPedido = await newPedido.save();
    res.status(201).json(savedPedido);
  } catch (err) {
    console.error('Error al crear la orden:', err);
    res.status(500).json({ message: err.message });
  }
});

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

     const payload = jwt.verify(token, 'secretKeyRestaurantMeat') //Contenido del token
     //console.log(payload)// muestra los datos contenidos en el payload deberia ser el id del usuario
     req.userId = payload._id ;
     next();
}