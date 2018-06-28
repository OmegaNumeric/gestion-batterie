 
 
function onBatteryStatus(status) {
    // Handle the online event
    document.getElementById("niveau").innerText=status.level+" %";
    if(status.isPlugged){
        document.getElementById("state").innerText="En charge" ;
    }else{
        document.getElementById("state").innerText="Débranchée " ;
    }
    //document.getElementById("critical")
   // console.log("Level: " + status.level + " isPlugged: " + info.isPlugged);
}




function onBatteryCritical(status) {
    document.getElementById("critical").style.display = 'block';
    document.getElementById("critic").innerText=status.level+" %";
    //alert("Battery Level Critical " + status.level + "%\nRecharge Soon!");
}




function onBatteryLow(status) {
   
    
    document.getElementById("low").style.display = 'block';
    document.getElementById("faible").innerText=status.level+" %";
    
    alert("Battery Level Low " + status.level + "%");
}

var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
         
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');
       
      
    document.getElementById("etat").addEventListener('click',function(){
        window.addEventListener("batterystatus", onBatteryStatus, false);
        window.addEventListener("batterycritical", onBatteryCritical, false);
        window.addEventListener("batterylow", onBatteryLow, false);
    });

        console.log('Received Event: ' + id);
    }
};

app.initialize();