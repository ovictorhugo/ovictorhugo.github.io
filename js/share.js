function share(){
	if (navigator.share !== undefined) {
		navigator.share({
			title: 'Creative by Victor',
			text: 'Um texto de resumo',
			url: 'https://https://creativebyvictor.com.br/',
		})
		.then(() => console.log('Successful share'))
		.catch((error) => console.log('Error sharing', error));
	}
}