document.addEventListener('DOMContentLoaded', () => {
  const projects = [
      { name: 'Mental Matters', description: 'A website to educate teenagers about mental health and provide coping strategies.' },
      { name: 'Tech Tech', description: 'A Tech Technician that helps you discover an appropriate career in tech based on your answers to a quiz that asks about your strengths, personality, and personal preferences.' },
      { name: 'Carbon Footprint', description: 'A quiz that informs the user how much they are affecting the environment based on the points they earn from a quiz.' }
  ];

  const projectList = document.getElementById('project-list');
  
  projects.forEach(project => {
      const li = document.createElement('li');
      li.innerHTML = `<strong>${project.name}</strong>: ${project.description}`;
      projectList.appendChild(li);
  });
});
