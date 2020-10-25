const todos = [];
const projects = ['Default Project'];

const todo = (title = 'Undefined to-do',
  description = 'Undefined description',
  dueDate = new Date(Date.now() + 1000 * 60 * 60 * 24 * 30 * 12),
  project = 0,
  priority = 5,
  notes = ['No notes'],
  checklist = [{ miniTask: 'No checklist', done: false }],
  finished = false) => {
  const proto = {
    getTitle() { return title; },
    setTitle(text) { title = text; },
    getDescription() { return description; },
    setDescription(text) { description = text; },
    getDueDate() { return dueDate; },
    setDueDate(text) { dueDate = text; },
    getProject() { return project; },
    setProject(index) { project = index; },
    getPriority() { return priority; },
    setPriority(n) { priority = n; },
    getNotes() { return notes; },
    setNotes(array) { notes = array; },
    getChecklist() { return checklist; },
    setChecklist(array) { checklist = array; },
    getFinished() { return finished; },
    setFinished() { finished = !finished; },
  };

  return Object.create(proto);
};

export {
  todos,
  projects,
  todo,
};