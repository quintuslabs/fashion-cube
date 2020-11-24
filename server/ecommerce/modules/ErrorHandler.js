
class TypedError extends Error{
  constructor(args,status,type,error){
    super(args)
    this.status=status
    this.type=type
    this.error = error
  }
}
module.exports=TypedError