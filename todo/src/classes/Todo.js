import { format } from 'date-fns';

class Todo {
  #title; #description; #dueDate; #priority; #createdAt; #project;

  constructor(title, description, dueDate, project = "None",  priority = 0)
  {
    this.#title = title;
    this.#description = description;
    this.#dueDate = format(dueDate,  'MM/dd/yyyy');
    this.#priority = priority;
    this.#createdAt = format(new Date(), 'MM/dd/yyyy - hh:mm:ss');
    this.#project = project;
  }

  get todoDetails () {
    return {
      project: this.#project,
      title: this.#title, 
      description: this.#description,
      dueDate: this.#dueDate,
      createdAt: this.#createdAt,
      priority: this.#priority
    };
  }

  /**
   * @param {string} project
   */
  set updateProject (project)
  {
    this.#project = project;
  }

  /**
   * @param {string} title
   */
  set updateTitle (title)
  {
    this.#title = title;
  }

  /**
   * @param {string} description
   */
  set updateDescription (description)
  {
    this.#description = description;
  }

  /**
   * @param {int} priority
   * 0 - Normal || >= 1 Higher
   * Throws an error if entered another datatype
   */
  set updatePriority (priority)
  {
    try {

      if (typeof priority !== "number")
      {
       throw "NaN"
      }

      this.#priority = priority
    
    } catch (error) {
      console.log(error)      
    }
  }
}


export default Todo;