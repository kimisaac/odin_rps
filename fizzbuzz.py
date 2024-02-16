x = int(input("Enter a number:"))

for i in range(x):
    if (i%3 == 0):
        print("Fizz",end="")
        if(i%5 == 0):
            print("Buzz",end="\n")
            continue
        print()
        continue
    if(i%5 == 0):
        print("Buzz")
        continue
    print(i)
    
    
