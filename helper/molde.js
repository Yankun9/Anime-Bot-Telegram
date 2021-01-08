
module.exports = {
    mode_search: (json) => {
        let message = ''
        message += `Title: <b>${json['title']}</b>\n`
        message += `Type: <b>${json['type']}</b>\n`

        if(json['episodes']) {
            message += `Episodes: <b>${(json['episodes'] !== null) ? json['episodes'] : '-----'}</b>\n`
        }else {
            message += `Publishing: <b>${(json['publishing'] == true) ? 'Yes' : 'No'}</b>\n`
            message += `Chapters: <b>${(json['chapters'] !== null && json['chapters']) ? json['chapters'] : '-----'}</b>\n`
            message += `Volumes: <b>${(json['volumes'] !== null) ? json['volumes'] : '-----'}</b>\n`
        }

        message += `Score: <b>${json['score']}</b>\n`
        message += `Start Date: <b>${(json['start_date'] !== null && json['start_date']) ? String(json['start_date']).split('T')[0] : '-----'}</b>\n`
        message += `End Date: <b>${(json['end_date'] !== null && json['end_date']) ? String(json['end_date']).split('T')[0] : '-----'}</b>\n`

        if(json['genres']) {
            let genres = json['genres']
            let count = json['genres'].length
            let genres_save = ''
            let i = 0
            genres.forEach(e => {
                i++
                if(i !== count) genres_save += e['name'] + ', '
                else genres_save += e['name'] + '.' 
            })
            message += `Genres: <b>${genres_save}</b>\n`
        }

        message += `Synopsis: <b>${json['synopsis']}</b>\n`
        return message
    },
    search_genre: (type, name) => {
        var retorno = {}
        switch(type) {
            case 'anime':
                switch(name) {
                    case 'action':
                        retorno['status'] = 1
                    break
                    case 'adventure':
                        retorno['status'] = 2
                    break
                    case 'cars':
                        retorno['status'] = 3
                    break
                    case 'comedy':
                        retorno['status'] = 4
                    break
                    case 'dementia':
                        retorno['status'] = 5
                    break
                    case 'demons':
                        retorno['status'] = 6
                    break
                    case 'mystery':
                        retorno['status'] = 7
                    break
                    case 'drama':
                        retorno['status'] = 8
                    break
                    case 'ecchi':
                        retorno['status'] = 9
                    break
                    case 'fantasy':
                        retorno['status'] = 10
                    break
                    case 'game':
                        retorno['status'] = 11
                    break
                    case 'hentai':
                        retorno['status'] = 12
                    break
                    case 'historical':
                        retorno['status'] = 13
                    break
                    case 'horror':
                        retorno['status'] = 14
                    break
                    case 'kids':
                        retorno['status'] = 15
                    break
                    case 'magic':
                        retorno['status'] = 16
                    break
                    case 'martial arts':
                        retorno['status'] = 17
                    break
                    case 'mecha':
                        retorno['status'] = 18
                    break
                    case 'music':
                        retorno['status'] = 19
                    break
                    case 'parody':
                        retorno['status'] = 20
                    break
                    case 'samurai':
                        retorno['status'] = 21
                    break
                    case 'romance':
                        retorno['status'] = 22
                    break
                    case 'school':
                        retorno['status'] = 23
                    break
                    case 'sci fi':
                        retorno['status'] = 24
                    break
                    case 'shoujo':
                        retorno['status'] = 25
                    break
                    case 'shoujo ai':
                        retorno['status'] = 26
                    break
                    case 'shounen':
                        retorno['status'] = 27
                    break
                    case 'shounen ai':
                        retorno['status'] = 28
                    break
                    case 'space':
                        retorno['status'] = 29
                    break
                    case 'sports':
                        retorno['status'] = 30
                    break
                    case 'super power':
                        retorno['status'] = 31
                    break
                    case 'vampire':
                        retorno['status'] = 32
                    break
                    case 'yaoi':
                        retorno['status'] = 33
                    break
                    case 'yuri':
                        retorno['status'] = 34
                    break
                    case 'harem':
                        retorno['status'] = 35
                    break
                    case 'slice of life':
                        retorno['status'] = 36
                    break
                    case 'supernatural':
                        retorno['status'] = 37
                    break
                    case 'military':
                        retorno['status'] = 38
                    break
                    case 'police':
                        retorno['status'] = 39
                    break
                    case 'psychological':
                        retorno['status'] = 40
                    break
                    case 'thriller':
                        retorno['status'] = 41
                    break
                    case 'seinen':
                        retorno['status'] = 42
                    break
                    case 'josei':
                        retorno['status'] = 43
                    break

                    default:
                        retorno['status'] = 500

                }
            break

            case 'manga':
                switch(name) {
                    case 'action':
                        retorno['status'] = 1
                    break
                    case 'adventure':
                        retorno['status'] = 2
                    break
                    case 'cars':
                        retorno['status'] = 3
                    break
                    case 'comedy':
                        retorno['status'] = 4
                    break
                    case 'dementia':
                        retorno['status'] = 5
                    break
                    case 'demons':
                        retorno['status'] = 6
                    break
                    case 'mystery':
                        retorno['status'] = 7
                    break
                    case 'drama':
                        retorno['status'] = 8
                    break
                    case 'ecchi':
                        retorno['status'] = 9
                    break
                    case 'fantasy':
                        retorno['status'] = 10
                    break
                    case 'game':
                        retorno['status'] = 11
                    break
                    case 'hentai':
                        retorno['status'] = 12
                    break
                    case 'historical':
                        retorno['status'] = 13
                    break
                    case 'horror':
                        retorno['status'] = 14
                    break
                    case 'kids':
                        retorno['status'] = 15
                    break
                    case 'magic':
                        retorno['status'] = 16
                    break
                    case 'martial arts':
                        retorno['status'] = 17
                    break
                    case 'mecha':
                        retorno['status'] = 18
                    break
                    case 'music':
                        retorno['status'] = 19
                    break
                    case 'parody':
                        retorno['status'] = 20
                    break
                    case 'samurai':
                        retorno['status'] = 21
                    break
                    case 'romance':
                        retorno['status'] = 22
                    break
                    case 'school':
                        retorno['status'] = 23
                    break
                    case 'sci fi':
                        retorno['status'] = 24
                    break
                    case 'shoujo':
                        retorno['status'] = 25
                    break
                    case 'shoujo ai':
                        retorno['status'] = 26
                    break
                    case 'shounen':
                        retorno['status'] = 27
                    break
                    case 'shounen ai':
                        retorno['status'] = 28
                    break
                    case 'space':
                        retorno['status'] = 29
                    break
                    case 'sports':
                        retorno['status'] = 30
                    break
                    case 'super power':
                        retorno['status'] = 31
                    break
                    case 'vampire':
                        retorno['status'] = 32
                    break
                    case 'yaoi':
                        retorno['status'] = 33
                    break
                    case 'yuri':
                        retorno['status'] = 34
                    break
                    case 'harem':
                        retorno['status'] = 35
                    break
                    case 'slice of life':
                        retorno['status'] = 36
                    break
                    case 'supernatural':
                        retorno['status'] = 37
                    break
                    case 'military':
                        retorno['status'] = 38
                    break
                    case 'police':
                        retorno['status'] = 39
                    break
                    case 'psychological':
                        retorno['status'] = 40
                    break
                    case 'seinen':
                        retorno['status'] = 41
                    break
                    case 'josei':
                        retorno['status'] = 42
                    break
                    case 'doujinshi':
                        retorno['status'] = 43
                    break
                    case 'gender bender':
                        retorno['status'] = 44
                    break
                    case 'thriller':
                        retorno['status'] = 45
                    break

                    default:
                        retorno['status'] = 500
                }
            break

            default:
                retorno['status'] = 500
                retorno['msg'] = 'genre not found.'
        }
        return retorno
    },
    randomInteger: (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
    }
}