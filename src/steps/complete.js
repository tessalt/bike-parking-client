import Step from '../step';

export default class Complete extends Step {
  get html() {
    const head = this.template(this.copy)
    const body = `<input type="email" id="email"><br><button id="button">Done</button>`;
    return head + body;
  }

  bind() {
    document.getElementById('button').addEventListener('click', (event) => {
      const value = document.getElementById('email').value;
      this.survey.setState({
        email: value
      });
      console.log(JSON.stringify(this.survey.state));
    });
  }
}