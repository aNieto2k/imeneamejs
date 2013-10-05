// URL's
var urls = {
    pendientes: "http://pipes.yahoo.com/pipes/pipe.run?_id=491e23812a1b3df3771169ad4c595f68&_render=json&feedcount=25&feedurl=http://www.meneame.net/rss2.php?status=queued",
    publicadas: "http://pipes.yahoo.com/pipes/pipe.run?_id=491e23812a1b3df3771169ad4c595f68&_render=json&feedcount=25&feedurl=http%3A%2F%2Fwww.meneame.net%2Frss2.php",
    comentarios: "http://pipes.yahoo.com/pipes/pipe.run?_id=491e23812a1b3df3771169ad4c595f68&_render=json&feedcount=100&feedurl=http://www.meneame.net/comments_rss2.php?id="

}


function loadRss(){
    var $sourceEl = $("#page");
    var source   = $sourceEl.html();
    var template = Handlebars.compile(source);
        
    var html;
    var context;
    var seccion = (location.href.indexOf('pendientes') > -1)?"pendientes":"publicadas";

    if (seccion == "pendientes"){
        $("#seccion .publicadas").removeClass("active");
        $("#seccion .pendientes").addClass("active");
    } else {
        $("#seccion .publicadas").addClass("active");
        $("#seccion .pendientes").removeClass("active");
    }

    $.getJSON(urls[seccion], function(data){
        context = data.value;
        
        for (var x in context.items){
            context.items[x].description = context.items[x].description.replace(/<\/p>.*$/, '</p>');
        }
        
        
        var html    = template(context);
        $sourceEl.after(html)
        $("#content").removeClass("loading");
        
        
        var commentsTemplate = Handlebars.compile($("#comments").html());
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
   

