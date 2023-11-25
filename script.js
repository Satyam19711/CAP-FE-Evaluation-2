
function Student(name, roll_no, className, section, marks_of_5_subjects) {
    this.name = name;
    this.roll_no = roll_no;
    this.class = className;
    this.section = section;
    this.marks_of_5_subjects = marks_of_5_subjects;

   
    this.printTop3Subjects = function () {
        const subjects = Object.keys(this.marks_of_5_subjects);
        const sortedSubjects = subjects.sort((a, b) => {
            return this.marks_of_5_subjects[b] - this.marks_of_5_subjects[a];
        });
        const top3 = sortedSubjects.slice(0, 3);
        console.log("Top 3 Subjects based on marks:");
        console.log(top3);
    };

    this.printReportCard = function () {
        console.log("+--------------------+");
        console.log("|     REPORT CARD    |");
        console.log("+--------------------+");
        console.log ("| Name     - " + this.name);
        console.log("| Roll no. - " + this.roll_no);
        console.log("| Class    - " + this.class);
        console.log("| Section  - " + this.section);

       
        Object.keys(this.marks_of_5_subjects).forEach((subject) => {
            console.log(`| ${subject.charAt(0).toUpperCase() + subject.slice(1)} - ${this.marks_of_5_subjects[subject]}`);
        });

        
        const totalMarks = Object.values(this.marks_of_5_subjects).reduce((acc, val) => acc + val, 0);
        const percentage = (totalMarks / (Object.keys(this.marks_of_5_subjects).length * 100)) * 100;
        console.log(`| Percent - ${percentage.toFixed(1)} %`);
        console.log("+--------------------+");
    };
}


const student1 = new Student("Satyam", 16, "X", "A", {
    science: 72,
    maths: 75,
    S_Sc  : 79,
    english: 80,
    hindi: 67
});

student1.printTop3Subjects(); 
student1.printReportCard(); 
