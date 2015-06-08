$('.tab-list').each(function(){
    var $this = $(this);
    var $tab = $this.find('li .active');
    var $link = $tab.find('a');
    var $panel = $($link.attr('href'));

    $('.accordion').on('click', '.accordion-control', function(e){
        e.preventDefault();
        $(this)
            .next('.accordion-panel')
            .not(':animated')
            .slideToggle();
    });

    if($this = '.active'){
        $this.next($tab).is(':animated').slideToggle();
    }

    $this.on('click', '.tab-control', function(e){
        e.preventDefault();
        var $link = $(this);
        var id = this.hash;

        if(id && !$link.is('.active')){
            $panel.removeClass('active');
            $tab.removeClass('active');

            $panel = $(id).addClass('active');
            $tab = $link.parent().addClass('active');
        }
    })
});
