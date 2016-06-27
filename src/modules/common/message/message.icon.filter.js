workshopApp.filter("messageIconFilter",
    MessageIconFilter
);

function MessageIconFilter() {
    return function(status) {
        switch(status) {
            case 'danger':
                return 'glyphicon glyphicon-exclamation-sign';
            case 'info':
                return 'glyphicon glyphicon-info-sign';
            default:
                return '';
        }
    };
}