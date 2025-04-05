def minMaxFinder():
    numOfList = input("Enter the values as separate by spaces ... : ")
    
    convertItToList = list(map(int,numOfList.split()))
    
    min = convertItToList[0]
    max = convertItToList[0]
    
    for i in convertItToList:
        if (min < i):  min = i 
        if (max > i): max = i 
    print("Maximum of the list" ,max)
    print("Minimum of the list" ,min)
    
    
minMaxFinder()