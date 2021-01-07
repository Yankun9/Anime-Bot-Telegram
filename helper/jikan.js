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

    async Request(url, param) {
        try{

            let url_send = this.url
            let total = url.length
            let i = 0

            for(let l of url) {
                url_send += `/${l}`
                i++;

                if(i == total) url_send += '?'
            }

            
            Object.keys(param).forEach(k => {
                url_send += k + `=${param[k]}`
            })

            let response = await this.Send(url_send)
            
            if(response.status == 200) {
                return {
                    s: 200,
                    r: await response.json()
                }
            }else{
                throw new Error('something wrong with your request.')
            }
            
        }catch(e) {
            return {
                s: 500,
                r: 'something wrong with your request, try again.'
            }
        }
    }
    
}