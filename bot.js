const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');

var prefix = ayarlar.prefix;

client.on('ready', () => {
  console.log(`Botunuz olan ${client.user.tag} sunucuya giriş yaptı!`);
});
client.on('message', msg => {
  if (msg.content.toLowerCase() === 'iyi') {
    msg.channel.sendMessage('harika o zaman');
  }  if (msg.content.toLowerCase() === 'iyi') {

      msg.channel.sendMessage('harika o zaman');
    }

  if (msg.content.toLowerCase() === 'naber') {
    msg.channel.sendMessage('iyiyiz senden naber');
  }
  if (msg.content.toLowerCase() === 'takım') {
    msg.channel.sendMessage('en büyük ALLAH fenere yallah beşiktaşa kış kış galataya alkış');
  }
  if (msg.content.toLowerCase() === 'başka') {
    msg.channel.sendMessage('galata galata eşeklere salata eşekler salata yemez cimbom aslan yenilmez');
  }
  if (msg.content.toLowerCase() === 'nasılsınız') {
    msg.channel.sendMessage('iyiyiz teşekürler');
  }
  if (msg.content.toLowerCase() === 'nasılsınız') {
    msg.channel.sendMessage('iyiyiz teşekürler');
  }
  if (msg.content.toLowerCase() === 'selam') {
    msg.channel.sendMessage('selam,');
  }
  if (msg.content.toLowerCase() === 'günaydın') {
    msg.channel.sendMessage('günaydın,');
  }
  if (msg.content.toLowerCase() === 'iyi akşamlar') {
    msg.channel.sendMessage('iyi akşamlar,');
  }
  if (msg.content.toLowerCase() === 'bb') {
    msg.channel.sendMessage('bb.');
  }
  if (msg.content.toLowerCase() === 'selam millet') {
    msg.channel.sendMessage('as');
  }
  if (msg.content.toLowerCase() === 'yapımcı') {
    msg.channel.sendMessage('RamazanBey5885');
  }
  if (msg.content.toLowerCase() === 'eğlence') {
    msg.channel.sendMessage('burada');
  }
  if (msg.content.toLowerCase() === 'adamın dibi') {
    msg.channel.sendMessage('Berkay');
  }
  if (msg.content.toLowerCase() === 'adam') {
    msg.channel.sendMessage('AzizBey');
  }
  if (msg.content.toLowerCase() === 'berkayın düşmanı kimdir') {
    msg.channel.sendMessage('anan,');
  }
  if (msg.content.toLowerCase() === 'adamın siki') {
    msg.reply.sendMessage('Berkay ın düşmanı :smile:');
  }
  if (msg.content.toLowerCase() === ':atasözü 1') {
    msg.channel.sendMessage('gülme komşuna gelir başına');
  }
  if (msg.content.toLowerCase() === ':atasözü 2') {
    msg.channel.sendMessage('ağaç yaş iken eğilir');
  }
  if (msg.content.toLowerCase() === ':atasözü 3') {
    msg.channel.sendMessage('eğri otur,doğru konuş');
  }
  if (msg.content.toLowerCase() === ':atasözü 4') {
    msg.channel.sendMessage('deliye her gün bayram');
  }
if (msg.content.toLowerCase() === 'adam') {
  msg.channel.sendMessage('Berkay');
  }
  if (msg.content.toLowerCase() === 'yazılımcı') {
    msg.channel.sendMessage('Ramazan Bey#5885');
    }
});
client.on('guildBanAdd' , (guild, user) => {
  let aramızakatılanlar = guild.channels.find('name', 'aramıza-katılanlar');
  if (!aramızakatılanlar) return;
  aramızakatılanlar.send('https://media.giphy.com/media/8njotXALXXNrW/giphy.gif **Adalet dağıtma zamanı gelmiş!** '+ user.username +'**Bakıyorum da suç işlemiş,Yargı dağıtmaya devam** :fist: :writing_hand:  :spy:' );
});
client.login('NjA0NzE4MDcyNTY1MzM0MDI2.XT1VnQ.4nLz3j3LuMUIp5cqh1n0mKh9vI4');
