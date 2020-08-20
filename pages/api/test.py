from http.server import BaseHTTPRequestHandler
from cowpy import cow
import youtube_dl

class handler(BaseHTTPRequestHandler):

  def do_GET(self):
    self.send_response(200)
    self.send_header('Content-type', 'video/mpeg4')
    self.send_header('Content-Disposition', 'attachment; filename=music.mp4');
    self.end_headers()
    # message = cow.Cowacter().milk('Hello from Python from a Serverless Function!')
    ydl_opts = {}
    with youtube_dl.YoutubeDL(ydl_opts) as ydl:
      res = ydl.download(['https://www.youtube.com/watch?v=BaW_jenozKc'])
      self.wfile.write(res)
    # self.wfile.write(message.encode())

    return
