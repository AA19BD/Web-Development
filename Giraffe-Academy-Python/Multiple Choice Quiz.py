from Question import Question

questions_promts=[
    "What is apple color?\n(a) Red\n(b) Blue\n(c) Yellow\n",
    "What is banana color?\n(a) Red\n(b) Blue\n(c) Yellow\n",
    "What is pineapple color?\n(a) Red\n(b) Blue\n(c) Yellow\n"
]
questions=[
    Question(questions_promts[0],"a"),
    Question(questions_promts[1],"c"),
    Question(questions_promts[2],"c")
]

def Tests(questions):
    score=0
    for question in questions:
        answer=input(question.promt)
        if answer==question.answer:
            score+=1
    print("You got: "+str(score)+" right answers "+"\ "+str(len(questions)))

Tests(questions)