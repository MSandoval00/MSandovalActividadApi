$(document).ready(function () {
	GetAll();
});
function GetAll() {
	$.ajax({
		type: 'GET',
		url: 'https://besvc.capacitateparaelempleo.org/api/inscriptions/TestReport',
		dataType: 'json',
		success: function(result){
			$('#Materia').empty();
			var info = result.people[0];
			var materia = result;
			$.each(result.inscriptions, function (i, materia) {
				var filasmaterias =
					"<div style='text-align: center;' class='materias-info'>" +
					"<h5 class='mb-3'>Materia: " + materia.course.name + "</h5>" +
					"<p><strong>Nombre del sector:</strong> " + materia.course.sector.name + "</p>"+
					"<div class='sector-color' style='background-color: " + materia.course.sector.colorTheme + ";'></div>" +
					"<p class='mb-3'><strong>Fecha de Inscripción:</strong> " + materia.inscripcionDate + "</p>" +
					"<p class='mb-2'><strong>Fecha de Certificación:</strong> " + materia.certificationDate + "</p>" +
					"<p><strong>Puntuaje:</strong> " + materia.scoreCourse + "</p>" +
					"<p><strong>Folio del Certificado:</strong> " + materia.folioCertificate + "</p>" +
					"<img src='" + materia.course.imageUrl + "' alt='Course Image' class='course-image'><br/>" +"<br /> <br />" +
					"<div class='progress'>" +
					"<div class='progress-bar progress-bar-striped bg-success' role='progressbar' style='width: " + materia.advance + "%;' aria-valuenow='" + materia.advance + "' aria-valuemin='0' aria-valuemax='100'>" +
					materia.advance + "%" +
					"</div>" +
					"</div>"+
					"<p><strong>Avance:</strong> " + materia.advance + "%</p>" +
					"</div>"+"<hr />";
				$('#Materia').append(filasmaterias);
			});
			var filas =
				"<div class='media align-items-end profile-head'>"+
				"<div class='profile mr-3'>" +
				"<img src='https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80' alt='...' width='130' class='rounded mb-2 img-thumbnail'>" +
				"<a href='#' class='btn btn-outline-dark btn-sm btn-block'>Edit profile</a>" +
				"</div>" +
				"<div class='media-body mb-5 text-white'>" +
				"<h4 class='mt-0 mb-0'>" + info.name + " " + info.lastName+"</h4>"+
				"<p class='small mb-4'><i class='fas fa-map-marker-alt mr-2'></i>"+"  "+"</p>" +
				"</div>"+
				"</div>";
			$('#People').append(filas);
	},
		error: function (info) {
			alert("Ocurrio un error");
		}
});
};