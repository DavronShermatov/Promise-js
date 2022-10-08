'use script'

const isFrendCome =  false

const meetingRequest = new Promise((relosve, reject)=>{
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

const requests = (time)=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve()
        }, time)
    })
}

requests(1000).then(()=>console.log('request 1000ms'))
requests(2000).then(()=>console.log('request 2000ms'))
requests(3000).then(()=>console.log('request 3000ms'))

Promise.all([requests(1000), requests(2000), requests(3000)]).then(()=>console.log('All'))
Promise.race([requests(1000), requests(2000), requests(3000)]).then(()=>console.log('race'))