$('#img').faceDetection({
    complete: function (faces) {

        console.log(faces);

        //if (faces[0].confidence === -2.99391947 ) {
        //  console.log('SUCESS');
        //}

        $div = $("<div>", {"class": "face-box"});
        $div.css('top', faces[0].positionY);
        $div.css('left', faces[0].positionX);
        $div.css('width', faces[0].width);
        $div.css('height', faces[0].height);
        $("#wrapper").append($div);
    }
});