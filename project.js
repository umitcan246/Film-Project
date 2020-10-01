const form = document.getElementById("film-form");
const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");

// UI Objesini Başlatma

const ui = new UI();

//Storage objesi üret

const storage = new Storage();

eventListeners();

function eventListeners() {
	form.addEventListener("submit", addFilm);
}

function addFilm(e) {
	const title = titleElement.value;
	const director = directorElement.value;
	const url = urlElement.value;

	if (title === "" || director === "" || url === "") {
		//hata
		ui.displayMessages("Tüm Alanları doldurun..", "danger");
	} else {
		const newFilm = new Film(title, director, url);

		storage.addFilmToStorage(newFilm); //storage film ekleme
		ui.displayMessages("Film Başarıyla Eklendi", "success");
		ui.addFilmToUI(newFilm); //ara yüze film ekleme
	}

	ui.clearInputs(titleElement, directorElement, urlElement);
	e.preventDefault();
}
