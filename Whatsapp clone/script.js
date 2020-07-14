

let isMenuOpen = false,
    whatsAppTop = 0,
    currentId=0,
    isLoaded = false;

let users = [
    {
        name: "Serena Yvonne",
        dp: "https://api.sololearn.com/Uploads/Avatars/4586359.jpg"
    },

    {
        name: "Nikolay Nachev",
        dp: "https://api.sololearn.com/Uploads/Avatars/2551505.jpg"
    },
    {
        name: "Man Of Action",
        dp: "https://api.sololearn.com/Uploads/Avatars/12731601.jpg"
    },
    {
        name: "PIKACHU",
        dp: "https://api.sololearn.com/Uploads/Avatars/12006051.jpg"
    },
    {
        name:"amit",
        dp: "https://api.sololearn.com/Uploads/Avatars/10107008.jpg"
    },
    {
        name:"Aakaanksha💕",
        dp: "https://api.sololearn.com/Uploads/Avatars/12942084.jpg"
    },
    {
        name:"Kartika Soni",
        dp: "https://api.sololearn.com/Uploads/Avatars/6469695.jpg"
    },
    {
        name: "🇮🇳Omkar🕉",
        dp: "https://api.sololearn.com/Uploads/Avatars/10314085.jpg"
    },
    {
        name:"NiKi🌸 SY💕",
        dp: "https://api.sololearn.com/Uploads/Avatars/12447674.jpg"
    },
    {
        name:"Vinay_GB",
        dp: "https://api.sololearn.com/Uploads/Avatars/15771326.jpg"
    },
    {
        name:"Arb Rahim Badsa",
        dp: "https://api.sololearn.com/Uploads/Avatars/7038378.jpg"
    },
    {
        name:"Virat Kohli  🇮🇳 ",
        dp: "https://api.sololearn.com/Uploads/Avatars/14875620.jpg"
    },
    {
        name:"Rajeshwari K",
        dp: "https://api.sololearn.com/Uploads/Avatars/6804430.jpg"
    },
    {
        name:"EnCoDeR",
        dp: "https://api.sololearn.com/Uploads/Avatars/8569435.jpg"
    },
    {
        name:"Nova",
        dp: "https://api.sololearn.com/Uploads/Avatars/9027227.jpg"
    },
    {
        name:"🎃 Dark Knight 🎃",
        dp: "https://api.sololearn.com/Uploads/Avatars/4991698.jpg"
    },
    {
        name:"PALAK😄😄",
        dp: "https://api.sololearn.com/Uploads/Avatars/9391360.jpg"
    },
    {
        name:"CODE LINE🔋",
        dp: "https://api.sololearn.com/Uploads/Avatars/14381531.jpg"
    },
    {
        name:"Oma🍨",
        dp: "https://api.sololearn.com/Uploads/Avatars/14077830.jpg"
    },
    {
        name:"Farhan🏁",
        dp: "https://api.sololearn.com/Uploads/Avatars/14005334.jpg"
    },
    {
        name:"ALhama",
        dp: "https://api.sololearn.com/Uploads/Avatars/14713652.jpg"
    },
    {
        name:"Humayra🇧🇩",
        dp: "https://api.sololearn.com/Uploads/Avatars/13299247.jpg"
    },
    {
        name:"Ashutosh Agrawal",
        dp: "https://api.sololearn.com/Uploads/Avatars/10779261.jpg"
    },
    {
        name:"$hardul B",
        dp: "https://api.sololearn.com/Uploads/Avatars/5742610.jpg"
    },
    {
        name:"Rishab",
        dp: "https://api.sololearn.com/Uploads/Avatars/8797547.jpg"
    },
    {
        name:"Ketan [#Be Happy 😸]",
        dp: "https://api.sololearn.com/Uploads/Avatars/9210792.jpg"
    },
    {
        name: "Satnam Singh",
        dp: "https://api.sololearn.com/Uploads/Avatars/9233826.jpg"
    }
];

window.onload = () =>{
  
    isLoaded = true;
    $("#loading").fadeOut(500);
    $("body").css('overflow-y', 'visible');
    
};

setTimeout(()=>{
    
    if(!isLoaded){
        $("#loading").fadeOut(500);
        $("body").css('overflow-y', 'visible');
    }
    
},10000);


