var nodemailer = require('nodemailer');
var fs = require('fs')
const email = ""; //whoops these values were accidentally removed from the PUSH, what a shame.
const emailpass = "";

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: email,
    pass: emailpass
  }
});
function createMailOptions(recipient){
    var mailOptions = {
        from: me,
        to: recipient,
        subject: 'Midterms are Coming Soon!',
        html: htmlstream,
        text: txt
      };
    return mailOptions;
}
htmlstream = fs.createReadStream('main.html');
txt = fs.createReadStream('text.txt');
function sendMail(name){
    transporter.sendMail(createMailOptions(name), function(error, info){
        if (error) {
          console.log(error);
          console.log("**Message wasn't sent to:" + name);
        } else {
          console.log('Email sent to: ' + name);
        }
      });
}
function delay(){
    return new Promise(resolve => setTimeout(resolve, 300));
}
async function delayedLog(item){
    await delay();
    sendMail(item)
}
var recipients = [] //I know I'm irresponsible, but even I'd erase this list. #GOTTEM
async function processArray(array){
    for(const item of array){
        await delayedLog(item);
    }
    console.log('Done!')
}
processArray(recipients)
