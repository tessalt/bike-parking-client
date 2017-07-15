import Step from '../step';

export default class StepThreeA extends Step {
  constructor() {
    super(...arguments);
  }

  get html() {
    const head = this.template(this.copy)
    const body = `<input type="datetime-local" id="date" /><br><button id="button">Done</button>`;
    return head + body;
  }

  bind() {
    document.getElementById('button').addEventListener('click', (event) => {
      const value = document.getElementById('date').value;
      this.survey.setState({
        timeFull: value
      });
      if (this.survey.state.issues && this.survey.state.issues.absent) {
        this.router.navigate('/survey/3b')
      } else {
        this.router.navigate('/survey/4')
      }
    });
  }
}