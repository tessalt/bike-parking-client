import Step from '../step';

export default class Splash extends Step {
  get html() {
    const head = this.template(this.copy);
    const body = `<button type="button" id="button" class="splash-button button">Next</button>`;
    return head + body;
  }

  bind() {
    document.getElementById('button').addEventListener('click', (evt) => {
      this.router.navigate('/survey/1a')
    })
  }
}
