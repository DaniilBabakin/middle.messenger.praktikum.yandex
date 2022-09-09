window.Templator = (function() {
  class Templator{
    TEMPLATE_REGEXP = /\{\{(.*?)\}\}/gi

    constructor(template) {
      this._template = template
    }

    compile(ctx){
      return this._compileTemplate(this._template,ctx) //Чтобы логику функции _compileTemplate случайно(или не случайно) не изменили, мы получаем ее через complie
    }

    _compileTemplate(template,ctx){
      let tmpl = this._template
      let key = null
      const regExp = this.TEMPLATE_REGEXP

      while((key = regExp.exec(tmpl))){
        if(key[1]){
          const tmplValue = key[1].trim()
          const data = window.getObjectInfo(ctx,tmplValue)
          tmpl = tmpl.replace(new RegExp(key[0],'gi'),data)
        }
      }
      return tmpl
    }
  }
  return Templator
})()