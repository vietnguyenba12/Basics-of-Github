let allStudents = [
    'A',
    'B-',
    1,
    4,
    5,
    2
]



// chuẩn hóa dữ liệu đưa về 1 grading system
function firstGradingSys(grade)
{
    let res;

    switch (grade)
    {
        case 'A':
            res = 5;
            break;
        case 'A-':
            res = 4;
            break;
        case 'B':
            res = 3;
            break;
        case 'B-':
            res = 2;
            break;
        case 'C':
            res = 1;
            break;
        case 'C-':
            res = 0;
            break;
        default:
            res = grade;
    }

    return res;
}

function transformGradingSys(allStudents)
{
    for (let i = 0, len = allStudents.length; i < len; i++)
    {
        allStudents[i] = firstGradingSys(allStudents[i]);
    }

    return allStudents;
}

function secondGradingSys(allStudents)
{

}

let copyAllStudents = transformGradingSys(allStudents);

// Find the passed students then push to array
let studentsWhoPass = [];

function getPassedStudent(copyAllStudents, allStudents, studentsWhoPass = [])
{
    for (let i = 0, len = copyAllStudents.length; i < len; i++)
    {
        if (copyAllStudents[i] >= 3)
            studentsWhoPass.push(allStudents[i]);
    }

    return studentsWhoPass;
}

getPassedStudent(copyAllStudents, allStudents, studentsWhoPass);

console.log(studentsWhoPass);