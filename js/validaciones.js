document.getElementById('formulario').addEventListener('submit', function (event) {
    event.preventDefault();
    validarFormulario();
});

function validarFormulario() {
    validarPrimerNombre();
    validarPrimerApellido();
    validarTipoDocumento();
    validarNumeroDocumento();
    validarDireccion();
}

function validarPrimerNombre() {
    var primerNombreInput = document.getElementById('primerNombre');
    var errorPrimerNombre = document.getElementById('errorPrimerNombre');


    errorPrimerNombre.textContent = '';

    var primerNombre = primerNombreInput.value.trim();


    if (primerNombre.length > 0 && primerNombre.length >= 3 && primerNombre.length <= 10) {
        var firstLetter = primerNombre.charAt(0);
        if (!(firstLetter === firstLetter.toUpperCase() || firstLetter === firstLetter.toLowerCase())) {
            errorPrimerNombre.textContent = 'La primera letra debe ser mayúscula o minúscula.';
        }
    } else if (primerNombre.length > 0) {
        errorPrimerNombre.textContent = 'Debe tener entre 3 y 10 caracteres.';
    }
}

function validarPrimerApellido() {
    var primerApellidoInput = document.getElementById('primerApellido');
    var errorPrimerApellido = document.getElementById('errorPrimerApellido');

    errorPrimerApellido.textContent = '';

    var primerApellido = primerApellidoInput.value.trim();

    if (primerApellido.length >= 2 && primerApellido.length <= 20) {
        if (!/^[a-zA-ZáéíóúÁÉÍÓÚüÜ'\s]+$/.test(primerApellido)) {
            errorPrimerApellido.textContent = 'Solo se permiten letras, espacios, y apóstrofes.';
        }
    } else {
        errorPrimerApellido.textContent = 'Debe tener entre 2 y 20 caracteres.';
    }
}

function validarTipoDocumento() {
    var tipoDocumentoInputs = document.querySelectorAll('input[name="tipoDocumento"]');
    var errorTipoDocumento = document.getElementById('errorTipoDocumento');

    errorTipoDocumento.textContent = '';

    if (![...tipoDocumentoInputs].some(input => input.checked)) {
        errorTipoDocumento.textContent = 'Debe seleccionar un tipo de documento.';
    }
}

function validarNumeroDocumento() {
    var tipoDocumentoInputs = document.querySelectorAll('input[name="tipoDocumento"]');
    var numeroDocumentoInput = document.getElementById('numeroDocumento');
    var errorNumeroDocumento = document.getElementById('errorNumeroDocumento');

    errorNumeroDocumento.textContent = '';

    if ([...tipoDocumentoInputs].some(input => input.checked)) {
        var tipoDocumento = [...tipoDocumentoInputs].find(input => input.checked).value;
        var numeroDocumento = numeroDocumentoInput.value.trim();

        if (tipoDocumento === 'DNI') {
            if (!/^\d{7,8}(\.\d{3})*$/.test(numeroDocumento)) {
                errorNumeroDocumento.textContent = 'Ingrese un número de DNI válido.';
            }
        } else if (tipoDocumento === 'CUIL') {
            if (!/^\d{2}-\d{8}-\d{1}$|^\d{11}$/.test(numeroDocumento)) {
                errorNumeroDocumento.textContent = 'Ingrese un CUIL válido.';
            }
        }
    }
}

function validarDireccion() {
    var direccionInput = document.getElementById('direccion');
    var errorDireccion = document.getElementById('errorDireccion');

    errorDireccion.textContent = '';

    var direccion = direccionInput.value.trim();

    if (direccion.length > 0 && direccion.length >= 10 && direccion.length <= 200) {
        if (!/^[a-zA-ZáéíóúÁÉÍÓÚüÜ\s0-9,.\-'"°/]+$/.test(direccion)) {
            errorDireccion.textContent = 'Caracteres no válidos en la dirección.';
        }
    } else if (direccion.length > 0) {
        errorDireccion.textContent = 'Debe tener entre 10 y 200 caracteres.';
    }
}