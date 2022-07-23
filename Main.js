client.on('message', (message) => {
    if (message.content.match(/HELLO | LMAO/)) {
        message.delete()
        .then(message.channel.send('Sorry, you said a blacklist word.'))
    }
  });