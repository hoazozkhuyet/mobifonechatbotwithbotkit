module.exports = function(controller) {
    controller.hears(['xin chào', 'xin chao', 'Xin chào'], 'message_received', function(bot, message){
        controller.storage.subscribed_users.get(message.user, function(err, user) {
            if(user == null || user.name.first == null) {
                bot.reply(message, 'Chào bạn');
            }
            else {
                bot.reply(message, 'Chào bạn ' + user.name.first);
            }
            
        });
    });
}