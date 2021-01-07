const fetch = require('cross-fetch')

module.exports = class Jikan {

    constructor() {
        this.url = 'https://api.jikan.moe/v3'
    }

    Send(url) {
        return new Promise((resolve, reject) => {
            fetch(url)
            .then(r => {
                resolve(r)
            })
            .catch(e => {
                reject(e)
            })
        })
    }

    async Search(type, name) {
        try{

            let response = await this.Send(this.url + `/search/${type}?q=${name}&page=1`)

            if(response.status == 200) {
                return response.json()
            }else{
                throw new Error('something wrong with your request.')
            }
            
        }catch(e) {
            console.error(e)
        }
    }
    
}