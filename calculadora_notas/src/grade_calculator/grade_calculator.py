'''
File with class implementation
'''

class Calification:

    def __init__(self,percentage : float,grade: float):
        self.percentage : float = percentage
        self.grade : float = grade

    def get_grade(self) -> float:
        return self.grade

    def get_percentage(self) -> float:
        return self.percentage

    def get_grade_with_weight(self) -> float:
        grade = self.get_grade()
        percentage = self.get_percentage()
        return grade * percentage


class Subject:

    def __init__(self, subject_name : str):
        self.subject_name = subject_name
        self.grades : list[Calification] = []

    def agregar_nota(self, grade, percentage):
        grade = Calification(percentage,grade)
        self.grades.append(grade)
    
    def get_notas(self) -> list:
        return self.grades

    def get_weighted_grade(self) -> float:
        '''
        This method returns the current grade of the general subject

        Returns
        -------
          - weighted_grade : float
        '''
        grades : list[Calification] = self.get_notas()
        weighted_grade = 0
        for grade in grades:
            temp_grade_percentage = grade.get_percentage()
            temp_grade = grade.get_grade()
            weighted_grade += (temp_grade * temp_grade_percentage)
        
        return weighted_grade


        