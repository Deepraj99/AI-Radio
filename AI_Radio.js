// Use this sample to create your own voice commands
intent('hello world', p => {
    p.play('(hello|hi there)');
});

intent('play (some|) $(CHANNEL* (.*)) (fm|music)', p=>{
    let channel = propject.radios.filter(x=> x.name.toLowerCase() === p.CHANNEL.value.toLowerCase())[0];
    try{
        p.play({"command":"play_channel", "id":channel.id});
        p.play('(Playing Now|on it|ok boss|Doint it)');
    }catch(err){
        console.log("Can't play");
        p.play("Song not found");
    }
});

intent('play (some|) $(CATEGORY* (.*)) (fm|music)', p=>{
    let channel = propject.radios.filter(x=> x.category.toLowerCase() === p.CATEGORY.value.toLowerCase())[0];
    try{
        p.play({"command":"play_channel", "id":channel.id});
        p.play('(Playing Now|on it|ok boss|Doint it)');
    }catch(err){
        console.log("Can't play");
        p.play("I could not find this genre");
    }
});

intent('(play)', 'play (the|) (some|) music', p => {
    p.play({"command" : "play"});
    p.play("(Playing Now| On it| Ok boss|Doing it)");
});

intent('stop (it|)', 'stop (the|) music', 'pause (the|) music', p => {
    p.play({"command" : "stop"});
    p.play("(Stopping Now| On it| Ok boss|Doing it)");
});

intent('(play|) next (channel|fm|radio|)', p => {
    p.play({"command" : "next"});
    p.play("(On it| Ok boss|Doing it|sure)");
});

intent('(play|) previous (channel|fm|radio|)', p => {
    p.play({"command" : "prev"});
    p.play("(On it| Ok boss|Doing it|sure)");
});