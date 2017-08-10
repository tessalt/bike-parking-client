import Step from '../step';

export default class Splash extends Step {
  get html() {
    const head = this.template(this.copy);
    const body = `<div class="row-fluid"><div class="col-sm-12"><button type="button" id="button" class="pagination-centered splash-button">Begin</button></div></div>`;
    return head + body;
  }

  bind() {
    document.getElementById('button').addEventListener('click', (evt) => {
      this.router.navigate('/survey/1a')
    })
  }
}
