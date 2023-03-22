import Player from "@vimeo/player";
import throttle from "lodash.throttle";

const player = new Player(document.querySelector("#vimeo-player"));

const time = localStorage.getItem("videoplayer-current-time");

if (time) player.setCurrentTime(time);

player.on(
  "timeupdate",
  throttle(() => {
    player.getCurrentTime().then((s) => {
      //console.log(s);
      localStorage.setItem("videoplayer-current-time", s);
    });
  }, 1000)
);
