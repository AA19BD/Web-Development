guess=""
secretWord="car"
limit_of_guesses=3
guess_numbers=0
IsOut=True

while guess!=secretWord and IsOut:
    if guess_numbers < limit_of_guesses:
        guess = input("Put a guess name-- ")
        guess_numbers += 1
    else:
        IsOut=False;

if IsOut:
 print("You chose right one")
else:
    print("You out of guess limit")