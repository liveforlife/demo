from datetime import datetime,timedelta,timezone

# 获取当前日期和时间
now = datetime.now()
print('获取当前时间：%s'%now)

# 获取指定日期和时间
dt = datetime(2019,4,19,20,2)
print('构造时间：%s' % dt)

# datetime 转化为 timestamp
ts = dt.timestamp()
print('时间戳：%s'%ts)

# timestamp 转化为 datetime
t = 1429417200.0
td = datetime.fromtimestamp(t) # 转化为 本地UTC
tdN = datetime.utcfromtimestamp(t) # 转化为 标准时区的时间
print('时间戳转化为时间：%s'%td)

# str 转化为 datetime
cday = datetime.strptime('2010-6-4 20:20:21','%Y-%m-%d %H:%M:%S') # str 的格式必须要匹配后面的格式
print('str 转化为 datetime:%s'%cday)
# datetime 转化为 str
cnow = now.strftime('%a,%b %d %H:%M')
print('date 转化为 %s' % cnow)
# datetime 加减
addF = now + timedelta(hours=5,days=1)
print('时间加法%s'%addF)
# 本地时间 转化为 UTC时间
tz_utc_8 = timezone(timedelta(hours=8))
now.replace(tzinfo=tz_utc_8)
print('本地时间转化为UTC时间 %s'%tz_utc_8)
# 时区转化
utc_dt = datetime.utcnow().replace(tzinfo=timezone.utc)
print(utc_dt)
bj_dt = utc_dt.astimezone(timezone(timedelta(hours=8)))
print(bj_dt)
tokyo_dt = utc_dt.astimezone(timezone(timedelta(hours=9)))
print(tokyo_dt)
tokyo_dt2 = bj_dt.astimezone(timezone(timedelta(hours=9)))
print(tokyo_dt2)