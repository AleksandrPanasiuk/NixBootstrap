window.onscroll = function ()
{
    let scroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scroll_progress = scroll/height *100;
    $('.progress-bar').css('width', scroll_progress + '%');
}



document.querySelector('#confirm-form1').addEventListener('click', validate)

function validate(){
    let checkboxesChecked = [];
    let userDate = [];
    event.preventDefault()
    let name = document.querySelector("#InputName1");
    let email = document.querySelector("#InputEmail1");
    let games = document.querySelectorAll(".form-check-input");
    let text = document.querySelector("#FormControlTextarea1");
    let re = /^[\w-\.]+@[\w-]+\.[a-z]{2,6}$/i;
    if(!name.value && !email.value && !text.value){
        name.css('border', '1px solid red')
        email.css('border', '1px solid red')
        alert("Your form is not valid!")
    }
    else if (re.test(email.value)){
        for (let index = 0; index < games.length; index++) {
            if (games[index].checked) {
                checkboxesChecked.push(games[index].value);
            }
        }
        if (checkboxesChecked.length === 0){
            alert("Choose variant in checkbox")
        }
        else{
            userDate.push("Name:"+name.value+"\n","Email:"+email.value+"\n","Checkbox Variant:"+checkboxesChecked+"\n","About your self:"+text.value+"\n");
            alert (userDate)

        }
    }
}

let switchTheme = document.querySelector('.theme')

switchTheme.addEventListener('click', e=>{
    switch (e.target.className) {
        case 'Dark':
            $('.main').css('background-color', 'black')
            $('.main').css('color', 'white')
            $('.card-body').css('color', 'black')
            break
        case 'Light':
            $('.main').css('background-color', 'white')
            $('.main').css('color', 'black')
            $('.card-body').css('color', 'black')
            break

    }
})

function clickNS(event) {if
(document||(document.getElementById&&!document.all)) {
    if (event.which===2) {
        return false;}}}
if (document) {
    document.captureEvents(Event.MOUSEDOWN);
    document.onmousedown=clickNS;
}else{
    document.onmouseup=clickNS;
    document.oncontextmenu=clickIE;
}
document.oncontextmenu=new Function("return false")

setInterval(()=>{
    if (confirm("Are you there?")) {
        return true
    } else {
        window.close();
    }
},300000)

let BrowserDetect = {
    init: function () {
        this.browser = this.searchString(this.dataBrowser) || "An unknown browser";
        this.version = this.searchVersion(navigator.userAgent) || this.searchVersion(navigator.appVersion) || "an unknown version";
    },
    searchString: function (data) {
        for (let i=0;i<data.length;i++) {
            let dataString = data[i].string;
            let dataProp = data[i].prop;
            this.versionSearchString = data[i].versionSearch || data[i].identity;
            if (dataString) {
                if (dataString.indexOf(data[i].subString) !== -1)
                    return data[i].identity;
            }
            else if (dataProp)
                return data[i].identity;
        }
    },
    searchVersion: function (dataString) {
        let index = dataString.indexOf(this.versionSearchString);
        if (index === -1) return;
        return parseFloat(dataString.substring(index+this.versionSearchString.length+1));
    },
    dataBrowser: [
        {
            string: navigator.userAgent,
            subString: "Chrome",
            identity: "Chrome"
        },
        {
            string: navigator.vendor,
            subString: "Apple",
            identity: "Safari",
            versionSearch: "Version"
        },
        {
            string: navigator.userAgent,
            subString: "Firefox",
            identity: "Firefox"
        },
        {
            string: navigator.userAgent,
            subString: "Netscape",
            identity: "Netscape"
        },
        {
            string: navigator.userAgent,
            subString: "MSIE",
            identity: "Internet Explorer",
            versionSearch: "MSIE"
        },
        {
            string: navigator.userAgent,
            subString: "Mozilla",
            identity: "Netscape",
            versionSearch: "Mozilla"
        }
    ],


};
BrowserDetect.init();

document.querySelector('#browser').innerHTML=BrowserDetect.browser;
document.querySelector('#version').innerHTML=BrowserDetect.version;

