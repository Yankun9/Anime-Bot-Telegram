const Jikan = require('../helper/jikan')
const jikan = new Jikan()
const molde = require('../helper/molde')
const config = require('../config.json')

module.exports = {
    use: 'random anime|[genre] or manga|[genre]',
    description: 'generate random anime or manga by genre.',
    arg: true,
    f: async (bot, msg, match) => {

        let text = String(match[1]).toLowerCase().split('|')
        let type = text[0]
        let genre = text[1]

        //verify id genre
        let search_id = molde.search_genre(type, genre)

        if(search_id.status == 500) return bot.sendMessage(msg.chat.id, `gender not found, ${config.prefix}commands for help.`)

        let res = await jikan.Request(['genre', type, search_id.status], {page: 1})
        
        if(res.s == 200) {

            let count = res.r[type].length
            let index = res.r[type][molde.randomInteger(0, count)]
            if(count !== 0 && index) {
                bot.sendPhoto(msg.chat.id, index['image_url']).then(() => {
                    bot.sendMessage(msg.chat.id, molde.mode_search(index), { parse_mode: 'HTML'})
                })
            }else{
                bot.sendMessage(msg.chat.id, `<b>${name}</b> was not found.`, { parse_mode: 'HTML' })
            }
        }else{
            bot.sendMessage(msg.chat.id, res.r)
        }
    }
}