$(document).ready(function () {
    myClock();
    whatsAppTop = $(".top .status-bar").height() + 10;
    $(".sticky-toolbar").css("top", whatsAppTop);

    $(".contents-container .text").css("width", $(".contents-container").width()-40)

    const menu = $(".menu");
    menu.hide().css("top", whatsAppTop);
    $(".search").hide().css("margin-top", whatsAppTop);

    $(".chats-container").css("margin-top", $(".top .tool-bar").height() + whatsAppTop - 10);
    $(".status-container, .calls-container").css("margin-top", $(".top .tool-bar").height() + whatsAppTop+5);

    $(".chat-screen").css({
        "top": whatsAppTop,
        "height": "calc(100vh - "+whatsAppTop+"px)"
    });

    $(".mi-search").click(()=>{
        $(".tool-bar").hide();
        $(".chats-container").css("margin-top", 0);
        $(".status-container, .calls-container").css("margin-top", 0);
        $(".search").show();
        $('input', this).focus();
    });

    $(".mi-3dot").click(()=>{
        menu.show().css("transform", "scale(1)");
        setTimeout(()=>{
            isMenuOpen = true;
        },400);
    });

    $(".search .mi-back-arrow").click(()=>{
        $(".tool-bar").show();
        $(".search").hide();
        $(".chats-container").css("margin-top", $(".top .tool-bar").height() + whatsAppTop);
        $(".status-container, .calls-container").css("margin-top", $(".top .tool-bar").height() + whatsAppTop+15);
    });

    $(window).click(()=>{
        if(isMenuOpen){
            menu.hide().css("transform", "scale(0)");
            isMenuOpen = false;
        }

    });

    //------- Chat Screen ------------------

    let icon = $(".mi-mic");
    let input = $("#chat_input");

    let bottomHeight = $(".bottom-ui").height()+26+ 2*(whatsAppTop+20)+$(".chat-screen .tool-bar").height()+20;

    $(".chat-msg-container").css({
        "top": $(".chat-screen .tool-bar").height() + whatsAppTop+20,
        "height": "calc(100vh - "+bottomHeight+"px)"
    });
    $(".chat-screen .mi-back-arrow").click(()=>{
        $(".chat-screen").hide(); 
        $(".chats-container").css('overflow-y', 'visible');
        $("body").css('overflow-y', 'visible');

    });

    //-------------------------------------

    input.click(()=>{
         $(".chat-msg-container").scrollTop(1000);
    });
    
    input.keyup(()=>{

        icon.html("send");

        if( input.val().length === 0 ) {
            icon.html("mic");
        }

    });
    
    icon.click(()=>{
        
        if(input.val().length > 0){
            sendChat();
        }
        
    });

});

function changeTab(tab){

    deactivateTab('#chats');
    deactivateTab('#status');
    deactivateTab('#calls');

    $(tab).css({
        "border-bottom": "solid 3px",
        "padding-bottom": "10px",
        "color":"#ffffff"
    });
    
    if(tab == '#chats'){
        $(".chats-container").show();
        $(".status-container").hide();
        $(".calls-container").hide();
    }else if(tab == '#status'){
        $(".status-container").show();
        $(".chats-container").hide();
        $(".calls-container").hide();
    }else{
        $(".calls-container").show();
        $(".status-container").hide();
        $(".chats-container").hide();
    }

    function deactivateTab(target){
        $(target).css({
            "border":"none",
            "color":"#83afaa"
        });
    }

}

function closePreview(){

    setTimeout(()=>{
        $(".dp-preview-container .box").css("transform", "scale(0)");
    },100);

    setTimeout(()=>{
        $(".dp-preview-container").hide();
    },500);

}

function pic_preview(id){

    $("#dp-box").attr("src",users[id].dp);
    $("#dp-name").html(users[id].name);

    $(".dp-preview-container").css("display", "flex");

    setTimeout(()=>{
        $(".dp-preview-container .box").css("transform", "scale(1)");
    },100);

}

function makeCall(id){

    $(".voice-call-container").show();
    $("#voice-name").html(users[currentId].name);
    $("#tone")[0].play();

    if(id==1){
        $("#call-text").text("WHATSAPP VIDEO CALL");
    }else{
        $("#call-text").text("WHATSAPP VOICE CALL");
    }
}

function callNow(id, toCall){

    $(".voice-call-container").show();
    $("#voice-name").html(users[toCall].name);
    $("#tone")[0].play();

    if(id==1){
        $("#call-text").text("WHATSAPP VIDEO CALL");
    }else{
        $("#call-text").text("WHATSAPP VOICE CALL");
    }
}

function callEnd(){
    $(".voice-call-container").hide();
    $("#tone")[0].pause();
}

function sendChat(){
    
    let text = $("#chat_input").val();
    let time = new Date();
    let chatTime = time.toLocaleString('en-US', {
            hour: 'numeric', 
            minute: 'numeric', 
            hour12: true 
        });
    
    let contents = 
        `<div class="send-flex" style="word-break: break-all;">
<li class="send">`+text+`
<p class="time">`+chatTime+`<i class="material-icons single-tick">done</i></p>
</li>
</div>
`
    
    $(".list").append(contents);
    $(".chat-msg-container").scrollTop(1000);
    $("#chat_input").val("");
}

function myClock(){

    const clock = document.getElementById('clock');

    setInterval(()=>{

        let time = new Date();

        clock.innerHTML = time.toLocaleString('en-US', {
            hour: 'numeric', 
            minute: 'numeric', 
            hour12: true 
        });

    },1000);

}