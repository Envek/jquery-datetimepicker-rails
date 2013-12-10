jQuery(document).on('ready page:change', function() {
    var datetimefield = jQuery('.datetimepicker');
    datetimefield.datetimepicker({
        format: 'Y-m-d H:i:s',
        lang: datetimefield.attr('lang') || datetimefield.parents('[lang]').attr('lang')
    });
});
