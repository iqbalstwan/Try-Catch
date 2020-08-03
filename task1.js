const cekHariKerja = (day) =>{
    return new Promise((resolve , reject)=>{
        setTimeout(()=>{
            const dataDay = ["senin","selasa","Rabu","kamis","jumat"]
            let cek = dataDay.find((item)=>{
                return item === day
            })
            if(cek){
                resolve(cek)
            }else{
                reject(new Error("Hari ini bukan hari kerja"))
            }
        },3000)
    })
}

// cekHariKerja("senin")
//     .then((result)=>{
//         console.log(result + " adalah hari kerja");
//     })
//     .catch((result)=>{
//         console.log(result)
//     })


async function cekHari(day){
    try{
        const result = await cekHariKerja(day)
        console.log(result + " adalah hari kerja");
    }catch(error){
        console.error(error)
    }
}
cekHari("sabtu")

