
const modeloUsuario=require('../../models').tblUsuario;

//console.log(modeloUsuario)


// const userControler={};


exports.createUser=async (req,res,next)=>{
    //console.log('hola')
    try {
        
        
        const {usuAli, usuNom, usuApe, usuEma, usuPas}=req.body;
        
       await modeloUsuario.create({
            usuAli, usuNom, usuApe, usuEma, usuPas
        }).then((data)=>{
            res.json({datos: data},201)
        }).catch((err) => next(err));
       
       // res.send('hola');
   
     
    } catch (error) {
        res.send(error)
        //  const errorMessage=error.name=='SequelizeUniqueConstraintError'? 'El valor que intenta ingresar ya existe en la base de datos'
        //  : res.json({error:message},500);
          
      
        
        
    }
}



exports.updateUser=async (req,res,next)=>{
    //console.log('hola')
    try {

        const user =await  modeloUsuario.findByPk(req.params.id)
        const {usuAli, usuNom, usuApe, usuEma, usuPas}=req.body;

      await  user.update( {usuAli, usuNom, usuApe, usuEma, usuPas}).then((data)=>{
            res.json({datos:data},200)
        }).catch((err) => next(err));
        
        
        
        
       await modeloUsuario.create({
            usuAli, usuNom, usuApe, usuEma, usuPas
        }).then((data)=>{
            res.json({datos: data},201)
        }).catch((err) => next(err));
       
       // res.send('hola');
   
     
    } catch (error) {
        res.send(error)
        //  const errorMessage=error.name=='SequelizeUniqueConstraintError'? 'El valor que intenta ingresar ya existe en la base de datos'
        //  : res.json({error:message},500);
          
      
        
        
    }
}













exports.deleteUser= async (req,res,next)=>{
    //console.log('hola')
    try {
        
        
       // res.send(req.params.id)
        
       const user =await  modeloUsuario.findByPk(req.params.id)
    

      await  user.destroy().then((data)=>{
            res.json({datos:data},200)
        }).catch((err) => next(err));
       
       // res.send('hola');
   
     
    } catch (error) {
        
         
        res.json({message:'Usuario no existe'},500);
          
      
        
        
    }
}

//module.exports = createUser;