document.addEventListener('DOMContentLoaded', () => {
  const projects = [
      { name: 'Evil Hangman', description: 'A hangman game using advanced data structures.' },
      { name: 'WordFamily Comparator', description: 'An optimized WordFamily comparator for efficiency.' },
      { name: 'Differential Equation Solver', description: 'Solver for first-order differential equations.' }
  ];

  const projectList = document.getElementById('project-list');
  
  projects.forEach(project => {
      const li = document.createElement('li');
      li.innerHTML = `<strong>${project.name}</strong>: ${project.description}`;
      projectList.appendChild(li);
  });
});
