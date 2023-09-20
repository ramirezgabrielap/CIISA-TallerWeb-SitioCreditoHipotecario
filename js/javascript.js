
const TASAINTERES= 4
let valorUF = 33086;

function calculos(){

	if (!document.querySelector('input[name="tipo"]:checked')) {
		alert("[ERROR] Seleccione una de las dos opciones para continuar (nueva o usada)");
		return false;
	}

	if (!document.querySelector('input[name="pesosOuf"]:checked')) {
		alert("[ERROR] Seleccione una de las dos opciones para continuar (UF o CLP)");
		return false;
	}

	let vVivienda = document.getElementById("vVivienda").value;
	if (vVivienda == ""){
			alert("[ERROR] Ingrese el valor total del inmueble que desea adquirir.");
			return false;
		}
	let montoC = document.getElementById("montoC").value;
	if (montoC == ""){
			alert("[ERROR] Ingrese el monto que requiere para la adquisición del inmueble. Recuerde que el credito sólo puede ser hasta máximo el 80% del valor del inmueble.");
			return false;
		}
	if (vVivienda <= 0 || montoC <= 0) {
		alert("[ERROR] El monto debe ser mayor a cero. ");
		return false;
	}
	let maxCredito = (vVivienda * 0.40);
	if (montoC > maxCredito) {
			alert("[ERROR] Recuerde que el valor del Crédito, no puede superar el 80% del valor total del inmueble a comprar.");
			return false;
	}
	let años = document.getElementById("años").value;
	if (años == "" || años < 1 || años > 20){
			alert("[ERROR] Indique el plazo en años. Pueden ser máximo 20 años.");
			return false;
	}


	// UF O PESOS
	let pesosOuf = document.querySelector('input[name="pesosOuf"]:checked').value;

	let cantidadCuotas = (años * 12);
	let totalAPagar = parseInt(Math.pow(1.0 + TASAINTERES / 100, cantidadCuotas) * montoC);

	document.getElementById("botoncito").classList.add("d-none");
	document.getElementById("resultado").classList.remove("d-none");

	if(pesosOuf == 'uf'){
			totalAPagar = totalAPagar + ' UF';
	} else {
		totalAPagar = '$'+totalAPagar;
	}

	document.getElementById('total').textContent = totalAPagar;
	document.getElementById('cCuotas').textContent = cantidadCuotas;


    // https://www.w3schools.com/jsref/met_document_queryselectorall.asp
	let misInputs = document.querySelectorAll('input');
	for (let i = 0; i < misInputs.length; i++) {
		misInputs[i].setAttribute('disabled', true);
	}
}

