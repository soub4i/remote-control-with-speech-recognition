class RemoteControl {


     constructor(element){
        this.videoElement = element;
    }

    play() {
        this.videoElement.play();
    }

    stop() {
        this.videoElement.pause();
        this.videoElement.currentTime = 0;
    }

    mute() {
        this.videoElement.muted= true;
    }

    unmute() {
        this.videoElement.muted= false;
    }
      

}