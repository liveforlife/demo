if [ -x $1 ]
then 
	echo "ok"
elif [ -x $2 ];then
	echo "$2 executable"
else 
	echo "fail"
fi

Count=0

$Count -eq 0 && echo "this num is 0"

notCount=1
$notCount -eq 1 || echo "this num isn't 0"

case $3 in 
	a) 
		echo "A"
	;;
	b) 
		echo "B"
	;;
	*)
		echo "C"
	;;
esac
