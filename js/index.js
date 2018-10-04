function update_msg_dialog() {
    msg_count = Cookies.get('read_messages');
    if(msg_count == undefined){
        Cookies.set('read_messages', 0, {expires: 30});
        msg_count = 0;
    }

    total_msgs = document.querySelector("#messages").children.length;

    document.querySelector("#msg_count").innerHTML = (total_msgs - msg_count == 0) ? "no" : total_msgs - msg_count;
    document.querySelector("#msg_plural").innerHTML = (total_msgs - msg_count != 1) ? "s" : "";
}

update_msg_dialog();

document.querySelector("#message_dialog").onclick = function(){
    var messages = document.querySelector("#messages");
    messages.className = (messages.className == "") ? "invisible" : "";
    Cookies.set('read_messages', total_msgs, {expires: 30});
    update_msg_dialog();
}