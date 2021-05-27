function validateForm(){

		$('#name').parent().find('span').remove();
		const name = $('#name').val().trim();
		const letras = /^[a-zA-Z]+$/;
		const may = name[0].toUpperCase();
		if (name == ''){
			$('#name').parent().append('<span>"No puedes enviar el campo vacio"</span>');

		}else if(letras.test(name) == false){
			$('#name').parent().append('<span>"Debes usar solo letras de la A a la Z"</span>');
		}else if (may != name[0]){
			$('#name').parent().append('<span>"debes partir con Mayuscula"</span>');
		}

	}