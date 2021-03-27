def Exponent(num,exp):
    index=1
    for i in range(exp):
        index*=num
    return index
print(Exponent(2,3))