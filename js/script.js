'use script'

const isFrendCome =  false

const meetingRequest = new Promise((relosve, reject)=>{
    if(isFrendCome){
        const msg = "Frend I'm there"
        resolve()
    }else{
        const err  = "I can't come there"
        reject(err)
    }
})

meetingRequest.then((msg)=> console.log(msg))
.catch((err)=>console.log(err)).finally(()=> console.log("I'm calling you"))

console.log('Request data...')

const request = new Promise((resolve)=>{
    setTimeout(()=>{
        const product = {
            name:'car',
            color:'black'
        }

        console.log('Processing data...')
        resolve(product)
    }, 2000)
})

request
    .then((data)=>{
        return new Promise((resolve)=>{
            setTimeout(()=>{
                data.status = 'ordered'
                console.log('Get data...')
                resolve(data)
            }, 2000)
        })
    })
    .then((result)=>console.log(result))
    .finally(()=>console.log('Fetching end'))