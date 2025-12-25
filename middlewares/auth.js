let checkToken = (req, res, next)=>{
  let {token} = req.query;
  if(token==='access'){
    return next();
  }
  throw new Error("ACCESS DENIED");
};