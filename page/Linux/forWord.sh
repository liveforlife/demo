Count=1
#while [ $Count -le 5 ]
#until [ $Count -ge 5 ]
for Var in aa bb cc dd oo pp
do 
	echo "loop $Count"	
	let Count++
done

