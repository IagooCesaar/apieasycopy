global.EMAIL_TMPL = 'Olá, <strong>{0}</strong>, seja bem vindo ao Easy Copy!';
global.ambiente = process.env.NODE_ENV;
//global.ambiente = 'development';
global.PORT = process.env.PORT;
//global.PORT = 3000;
if (ambiente == 'production') {
    global.mySQLhost = '';
    global.mySQLuser = '';
    global.mySQLpassword = '';
    global.mySQLdatabase = '';
    global.mySQLport = '';
    global.urlSite = '';
    global.urlApi = '';
    global.tokenAPI = '';
} else if (ambiente == 'development') {
    global.mySQLhost = 'mysql669.umbler.com';
    global.mySQLuser = 'easycopy_teste';
    global.mySQLpassword = '9u3Ex,Wz#M';
    global.mySQLdatabase = 'easycopy_teste';
    global.mySQLport = '3306';
    global.urlSite = '';
    global.urlApi = '';
    global.tokenAPI = '';
}
module.exports = {
    versao: 0.01
}