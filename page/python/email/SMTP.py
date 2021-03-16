from email.mime.text import MIMEText
from email.header import Header
from email import encoders
from email.utils import parseaddr,formataddr
from email.mime.multipart import MIMEMultipart
from email.mime.base import MIMEBase

def _format_addr(s):
    name,addr=parseaddr(s)
    return formataddr((Header(name,'utf-8').encode(),addr))
message = """From: From Person <from@fromdomain.com>
To: To Person <to@todomain.com>
Subject: SMTP e-mail test

This is a test e-mail message.
"""

from_addr = '962383345@qq.com' #input('From:')
password = '123'#input('Password:')
to_addr = '18202835991@163.com'#input('To:')

smtp_server = 'smtp.qq.com'#input('SMTP server:')
if smtp_server == 'smtp.qq.com':
    password = 'rzdoydmpaqxvbdef'

# msg = MIMEText('hello,send by python...','plain','utf-8') # 纯文本
# msg = MIMEText('<html><body><h1>Hello</h1>' +
#     '<p>send by <a href="http://www.python.org">Python</a>...</p>' +
#     '</body></html>', 'html', 'utf-8') # 邮件内容为 网页
# 邮件对象
# msg = MIMEMultipart()
msg = MIMEMultipart('alternative') # 组合html 和plain；能够查看 html则显示html;否则降级显示 plain
msg["Form"] =_format_addr('Python爱好者<%s>'% from_addr)
msg["To"] = _format_addr('管理员<%s>'%to_addr)
msg["Subject"] = Header('来自SMTP的问候...','utf-8').encode()

msg.attach(MIMEText('send with file...','plain','utf-8'))
msg.attach(MIMEText('<html><body><h1>Hello</h1>'+
    '<p><img src="cid:0"></p>'+
    '</body></html>','html','utf-8'))
with open('../simply.jpg','rb') as f:
    mime = MIMEBase('image','png',filename='test.png')
    mime.add_header('Content-Disposition','attachment',filename='test.png')
    mime.add_header('Content-ID','<0>')
    mime.add_header('X-Attachment-Id','0')
    mime.set_payload(f.read())
    encoders.encode_base64(mime)
    msg.attach(mime)

import smtplib
# smtp_server = 'smtp.gmail.com'
# smtp_port = 587
server = smtplib.SMTP(smtp_server,25) # 明文传输内容，可能被监听
# server = smtplib.SMTP(smtp_server,smtp_port) # 加密方式，对网络有要求
# server.starttls()
server.set_debuglevel(1)
server.login(from_addr,password)
server.sendmail(from_addr,[to_addr],msg.as_string())
server.quit()

# Message
# +- MIMEBase
#    +- MIMEMultipart
#    +- MIMENonMultipart
#       +- MIMEMessage
#       +- MIMEText
#       +- MIMEImage

# 构造一个邮件对象就是一个Messag对象，如果构造一个MIMEText对象，就表示一个文本邮件对象，如果构造一个MIMEImage对象，就表示一个作为附件的图片，要把多个对象组合起来，就用MIMEMultipart对象，而MIMEBase可以表示任何对象。它们的继承关系如下：