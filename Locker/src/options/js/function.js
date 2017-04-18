document.getElementById("myButton").addEventListener("click", check);
function check()/*function to check userid & password*/
{
	sha512usr = hex_sha512(document.getElementById('userid').value).toUpperCase();
	sha512pswrd = hex_sha512(document.getElementById('pswrd').value).toUpperCase();
	var dt = new Date();
	console.log(dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds() + " USR : " + sha512usr + " PASWORD : " + sha512pswrd);
	// Change Hashedusr & hashedpswrd to your sha512 hash
	hashedusr = "99ADC231B045331E514A516B4B7680F588E3823213ABE901738BC3AD67B2F6FCB3C64EFB93D18002588D3CCC1A49EFBAE1CE20CB43DF36B38651F11FA75678E8";
	hashedpswrd = "99ADC231B045331E514A516B4B7680F588E3823213ABE901738BC3AD67B2F6FCB3C64EFB93D18002588D3CCC1A49EFBAE1CE20CB43DF36B38651F11FA75678E8";
 if(sha512usr == hashedusr && sha512pswrd == hashedpswrd)
  {
  
  //NEED TO DO : get date hash it and send it like : target.html#2017
	datehash = hex_sha512(dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds());
    window.open('target.html#'+datehash)/*opens the target page while Id & password matches*/
	close();
  }
 else
 {
   alert("Error Password or Username")/*displays error message*/
  }
}