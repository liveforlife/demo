
read -p "please input a number :" Input
if [ $Input -gt 0 ];then
	echo "the number is right"
else
	echo "the number is err,exit"
	exit
fi

Count=0
Num=$Input
while [ $Count -lt 10 ]
do 
	let Num2=$Num%3
	if [ $Num2 -eq 0 ];then
		echo "$Num"
		let Count++
	fi
	let Num++
done
