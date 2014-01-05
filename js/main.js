$(function () {
    $('#image1').maphilight({
        fill: true,
        fillColor: '000000',
        fillOpacity: 0.1,
        stroke: false,
        alwaysOn: true
    });
    $('area').tooltipster({
        position: 'bottom',
        theme: 'tooltipster-shadow',
        contentAsHTML: true,
        interactive: true,
        crossDomain: true,
        functionInit: function (origin, content) {
            content = '<h4>' + content + '</h4>';
            if (origin.hasClass('ean')) {
                var additionalContent = $('#ean-tooltip').clone();
                additionalContent.show();

                content = additionalContent.prepend(content);
            }

            return content;
        }
    });

    $('body').on('submit', '.ean-form', function (event) {
        event.preventDefault();

        var linksPromise = getEanLinks($(event.target).children('.ean-number').val());
        linksPromise.done(function(links) {
            $(event.target).siblings('.ean-results').html(links);
            console.log($(event.target).siblings('.ean-results'));
        });
    });
});

function getEanLinks(gln) {
    var deferred = new $.Deferred();

    $.ajax({
        "url": 'http://proxy.colinfrei.com?url=http://www.medregom.admin.ch/de/Suche/GetSearchData',
        "type": 'POST',
        "dataType": "json",
        "data": {
            'Gln': gln
        }
    }).done(function (data) {
        if (data.content && data.content.rows.length > 0) {
            deferred.resolve('');
        }

        var result = data.contents.rows[0],
            url = 'http://www.medregom.admin.ch/de/Suche/Detail/?gln=' + gln + '&vorname=' + result.FirstName + '&name=' + result.LastName;

        deferred.resolve('<a href="' + url + '" target="_blank">' + result.FirstName + ' ' + result.LastName + '</a>');
    })
    .fail(function (data, status, error) {
        console.log('error');
        //TODO: handle error

            deferred.reject('');
    });

    return deferred;
}
