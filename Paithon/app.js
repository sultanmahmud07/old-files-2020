

   //তিনটি সংখার মাঝে বর সংখ্যা বের করার Programme

   num1 = int (input ("Enter the num1: "))
   num2 = int (input ("Enter the num2: "))
   num3 = int (input ("Enter the num3: "))

   if (Num1>num2) and (num1>num3):
   largest = num1
   elif (num2>num1) and (num2>num3):
   largest = num2
   else:
        largest = num3
        Print ("the largest number is", largest)





    // ত্রিভুজের ক্ষেত্রফল নির্ণয়ের Programme.
  
  a = int (input ("Enter the value of a: "))
  b = int (input ("Enter the value of b: "))
  c = int (input ("Enter the value of c: "))
  if (a+b)>c and (b+c)>a and (c+a)>b:
  Area = math.Sqrt (S (s-a) (s-b) (s-c))
  Print ("the area is = ", area)
  else:
      print ("Tringle is not possible")



     // ফারেনহাইট তাপমাত্রাকে সেন্টিগ্রেত রুপান্তরের Programme.
   
      fahrenheit = float (input ("Please enter the fahrenheit temperature: "))
      celsius = (fahrenheit - 32)/1.8
      Print ('%0.1f degree fahrenheit is =% 0.1f degree celsius' % (fahrenheit, celsius))