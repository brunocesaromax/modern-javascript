const course = {
    title: 'Curso de javascript moderno',
    code: '112'
}

const newCourse = {
    ...course,
    category: 'Front-End'
}

console.log(newCourse);
