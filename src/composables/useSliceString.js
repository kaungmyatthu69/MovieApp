export const sliceString=(string)=>{
    if(string.length>20){
       return  string.slice(0,70)+"..."
    }else {
        return string
    }
}