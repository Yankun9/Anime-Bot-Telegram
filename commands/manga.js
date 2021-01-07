const Jikan = require('../helper/jikan')
const jikan = new Jikan()
const molde = require('../helper/molde')

module.exports = {
    use: 'manga [name]',
    description: 'search for a manga by name.',
    arg: true,
    f: async (bot, msg, match) => {
        let name = String(match[1]).toLowerCase()

        let res = await jikan.Request(['search', 'manga'], {q: name, page: 1})

        if(res.s == 200) {

            let found = res.r.results.length
            let mangas = res.r.results
            var index;
            for(let manga of mangas) {
                if(String(manga.title).toLowerCase().match(name)) {
                    index = manga;
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