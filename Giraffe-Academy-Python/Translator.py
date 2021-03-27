def Translator(phrase):
    translation=""
    for letter in phrase:
        if letter in "AEIOUaeiou":
            if letter.islower():
                translation += "g"
            else:
                translation += "G"

        else:
            translation += letter
    return translation


print(Translator(input("Put a phrase:")))