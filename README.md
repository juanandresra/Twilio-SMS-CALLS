# twilio-SMS-CALLS
Uso basico de twilio atravez de node js.

Instalacion 

1.npm install

<h1>Configuracion</h1>

1. Crear una cuenta en https://www.twilio.com/

2. Cambiar el ACCOUNT SID y el AUTH TOKEN <br> <code>var client = new twilio.RestClient('{ACCOUNT SID}', '{AUTH TOKEN}');</code>

3.lanzar el servidor <code>node app</code>

<h1>Mensaje de texto SMS</h1>

http://localhost:8080/sms
parametros post num = numero , msg = mensaje

<h1>Hacer una llamada enviando solo texto</h1>

http://localhost:8080/call
parametros post num = numero , msg = mensaje

opcionales en la llamada 
https://www.twilio.com/docs/api/twiml/say

<h1>Notas</h1>

Para efectos de prueba las llamadas solo se permiten gratuitamente en algunos paises, debes activar la opcion del pais 

https://www.twilio.com/console/voice/settings/geo-permissions

Se deben registrar y verificar los numeros a enviar mensajes de texto y llamar 

https://www.twilio.com/console/phone-numbers/verified

<h1>Tarifas</h1>

https://www.twilio.com/sms/pricing

https://www.twilio.com/voice/pricing
