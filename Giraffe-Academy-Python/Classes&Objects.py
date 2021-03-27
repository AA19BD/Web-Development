from Student import Student

student1=Student("Abylai","FIT",4.0,True)
print(student1.name,student1.gpa)

student2=Student("BOB" , "FIT" ,3,False)
student2.IncreaseGpa(2)

print(student2.FinalGpa())
print(student2.is_on_probation)