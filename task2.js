const getmonth = (callback) =>{
    setTimeout (()=> {
        let error = false;
        let month = ["January", "February", "March", "April", "May","Juni","July",
        "August","September", "October", "November", "Desember"];
        if(!error){
            callback(null,month)
        }else{
            callback(new Error("Sorry Data Not Found",[]))
        }
    }, 4000)
}

function showMonth(isError, data){
    if ( isError !== null){
        console.log(isError + [])
    } else {
        data.map (value =>{
            if(isError == null){
                console.log(value);
            }
        })
    }
}

getmonth(showMonth)
