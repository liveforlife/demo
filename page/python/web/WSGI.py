def application(environ,start_response):
    start_response('200 OK',[('Content-Type','text/html')])
    body = '<h1>hello,%s!</h1>' % (environ['PATH_INFO'][1:]or 'web')
    return [body.encode('utf-8')]

from wsgiref.simple_server import make_server
httpd = make_server('127.0.0.1',9999,application)
print('Serving HTTP on port 9999')
httpd.serve_forever()