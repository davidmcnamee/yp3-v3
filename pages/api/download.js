const youtubedl = require("youtube-dl");
const ffmpeg = require("@ffmpeg-installer/ffmpeg");

console.log("ffmpeg path:", ffmpeg.path);

export default (req, res) => {
  const video = youtubedl(
    "http://www.youtube.com/watch?v=90AiXO1pAiA",
    ["-x", "--audio-format", "mp3", "--ffmpeg-location", ffmpeg.path],
    {}
  );

  res.writeHead(200, {
    "Content-Type": "audio/mpeg",
    "Content-Disposition": "attachment; filename=music.mp3",
  });
  video.pipe(res);
};
