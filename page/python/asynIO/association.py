def Comsumer():
    r =''
    while True:
        n = yield r
        if not n :
            return
        print('Comsumer is %s'%n)
        r = '200 ok'
    
def Producer(c):
    c.send(None)
    n = 0
    while n<5:
        n = n+1
        print('Producer is %s'% n)
        r = c.send(n)
        print('Producer is %s' % r)
    c.close()

c = Comsumer()
Producer(c)