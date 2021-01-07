const TelegramBot = require('node-telegram-bot-api')
const config = require('./config.json')
const bot = new TelegramBot(config.token, { polling: true })
const fs = require('fs')

//config temp
const started = Math.round(new Date().getTime() / 1000)

//all commands
var commands = []

//load commands
for(let file of fs.readdirSync('commands/')) {
    if(file.endsWith('.js')) {
        let name = file.replace('.js', '')
        let cmd = require(`./commands/${name}`)
        commands[name] = cmd
    }
}

//set commands
Object.keys(commands).forEach(cmd => {
    bot.onText(new RegExp(`^[${config.prefix}]${cmd}(?:@(?:[^\s]+)|(?: +)?)(.+)?`, 'gmsi'), (msg, match) => {
        execute_command(cmd, bot, msg, match)
    })
})

const execute_command = (cmd, bot, msg, match) => {

    //skip old messages
    if(msg.date < started) return

    //anti-bot
    if(msg.from.is_bot) return

    // use arg from message checked
    if (!match[1] && commands[cmd] && commands[cmd].arg) {
        match[1] = (msg.reply_to_message) ? msg.reply_to_message.text : '';
        msg.text = (msg.reply_to_message && msg.reply_to_message.text) ? msg.reply_to_message.text : '';
    }

    //remove values negatives
    match = match.filter((x) => { return (x) })

    //remova duple spaces
    if(match[1] && typeof match[1] !== 'object') {
        match[1] = match[1].replace(/  +/g, ' ')
        match[1] = match[1].replace(/^\s+|\s+$/g, "")
    }

    //verify if user sended arguments
    if(commands[cmd].arg && !match[1]) return bot.sendMessage(msg.chat.id, `this command needs an argument, use ${config.prefix}commands to know more.`)

    //show that bot are writing
    bot.sendChatAction(msg.chat.id, 'typing');

    //exec command
    commands[cmd]['f'](bot, msg, match)

}

// see commands
bot.onText(new RegExp(`^[${config.prefix}]commands`, 'gmsi'), (msg, match) => {
    
    let message = '🔓 COMMANDS 🔓\n\n'
    Object.keys(commands).forEach(cmd => {
        message += `<b>${config.prefix}${cmd}</b>\nhow to use: <code>${commands[cmd].use}</code>\ndescription: <code>${commands[cmd].description}</code>\n\n`
    })

    bot.sendMessage(msg.chat.id, message, { parse_mode: 'HTML'})
})

bot.on('message', (msg) => {

    //for olds messages
    if(msg.date < started) return

    //anti-bot
    if(msg.from.is_bot) return

    if (msg.new_chat_members) {

        msg.new_chat_members.forEach((member) => {
            let name;
            (member.username) ? name = '@' + member.username : name = member.first_name;

            bot.sendMessage(msg.chat.id, name + ' ' + config.message_new_membros)
        });
    }
})