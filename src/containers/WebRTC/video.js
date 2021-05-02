import React from "react"

const video = () => {
    (function () {

        var width = 320; // We will scale the photo width to this
        var height = 0; // This will be computed based on the input stream

        var streaming = false;

        var video = null;
        var canvas = null;
        var photo = null;
        var startbutton = null;

        function startup() {
            video = document.getElementById('video');
            canvas = document.getElementById('canvas');
            photo = document.getElementById('photo');
            startbutton = document.getElementById('startbutton');

            navigator.mediaDevices.getUserMedia({
                video: true,
                audio: false
            })
                .then(function (stream) {
                    video.srcObject = stream;
                    video.play();
                })
                .catch(function (err) {
                    console.log("An error occurred: " + err);
                });

            video.addEventListener('canplay', function (ev) {
                if (!streaming) {
                    height = video.videoHeight / (video.videoWidth / width);

                    if (isNaN(height)) {
                        height = width / (4 / 3);
                    }

                    video.setAttribute('width', width);
                    video.setAttribute('height', height);
                    canvas.setAttribute('width', width);
                    canvas.setAttribute('height', height);
                    streaming = true;
                }
            }, false);

            startbutton.addEventListener('click', function (ev) {
                takepicture();
                ev.preventDefault();
            }, false);

            clearphoto();
        }


        function clearphoto() {
            var context = canvas.getContext('2d');
            context.fillStyle = "#AAA";
            context.fillRect(0, 0, canvas.width, canvas.height);

            var data = canvas.toDataURL('image/png');
            photo.setAttribute('src', data);
        }

        function takepicture() {
            var context = canvas.getContext('2d');
            const a = document.getElementById("a")
            if (width && height) {
                canvas.width = width;
                canvas.height = height;
                context.drawImage(video, 0, 0, width, height);
                var data = canvas.toDataURL('image/png');
                console.log(data)
                photo.setAttribute('src', data);
                document.body.appendChild(a)
                a.href = data
                a.download = "canvas-image.jpg"
                a.click()
            } else {
                clearphoto();
            }
        }

        window.addEventListener('load', startup, false);
    })();

    return (
        <div className="contentarea">
            <h1>
                Using Javascript to capture Photo
        </h1>
            <div className="camera">
                <video id="video">Video stream not available.</video>
            </div>
            <div><button id="startbutton">Take photo</button></div>
            <canvas id="canvas"></canvas>
            <div className="output">
                <img id="photo" alt="The screen capture will appear in this box." />
            </div>
        </div>
    )
}

export default video