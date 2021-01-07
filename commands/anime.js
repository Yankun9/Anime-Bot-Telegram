const Jikan = require('../helper/jikan')
const jikan = new Jikan()
const molde = require('../helper/molde')

module.exports = {
    use: 'anime [name]',
    description: 'search for a anime by name.',
    arg: true,
    f: async (bot, msg, match) => {
        let name = String(match[1]).toLowerCase()

        let res = await jikan.Request(['search', 'anime'], {q: name, page: 1})

        if(res.s == 200) {

            let found = res.r.results.length
            let animes = res.r.results
            var index;
            for(let anime of animes) {
                if(String(anime.title).toLowerCase().match(name)) {
                    index = anime;
                    break
                } 
            }

            if(found !== 0 && index) {
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