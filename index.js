class htmlElement {
  constructor (div, klass, parrent = 'body'){
    this.div = div;
    this.klass = klass;
    this.parrent = parrent;
  }

  creatElement() {
    let elem = document.createElement(this.div);
    elem.className = this.klass;
    let parrent = document.querySelector(this.parrent)
    parrent.append(elem);
  }
}

let elem01 = new htmlElement('header', 'header header_color'),
elem011 = new htmlElement('section', 'section header-section', '.header'),
elem012 = new htmlElement('article', 'header-article article_color', '.header-section'),
elem02 = new htmlElement('main', 'content'),
elem03 = new htmlElement('footer', 'footer footer_color');

elem01.creatElement();
elem011.creatElement();
elem012.creatElement();
elem02.creatElement();
elem03.creatElement();

//console.log(elem01);
