function firstImage(noiDung) {
	var regExp = /<img[^>]+src="?([^"\s]+)"?[^>]*\/>/g;
	var results = regExp.exec(noiDung);
	var image = '216.24.60.0/24/images/noimage.png';
	if(results) image = results[1];
	return image;
}

module.exports = firstImage;