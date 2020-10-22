const todos = (title = 'undefined',
  description = 'undefined', dueDate = 'undefined',
  priority = 'undefined', notes = 'undefined',
  checklist = []) => {
  const getTitle = () => this.title;
  const getDescription = () => this.description;
  const changeTitle = text => { this.title = text; };
  const changeDescription = text => { this.description = text; };
  const changePriority = n => { this.priority = n; };
  const changeNotes = text => { this.priority = text; };
  const addToChecklist = (text, executed = false) => { checklist.push({ text, executed }); };
  const changeListOnChecklist = (i, property, value) => { checklist[i][property] = value; };

  return {
    title,
    description,
    dueDate,
    priority,
    notes,
    checklist,
  };
};

export default { todos };