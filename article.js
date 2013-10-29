(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['article'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n                <article id=\"";
  if (stack1 = helpers['meneame:link_id']) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0['meneame:link_id']; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" ";
  stack2 = helpers['if'].call(depth0, ((stack1 = data),stack1 == null || stack1 === false ? stack1 : stack1.index), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += ">\n                    <header>\n                        <a href=\"#";
  if (stack2 = helpers['meneame:link_id']) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0['meneame:link_id']; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" class=\"noticia\" title=\"";
  if (stack2 = helpers.title) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.title; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\">\n                        <small>\n                            ";
  if (stack2 = helpers['meneame:votes']) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0['meneame:votes']; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + " votos, ";
  if (stack2 = helpers['meneame:comments']) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0['meneame:comments']; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + " comentarios\n                        </small>\n                        ";
  if (stack2 = helpers.title) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.title; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\n                        </a>\n                    </header>\n                    <section>\n                            ";
  if (stack2 = helpers.description) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.description; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n                        <p class=\"info\">\n                            <a class=\"original\" href=\"";
  if (stack2 = helpers['meneame:url']) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0['meneame:url']; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\">noticia original</a>\n                            <a href=\"#";
  if (stack2 = helpers['meneame:link_id']) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0['meneame:link_id']; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\" class=\"comments\" title=\"";
  if (stack2 = helpers.title) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.title; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\">Ver Comentarios</a>\n                        </p>\n                    </section>\n                </article>               \n            ";
  return buffer;
  }
function program2(depth0,data) {
  
  
  return "class=\"oculta\"";
  }

  buffer += "<section id=\"articles\">\n            ";
  stack1 = helpers.each.call(depth0, depth0.items, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n          </section>";
  return buffer;
  });
})();