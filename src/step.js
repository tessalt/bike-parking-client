export default class Step {
  constructor(copy, survey) {
    this.survey = survey;
    this.router = survey.router;
    this.copy = copy;
    this.el = null;
  }

  template({name, title, heading, text}) {
    return (
      `
      <div class="step ${name}">
        <p class="step-title">${title}</p>
        <h1 class="step-heading">${heading}</h1>
        <p class="step-text">${text}</p>
      </div>
      `
    )
  }

  get html() {
    return this.template(this.copy)
  }

  render() {
    this.el = this.el || document.getElementById('render');
    this.el.innerHTML = this.html;
    this.bind();
  }

  bind() {}
}
