// URL's
var urls = {
    pendientes: "http://pipes.yahoo.com/pipes/pipe.run?_id=491e23812a1b3df3771169ad4c595f68&_render=json&feedcount=25&feedurl=http://www.meneame.net/rss2.php?status=queued",
    publicadas: "http://pipes.yahoo.com/pipes/pipe.run?_id=491e23812a1b3df3771169ad4c595f68&_render=json&feedcount=25&feedurl=http%3A%2F%2Fwww.meneame.net%2Frss2.php",
    comentarios: "http://pipes.yahoo.com/pipes/pipe.run?_id=491e23812a1b3df3771169ad4c595f68&_render=json&feedcount=100&feedurl=http://www.meneame.net/comments_rss2.php?id="

}

// Template principal
var $sourceEl = $("#page_template");
var template = Handlebars.compile($sourceEl.html());

// Templare para artículos
Handlebars.registerPartial("article", $("#article_template").html());

// Template para comentarios
var commentsTemplate = Handlebars.compile($("#comments_template").html());

var context;
function loadRss(){

    var html;
 
    var seccion = "publicadas";
    if (location.href.indexOf("pendientes") > -1) seccion = "pendientes";
 
    if (/#\d+$/.test(location.href)) return;

    if (seccion == "pendientes"){
        $("#seccion .publicadas").removeClass("active");
        $("#seccion .pendientes").addClass("active");
    } else if (seccion == "publicadas") {
        $("#seccion .publicadas").addClass("active");
        $("#seccion .pendientes").removeClass("active");
    } 

    $.getJSON(urls[seccion], function(data){
        context = data.value;
        
        for (var x in context.items){
            context.items[x].description = context.items[x].description.replace(/<\/p>.*$/, '</p>');
        }
        
        context.items[0].first = true;
        
        var html    = template(context);
        $sourceEl.after(html)
        $("#content").removeClass("loading");
        
        
        $("p.info").on("click", "a.comments", function(){
            var $this = $(this);
            var id = this.href.replace(/^.*#/,'');
            var $comments = $(this).parent().parent().append('<p class="comments loading"></p>');
            $(this).addClass("atras");
            
            $.getJSON(urls.comentarios + id, function(data){
                context = data.value;
            
                
                var html    = commentsTemplate(context);
                $comments.find("p.comments").html(html).removeClass("loading");
                $this.removeClass("comments");
            });  
        }).on("click", "a.atras", function(){
                        $("p.comments").remove();
                        $(this).addClass("comments").removeClass("atras");
        });



    });     

}
$(window).bind("hashchange", loadRss);
loadRss();
   

